import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";


export default function RefSelect(props) {

    return (
        <>
            <FormControl sx={{minWidth: 150, maxWidth: 170}}>
                <InputLabel id="demo-simple-select-label">Référence</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={props.conso}
                    label="Référence"
                    onChange={(v) => {
                        props.setConso(v.target.value)
                    }}
                >
                    <MenuItem value={0}/>
                    {
                        props.refData.map((v, i) => (
                            <MenuItem style={{color: 'black'}} key={i} value={parseInt(v.CO2)}>{v.reference}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}
