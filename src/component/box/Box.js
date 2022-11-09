import React, {useState} from 'react';
import {Grid, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import ValueSelect from "../select/ValueSelect";


export default function Box(props) {
    return (
        <Grid item xs style={{backgroundColor:'white'}}>
            <h5 style={styles.h2}>test</h5>
            <ValueSelect/>
            <ValueSelect/>
        </Grid>
    )
}

const styles = {
    h2 : {
        textAlign: 'center',
        color : 'green'
    }
}
