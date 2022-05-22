import { useState } from "react";
import { Grid, Button, TextField } from "@mui/material";
import BackspaceIcon from "@mui/icons-material/Backspace";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddBoxIcon from "@mui/icons-material/AddBox";
export const Calculator = (props) => {
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0)



    const handleData = (value) => {
        if (data.length > 5) {
            alert("you can enter only 6 numbers")
        } else {
            setData([...data, value]);
        }

    };
    const handleAddData = () => {
        if (data.length === 6) {
            setCount(count + 1)
            props.handleAdd(data, count + 1);
            setData([]);
        }
    }
    const handleBackspace = () => {
        if (data.length > 0) {
            const newData = [...data];
            newData.splice(data.length - 1, 1);
            setData(newData);
        }
    };
    const handleDelete = () => {
        setData([]);
    };

    return (
        <>
            <Grid item xs={6} sm={6} lg={6} xl={6}>
                <br />
                <div
                    style={{
                        backgroundColor: "#FFFFFF",
                        margin: "10px",
                        borderRadius: "5px",
                    }}
                >
                    <Grid container spacing={3}>
                        <Grid item xs={8} sm={8} lg={8} xl={8}>
                            <TextField
                                // placeholder="Enter your number"
                                type="number"
                                style={{ border: "none" }}
                                size="small"
                                InputProps={{
                                    disableUnderline: true,
                                    style: {
                                        textAlign: 'center',
                                    },
                                }}
                                disabled
                                variant="standard"
                                value={data.length }
                            />
                        </Grid>
                        <Grid item xs={3} sm={3} lg={3} xl={3}>
                            <p
                                style={{
                                    color: "#FC7D50",
                                    backgroundColor: "#FFE8DC",
                                    border: "#FFC8A9",
                                    borderRadius: "2px",
                                    fontWeight: "600",
                                }}
                            >
                                Enter 6 Digits
                            </p>
                        </Grid>
                        <Grid item xs={1} sm={1} lg={1} xl={1} />
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={3}>
                        <Grid
                            style={{ border: ".5px solid #F4F4F4" }}
                            item
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("7", e) }}
                            >7</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("8", e) }}
                            >8</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("9", e) }}
                            >9</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("6", e) }}
                            >6</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("5", e) }}
                            >5</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("4", e) }}
                            >4</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("3", e) }}
                            >3</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("2", e) }}
                            >2</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("1", e) }}
                            >1</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={handleBackspace} style={{ color: "#7D6F64" }}>
                                <BackspaceIcon />
                            </Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={(e) => { handleData("0", e) }}
                            >0</Button>
                        </Grid>
                        <Grid
                            item
                            style={{ border: ".5px solid #F4F4F4" }}
                            xs={4}
                            sm={4}
                            lg={4}
                            xl={4}
                        >
                            <Button onClick={handleDelete} style={{ color: "red" }}>
                                <DeleteOutlineIcon />
                            </Button>
                        </Grid>
                    </Grid>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            fontWeight: 500,
                        }}
                    >
                        <AddBoxIcon onClick={handleAddData} style={{ color: "#7D6F64" }} />{" "}
                        <span style={{ color: "#7D6F64" }}>ADD TICKET</span>
                    </div>
                    <br />
                </div>
            </Grid>
        </>
    );
};
