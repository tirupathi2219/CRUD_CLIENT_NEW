import React, { useState } from "react";

function Denomcalculator() {
    const [inpValue, setValue] = useState('')
    const [denominations, setDenominations] = useState([])

    const handleDenom = () => {
        const  denoms = [500, 200,100, 50, 20, 10, 5, 2, 1 ]
      let  num = Number(inpValue);
      setDenominations([])

      if(inpValue) {
        denoms.forEach((val) => {
            let reminder = num % val
            if (Math.floor(num / val) > 0 ) {
                let coef = Math.floor(num / val)
                let tot = coef * val
                setDenominations((prev) => [...prev, `${val} * ${coef} =  ${tot}`])
                num = reminder
            }
        })
      }
    }
    
    return (
        <div className="denominations">
            <p>testing number of denominations </p>

            <input type='text' placeholder="enter the amount " value={inpValue} onChange={(e) => {setValue(e.target.value)}} />
            <button onClick={handleDenom}>submit</button>
            {
                denominations?.length > 0 && 
                denominations.map((item) => <p key={item}>{item}</p>)
            }
        </div>
    )
}

export default Denomcalculator;
