import React , {useState,useEffect,useRef} from "react";
import { StyledSearch } from "./StyledSearch";
import SearchBar from './SearchBar'
import SearchMap from './SearchMap'
import SearchMapList from './SearchMapList'

function Search() {
  const inputRef = useRef();
  useEffect(() => {
    window.scrollTo({
      top: 940,
      behavior: "smooth",
    });

    inputRef.current.focus();
  })

  const [Keyword, setKeyword] = useState("유기견 보호소");
  const [mapData, setmapData] = useState([]);

  const dataSet = (e) => {
    setmapData(e)
  } 

  const submitHandler = (e) => {
    e.preventDefault();
    let word = e.target[0].value;
    if(word === ''){
      word = '유기견 보호소'
    }
    setKeyword(word)
  } 

  return <StyledSearch className="search-page">
      <div className = 'searchWrapper'>
        <SearchBar 
        setKeyword={setKeyword}
        inputRef={inputRef}
        submitHandler = {submitHandler}
        />
        <SearchMapList 
        mapData={mapData}
        setKeyword = {setKeyword}
        />
      </div>
      <SearchMap 
      Keyword = { Keyword }
      dataSet = { dataSet }
      />

  </StyledSearch>;
}

export default Search;
