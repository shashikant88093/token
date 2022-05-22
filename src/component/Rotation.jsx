import {Grid} from "@mui/material"
import { useState } from "react"
export const Rotation =(props)=>{
  const [count, setCount] = useState(0)
    const {token} = props
    const handleRandom =()=>{
      console.log("random")
      var min = 100000;
      var max = 999999;
      const rNumber = Math.floor(Math
      .random() * (max - min + 1)) + min;
      setCount(count+1)
      const newArray = Array.from(String(rNumber), Number)
      props.handleAdd(newArray,count+1)
  }
    
    return(<>
        <Grid  item xs={6} sm={6} lg={6} xl={6}>
        <p style={{ "color": "#FFFFFF" }}>Click the wheel to generate random tickets</p>
        <img onClick={handleRandom} src={token} width="40%" height="60%" alt="cycle" />
        <p style={{ "color": "#FED796" }}>Ticket number range : 100000 - 999999</p>
      </Grid>
        </>

    )
}