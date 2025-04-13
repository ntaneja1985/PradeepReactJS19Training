import React, {useEffect, useState} from 'react'

function getRandomOffer(){
    return (1000 + Math.random()*500).toFixed(2);
}

function DiscountOffer() {

    const [offerPrice,setOfferPrice] = useState(getRandomOffer());
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setIsChecked(e.target.checked);
    }
    useEffect(()=> {
        if (isChecked) {
        setInterval(() => {
            setOfferPrice(getRandomOffer());
        }, 3000)
    }
    },[isChecked]);
    return (
        <>
            <div className="offer" style = {{backgroundColor:"yellow", fontSize:"30px"}}>
                <input type="checkbox" checked={isChecked} onChange={(e)=>handleChange(e)}/> Please select
                <h5>Offer Price</h5>
                <p>Price:INR <b>{offerPrice}</b></p>
            </div>
        </>
    )
}

export default DiscountOffer
