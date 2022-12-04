import React from 'react'
import {useState} from 'react'
import axios from 'axios'


function Transfer() {
  const initialState=Object.freeze({
    accountname:"",
    accountnumber:"",
    destinationaccountnumber:"",
    bankname:"",
    amountinnumber:"",
    pin:""
  })

  const [addData, setaddData] = useState(initialState)
  console.log(addData);

  const HandleChange = (err) => {
    setaddData({...addData,[err.target.name]: err.target.value})
  }
  const HandleSubmit = (err) => {
    err.preventDefault();
    try{
      axios.post('http://127.0.0.1:8000/api/Transfer/', addData).then(res => {
        console.log(res.data);
      })
      window.location.href ='/'
    }catch(err){
      console.log(err);
    }
  }
  return (
    
    <div className='wrapper'>
        <div className="form-wrapper">
            <h3>
                Deposit
            </h3>
            <form onSubmit={HandleSubmit} noValidate>
                <input type="text"
                value={addData.accountname}
                noValidate onChange= {HandleChange}
                placeholder='Enter Account Name'
                name='accountname'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.accountnumber}
                noValidate onChange= {HandleChange}
                placeholder='Enter Account Number'
                name='accountnumber'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.destinationaccountnumber}
                noValidate onChange= {HandleChange}
                placeholder='Enter Destination Account Number'
                name='destinationaccountnumber'
                required/>
                <br />
                <br />
                <input type="text"
                value={addData.bankname}
                noValidate onChange= {HandleChange}
                placeholder='Enter Bank Name'
                name='bankname'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.amountinnumber}
                noValidate onChange= {HandleChange}
                placeholder='Enter Amount in Number'
                name='amountinnumber'
                required/>
                <br />
                <br />
                <input type="number"
                value={addData.pin}
                noValidate onChange= {HandleChange}
                placeholder='Enter Pin'
                name='pin'
                required/>
                <input type="submit" value="TRANSFER" className='transfer'/>
                
            </form>
        </div>
    </div>
  )
}

export default Transfer
