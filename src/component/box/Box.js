import React, {useState} from 'react';
import {Grid} from "@mui/material";
import ItemSelector from "../itemSelector/ItemSelector";

export default function Box(props) {

    const [totalConsoBox, setTotalConsoBox] = useState(0)

    return (
        <Grid item xs>
            <div style={{border: 'solid', margin: 10, padding: 20}}>
                <h5 style={styles.h2}>{props.title}</h5>
                <ItemSelector data={props.data} setTotalConsoBox={setTotalConsoBox}/>
                <p>Conso de la box : {totalConsoBox}</p>
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
        color: 'blue',
        marginBottom: 25
    },
    ref: {
        fontSize: 15
    }
}
