import {TextField} from "@mui/material";


export default function QuantityField(props) {

    return (
        <>
            <TextField
                sx={{maxWidth: 70, minWidth: 100}}
                onChange={(event => props.setQuantity(event.target.value))}
                id="outlined-number"
                label="Quantité"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </>


    )
}
