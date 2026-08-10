import React, {useState} from 'react';



function MyComponent(){

    const[name, setName] = useState("Guest");
    const[quan, setQuan] = useState(1);
    const[commt, setCommt] = useState("");
    const[pay, setPay] = useState("");
    

    function quanChange(event){

        setQuan(event.target.value)
    }

    function nameChange(event){

        setName(event.target.value)
    }

    function commtChange(event){

        setCommt(event.target.value)
    }

    function payChange(event){

        setPay(event.target.value);
    }




    return(
        <>

        <input value={name} onChange={nameChange}></input>
        <h1>Hi {name}</h1>
        <input value={quan} onChange={quanChange}></input>
        <h1>Your Order Number : {quan}</h1>
        <textarea value={commt} onChange={commtChange} 
        placeholder='Leave On frontdoor'></textarea>

        <br></br>

        <select value={pay} onChange={payChange}>

            <option value="">Select An Option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            
        </select>

        <h3>Payment : {pay}</h3>
        
        
        
    
        
        </>

        
    );






} export default MyComponent