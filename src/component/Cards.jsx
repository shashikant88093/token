import {Grid,Card,Box} from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useState,useEffect} from "react"

export const Cards =(props)=>{
    const {ticket} = props
    const [data,setData] = useState([])
    useEffect(()=>{
        if(data.length>5){
            alert("You can only select 5 tickets")
        }else{
        setData(ticket)
        }
    },[ ticket])
    const handleDelete =(index)=>{
        const newData = [...data]
        newData.splice(index,1)
        setData(newData)
    }
    


    return (
        <>
        <Grid container spacing={1 } style={{"paddingRight":"1rem","paddingLeft":"1rem"}} >
            {data?.map((item,index)=>{
                return (
                    <Grid item xs={3} sm={3} lg={3} xl={3} key={index}>
                    <div key={index} style={{"display":"flex","justifyContent":"end"}}>
                                   <span style={{"color": "red", "background": "#FFFFFF", "width": "2rem", "borderRadius": "3rem","position":"relative","left":".5rem","top":".5rem","boxShadow":"0px 1px #888888"}}>
                                   <DeleteOutlineIcon  onClick={handleDelete}/>
                                   </span>
                                </div>
                        <Card key={index} >
                        <p style={{ "width": "30%", "textAlign": "start", "border": "1px solid #D1DFFF", "borderRadius": "3px", "marginLeft": ".5rem", "marginTop": ".5rem", "paddingLeft": ".5rem" }}>{`Ticket #${item.count}`}</p>
                        <div style={{ "display": "flex" }}>
                        {
                            item.value?.map((count, index) => {
                            return (
                                <div style={{ "border": "1px solid #FFFFFF ", "width": "100%", "height": "100%", "backgroundColor": "#FFFFFF" }}>
                                    <Box style={{ "color":"#FFFFFF", "textAlign": "center", "border": "1px solid #D1DFFF", "borderRadius": "50%", "marginLeft": ".5rem", "marginTop": ".5rem","backgroundColor":"#3F51B5","width":"2rem" }}>{count}</Box>
                                </div>
                            )
                        }
                        )
                    }
                        <br/>
                        <br/>
                        <br/>
                    </div>
                        </Card>
                    </Grid>
                )
            })}
        </Grid>

        </>
    )
}