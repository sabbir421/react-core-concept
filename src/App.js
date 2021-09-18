
import './App.css';

function App() {
  const persons= [
    {name:"sabbir",age:"22"},
    {name:"shehab",age:"23"},
    {name:"azim",age:"21"},
    {name:"janina",age:"24"},
    {name:"janina",age:"24"},
    {name:"janina",age:"24"},
  ]
  return (
    <div className="App">
      {/* <Persone name="sabbir" id="182" ></Persone>
      <Persone name="sabbir" id="182" ></Persone>
      <Persone name="sabbir" id="182" ></Persone>
      <Persone name="sabbir" id="182" ></Persone> */}
        {persons.map(person=><Persone name={person.name} age={person.age} ></Persone>)}
    </div>
  );
}


function Persone (props){
  return(
    <div style={{backgroundColor:"blue",padding:"2px", margin:"10px",borderRadius:"10px", color:"white",width:"400px", marginLeft:"400px"}}>
      <h1>Name : {props.name }</h1>
     
      <h1>Age : {props.age }</h1>
      </div>
      
  )
}



export default App;
