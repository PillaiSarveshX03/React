import  React,{useState} from 'react';




function MyComponent7(){
    
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isemployed, setStatus] = useState();

    


 
    const updateName = () => {

        setName("Sarvesh");
    }

    const incrementAge = () => {

        setAge(age+1)


    }

    const toggle = () => {

        setStatus(!isemployed)
  


    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age : {age}</p>
            <button onClick={incrementAge}>Set Age</button>

            <p>Is Employed : {isemployed ? "Yes" : "No"}</p>
            <button onClick={toggle}>Set Status</button>


        </div>
    );



} export default MyComponent