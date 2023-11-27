import React, { useEffect, useState } from 'react'

function useLocalStorage(key="localData",initialValue="") {
    const[localDatal,setLocalData]=useState(
        localStorage.getItem(key)?JSON.parse(localStorage.getItem(key)):initialValue
    )
    function changeLocalData(val) {
        setLocalData(val)
    }
    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(localDatal))
    },[localDatal,key])
    return[localDatal,changeLocalData]

}

export default useLocalStorage