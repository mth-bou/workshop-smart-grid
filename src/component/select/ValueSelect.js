import {Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import React from "react";


export default function ValueSelect() {

    return (
        <>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={null}
                onChange={() => null}
                autoWidth
                label="Age"
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
            </Select>
        </>
    )
}
