import React from 'react';
import Box from "../component/box/Box";
import {Grid} from "@mui/material";

const data = {
    "content": {
        "Ecrans": [
            {
                "ref": "xxxx",
                "conso": 15
            },
            {
                "ref": "yyyyy",
                "conso": 40
            }
        ],
        "Bonjour": [
            {
                "ref": "xxxx",
                "conso": 15
            },
            {
                "ref": "yyyyy",
                "conso": 40
            }
        ],
        "Salut": [
            {
                "ref": "xxxx",
                "conso": 15
            },
            {
                "ref": "yyyyy",
                "conso": 40
            }
        ],
        "Voitures": [
            {
                "ref": "vvvv",
                "conso": 45
            },
            {
                "ref": "pppp",
                "conso": 9
            }
        ]
    }
}

const Consumption = () => {
    return (
        <div className='consumption'>
            <Grid container>
                {
                    Object.keys(data.content).map((t, i) => (
                        <Box key={i} title={t} data={data.content[t]}/>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Consumption;
