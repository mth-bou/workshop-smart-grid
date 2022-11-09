import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";


export default function RefSelect(props) {

    return (
        <>
            <FormControl sx={{minWidth: 120}}>
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
                    <MenuItem value={0}>
                        <em>None</em>
                    </MenuItem>
                    {
                        props.refData.map((v, i) => (
                            <MenuItem key={i} value={v.conso}>{v.ref}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}
