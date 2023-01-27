import React, { useEffect, useState } from 'react';
import axios  from 'axios';
import { getDialogContentTextUtilityClass } from '@mui/material';


const CompA=()=>{

useEffect(()=>{
    //alert("hii");
    async function getData() {
        const response=axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`
        
        );
        console.log(response.data.name);
    }
    getData();
})

  const[num,setNum] = useState();
    return(
        <>
        <h1>Pokemon{num}</h1>
<select value={num} onChange={(event)=>{

setNum(event.target.value)
}}>
<option value="1 ">1</option>
<option value=" 5" >5</option>
<option value="25 " >25</option>
<option value="3 " >3</option>
<option value=" 4" >4</option>



</select>

        </>
    );
}

export default CompA;