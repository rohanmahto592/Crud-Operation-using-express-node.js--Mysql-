
import './App.css';
import axios from 'axios'
import { useState } from 'react';
import Validation from './Validation';
function App() {
//   const [name,setname]= useState(null);
//   const [age,setage]=useState(0);
//   const[position,setposition]=useState(null)
//   const[country,setcountry]=useState(null);
//   const[wage,setwage]=useState(0);
//   const[employee,setemployee]=useState([])
//   const  adduser=((data)=>{
//   console.log(name,age,position);
//     axios.post('http://localhost:5000/create',{
//       name:name,
//       age:age,
//       position:position,
//       country:country,
//       wage:wage
//     }).then(()=>{
//       setemployee([
//         ...employee,
//         {
//           name:name,
//           age:age,
//           position:position,
//           country:country,
//           wage:wage
//         }

        
//       ])
      
      
//     }).catch((err)=>{
//       console.log(err);
//     })
//   })
// const empdetails=()=>{
//   axios.get("http://localhost:5000/details").then((response)=>{
//     console.log(response);
//     setemployee(response.data);
    
//   })
// }
// const deletedetails=(id)=>{
//   axios.delete(`http://localhost:5000/delete/${id}`.then((response)=>{
//     setemployee(
//       employee.filter((val)=>{
//         return val.id!==id
//       })
//     );
//   }))
// }
  return (
    <div className="App">
      {/* <form method="POST" action="/create"> */}
      {/* <label>Name:</label><br/>
      <input type="text" onChange={(event)=>{setname(event.target.value)}}></input><br/>
      <label>Age:</label><br/>
      <input type="number" onChange={(event)=>setage(event.target.value)}></input><br/>
      <label>Position:</label><br/>
      <input type="text" onChange={(event)=>setposition(event.target.value)}></input><br/>
      <label>Country:</label><br/>
      <input type="text" onChange={(event)=>setcountry(event.target.value)}></input><br/>
      <label>Wage(year):</label><br/>
      <input type="number" onChange={(event)=>setwage(event.target.value)}></input><br/>

      <button type="submit" onClick={adduser}> submit</button>
      
      <button onClick={empdetails}>showdetails</button>
      
      {
        employee.map((val,id)=>{
          return(
            
            <div>
              {
                val.name
              },
              {
                val.age
              },
              {
                val.position
              },
              {
                val.country
              }
              {
                val.wage
              }
            </div>
            

            
          )
          
            
           
        })
      }
      */}
      <Validation/>
      
      
    </div> 
  );
}

export default App;
