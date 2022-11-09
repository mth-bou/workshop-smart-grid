import React from 'react';
import Box from "../component/box/Box";
import {Grid} from "@mui/material";
import {allData} from "../data/data";


const Consumption = () => {
    return (
        <div className='consumption'>
            <Grid container style={{margin: '8%'}}>
                {
                    allData.map((v, i) => (
                        <Box key={i} title={Object.keys(v)[0]} data={Object.values(v)[0]}/>
                    ))
                }
            </Grid>
        </div>
    );
};

export default Consumption;
