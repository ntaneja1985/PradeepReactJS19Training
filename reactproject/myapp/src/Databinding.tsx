import {useEffect, useRef, useState} from "react";


function Databinding() {
    const name="nishant";
    const [fullName,setFullName] = useState('nishant taneja');
    const addressRef = useRef();
    const handleClick = (e) =>{
        alert("Hello");
        e.target.value = "Clicked me";
        e.target.style.backgroundColor = "red"
        setTimeout(()=>{
            e.target.value = "Click me";
        },1000)

        addressRef.current.value = "Mumbai";
        addressRef.current.style.backgroundColor = "red"
    }

    const handleTextChange = (e) =>{
            setFullName(e.target.value);
    }

    useEffect(()=>{
        console.log('called')
    },[fullName]);
    return (
        <div>
            <h5>This is my component</h5>
            <p>My name is {name} </p>
            <p> Full Name is {fullName}</p>
            <i>Full name is {fullName}</i>
            <input type = "text" ref={addressRef}/>
            <input type = "text" value={name} onChange = {(e)=>handleTextChange(e)}/>
            <input type="button" value="Click me" onClick={(e) => handleClick(e)}/>
        </div>
    )
}

export default Databinding
