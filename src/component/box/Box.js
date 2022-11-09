import React, {useState} from 'react';
import {Grid, IconButton} from "@mui/material";
import ItemSelector from "../itemSelector/ItemSelector";
import AddIcon from '@mui/icons-material/Add';
import {Colors} from "../../data/data";

export default function Box(props) {

    const [totalConsoBox, setTotalConsoBox] = useState(0)

    const [selectorCounter, setSelectorCounter] = useState([1])


    return (
        <Grid item xs>
            <div style={{border: 'solid', margin: 10, padding: 20, alignItems: 'center', justifyContent: 'center'}}>
                <h5 style={styles.h2}>{props.title}</h5>
                {
                    selectorCounter.map(() => (
                        <ItemSelector setSelectorCounter={setSelectorCounter} data={props.data}
                                      setTotalConsoBox={setTotalConsoBox}/>
                    ))
                }
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <IconButton onClick={() => setSelectorCounter([...selectorCounter, selectorCounter.push(1)])}
                                style={{alignSelf: 'center', backgroundColor: Colors.primary}}><AddIcon
                        color={'green'}/></IconButton>
                </div>
                <p style={{fontSize: 5}}>Conso de la box : {totalConsoBox}</p>
            </div>
        </Grid>
    )
}

const styles = {
    selectContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'

    },
    container: {
        borderWidth: 5,
        borderColor: 'black'
    },
    h2: {
        textAlign: 'center',
        color: Colors.primary,
        marginBottom: 25
    },
    ref: {
        fontSize: 15
    }
}
