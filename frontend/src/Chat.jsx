
import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function Chat() {
  const [msg,setMsg]=useState("");
  const [messages,setMessages]=useState([]);

  useEffect(()=>{
    socket.on("chat",m=>setMessages(prev=>[...prev,m]));
  },[]);

  return (
    <div style={{position:"absolute",bottom:10,left:10,color:"white"}}>
      <input value={msg} onChange={e=>setMsg(e.target.value)} />
      <button onClick={()=>{socket.emit("chat",msg);setMsg("");}}>Send</button>
      {messages.map((m,i)=><p key={i}>{m}</p>)}
    </div>
  );
}
