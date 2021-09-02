import React, {useEffect } from "react";
import {StyledSearchMap} from './StyledSearch'
import search from "./Keyword";
const {kakao} = window;

function SearchMap({Keyword, dataSet}) {

  
  

  useEffect(() => {
    
  console.log(Keyword)
  console.log("타입1234",typeof(dataSet))
  search(Keyword,dataSet)
  },[Keyword]);

  
  
  return (
    <StyledSearchMap id="map" >
    </StyledSearchMap>

  )
}

export default SearchMap
