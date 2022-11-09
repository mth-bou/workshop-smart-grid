import RefSelect from "../select/RefSelect";
import QuantityField from "../quantityField/QuantityField";
import React, {useEffect, useState} from "react";


export default function ItemSelector(props) {

    const [conso, setConso] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        console.log('conso', conso)
        console.log('qty', quantity)
        setTotal(conso * quantity)
    }, [conso, quantity])

    useEffect(() => {
        props.setTotalConsoBox(total)
    }, [total])

    useEffect(() => {
        console.log('yo')
    }, [])

    return (
        <div style={styles.selectContainer}>
            <div>
                <RefSelect conso={conso} setConso={setConso} refData={props.data}/>
            </div>
            <div>
                <QuantityField setQuantity={setQuantity}/>
            </div>
        </div>
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
