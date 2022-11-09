import React, {useEffect, useState} from 'react';
import Box from "../../component/box/Box";
import {Grid} from "@mui/material";
import {allData} from "../../data/data";
import './Consumption.css';


const Consumption = () => {

    const [totalSum, setTotalSum] = useState(0)
    const [total, setTotal] = useState({})

    useEffect(() => {
        setTotalSum(Object.values(total).reduce((a, b) => a + b, 0))
    }, [total])

    return (
        <div className='consumption'>
            <Grid container>
                {
                    allData.map((v, i) => (
                        <Box key={i} id={i} title={Object.keys(v)[0]} data={Object.values(v)[0]} setTotal={setTotal}/>
                    ))
                }
            </Grid>

            <h2>Résultat de votre empreinte carbone</h2>

            <div className="carbon-footprint-result">
                <p>{totalSum}<span>kg CO2 / an</span></p>
            </div>
        </div>
    );
};

export default Consumption;
