
import EarthScene from "./EarthScene";
import Chat from "./Chat";

export default function App(){
  return (
    <div style={{height:"100vh",background:"black", position:"relative"}}>
      <EarthScene/>
      <Chat/>
    </div>
  );
}
