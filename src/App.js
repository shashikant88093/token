import './App.css';
import { Card, Grid } from '@mui/material';
import { useState } from 'react';
//components
import {Calculator} from "./component/Calculator"
import {Rotation} from "./component/Rotation"
import {Cards} from "./component/Cards"
import token from '../src/assest/images/token.png';
function App() {
  const [ticket,setTicket] = useState([])
  const handleAdd =(value,count)=>{
    const newData = [...ticket,{value,count}]
    console.log(newData,"newData")
    setTicket(newData)

  }
  return (
    <div className="App">
      <Card style={{ "backgroundColor": "#186AB4" }}>
          <Grid container spacing={3} >
           <Calculator  handleAdd={handleAdd}/>
          <Rotation token={token} setTokenData={setTicket} handleAdd={handleAdd} />
          </Grid>
      </Card>
      <br/>
      <p style={{"textAlign":"left","fontWeight":"500","color":"#FFFFFF","paddingLeft":"1rem"}}>Your Selected Tickets:</p>
      <Cards ticket={ticket} />
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
