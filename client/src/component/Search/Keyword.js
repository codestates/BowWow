const { kakao } = window;

export default function Keyword(searchPlace,dataSet) {

    const container = document.getElementById('map');
    const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
    };
    const map = new kakao.maps.Map(container, options);
    // displayMyMarker(options.center);

    // //-------- 마커 이미지 -------------//

    // var imageSrc = 'map-marker-1_icon-icons.com_56710.png', // 마커이미지의 주소입니다    
    //     imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
    //     imageOption = { offset: new kakao.maps.Point(27, 69) };

    // var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
    // //-------- 마커 생성 -------------------//
    // // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    // function displayMyMarker(locPosition) { // 함수 이름을 구분해줬다, 이래야 마크가 겹치지 않아서 버그가 생기지 않는다, 관련 호출이름도 다 바꿔 줘야한다.

    //     // 마커를 생성합니다
    //     var marker = new kakao.maps.Marker({
    //         map: map,
    //         position: locPosition,
    //         image: markerImage
    //     });


    //     // 지도 중심좌표를 접속위치로 변경합니다
    //     map.setCenter(locPosition);
    // }

    //-------------- 키워드 -------------------------//
    // 장소 검색 객체를 생성합니다

    
        var ps = new kakao.maps.services.Places();
    // 키워드로 장소를 검색합니다
    ps.keywordSearch(searchPlace, placesSearchCB)

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data, status, pagination) {
        let arr = []
        if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();
            for (var i = 0; i < data.length; i++) {
                arr.push(data[i])
                displayMarker(data[i]);
                
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
        //    console.log("----------타입--------",typeof(dataSet))
        //    console.log("----------arr타입--------",Array.isArray(arr))
          // console.log("----------객체--------",submitHandler123)
        dataSet(arr)
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        }
    }



    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place, locPosition, message) {


        var iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable
        });

        // 마커를 생성하고 지도에 표시합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'click', function () {
        //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        //     infowindow.open(map, marker);


        // });

        kakao.maps.event.addListener(marker, 'mouseover', function() {
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });

        kakao.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close();
        });

    }
}