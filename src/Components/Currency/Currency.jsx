import React, {useState, useEffect, useRef} from "react";
import { Block } from "./Block";
import './currency.css'



const Currency = () => {

    const[fromCurrecny, setFromCurrency] = useState('RUB');
    const[toCurrecny, setToCurrency] = useState('USD');
    const[fromPrice, setFromPrice] = useState(0);
    const[toPrice, setToPrice] = useState(1);

    const ratesRef = useRef({});

    useEffect(()=>{
        fetch()
        .then((res) => res.json())
        .then((json) => {
            ratesRef.current = json.rates;
            onChangeToPrice(1);
        }) 
        .catch((err)=>{
            console.log(err);
            alert('Failure');
        });

    }, []);

    const onChangeFromPrice = (value) => {
        const price = value/ ratesRef.current[fromCurrecny];
        const result = price * ratesRef.current[toCurrecny];
        setFromPrice(result.toFixed(3));
        setFromPrice(value);
    }

    const onChangeToPrice = (value) => {
        const result = (ratesRef.current[fromCurrecny]/ ratesRef.current[toCurrecny]) * value;
        setFromPrice(result.toFixed(3));
        setToPrice(value);
    }


    useEffect(()=>{
        onChangeFromPrice(fromPrice);
    },[fromCurrecny]);

    useEffect(()=>{
        onChangeToPrice(toPrice);
    },[toCurrecny]);

    
    return(
        
        <div className="App1">
            <Block value={fromPrice} 
            currency={fromCurrecny} 
            onChangeCurrency={setFromCurrency} 
            onChangeValue={onChangeFromPrice}/>

            <Block value={toPrice} 
            currency={toCurrecny} 
            onChangeCurrency={setToCurrency} 
            onChangeValue={onChangeToPrice}/>
        </div>
      
    )


}

export default Currency;