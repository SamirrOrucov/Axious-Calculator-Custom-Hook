import { useState,useEffect } from "react";
import "./App.css";
import axios from 'axios'
function App() {
  const [data, setData] = useState([]);
  const [isLoading,setIsloading]=useState(true)

  useEffect(() => {
async function getData() {
  const response=await axios.get("https://northwind.vercel.app/api/categories")
  setData(response.data)
  setIsloading(false)
}
async function postSmth() {
  const {dataa}=await axios.post("https://northwind.vercel.app/api/categories",{
    name:'Balqabaq',
    description:"Balqabaq bir gilemeyvedir"
  },{
    headers:{
      
    }
  })
  
}
getData()
postSmth()
  }
  , []);

  return <>
  {
    isLoading?<div className="loader"></div>:data.map(x=><li key={x.id}>{x.name}</li>)
  }
  </>;
}

export default App;
