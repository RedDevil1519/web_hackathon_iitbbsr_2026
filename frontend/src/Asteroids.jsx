
import { useEffect, useState } from "react";
import axios from "axios";
import OrbitalAsteroid from "./OrbitalAsteroid";

export default function Asteroids({ setPositions }) {
  const [list,setList] = useState([]);

  useEffect(()=>{
    const fetchData=async()=>{
      const res=await axios.get("http://localhost:5000/api/live");
      setList(res.data.slice(0,20));
    };
    fetchData();
    const i=setInterval(fetchData,20000);
    return()=>clearInterval(i);
  },[]);

  return (
    <>
      {list.map((a,i)=>(
        <OrbitalAsteroid key={a.id} data={a} index={i}
          onUpdate={(idx,pos)=>setPositions(p=>({...p,[idx]:pos}))}
        />
      ))}
    </>
  );
}
