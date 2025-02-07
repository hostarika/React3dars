
import './App.css'

function App() {

  const element=Math.floor( Math.random()*100+1) 

  
  if (element%2==0) {
        
  }else{
    
  }
  let presentTime=new Date();

let kun=presentTime.getDay();
let oy=presentTime.getMonth();
let yil=presentTime.getFullYear()


let day=kun+2;

let month=oy+1;

let year=yil;
const hour = new Date().getHours();




const orqafonmain = hour >= 6 && hour < 18 ? "white" : "black";
const orqafonbox = hour >= 6 && hour < 18 ? "white" : "gray";


  return (
    <>
      <main style={{ backgroundColor: orqafonmain,}} className='main'>
        <div style={{backgroundColor: orqafonbox,}} className='box'>
            <h1 className='display'>Hello my name is: <h1 className='name'>{prompt("Ism kiriting")}</h1></h1>
            <h1>This is the day: {day+"."+month+"."+year}</h1>
            <h1 >A random number from 0 to 100:</h1>
            <h1 className='son' style={{color:element%2==1?"red":"green"}}>{element}</h1>
        </div>
      </main>


    </>
  )
}

export default App
