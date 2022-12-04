import React from 'react'
import {useState} from 'react'
import axios from 'axios'


function Withdrawal() {
  const initialState=Object.freeze({
    accountname:"",
    accountnumber:"",
    phonenumber:"",
    amountinword:"",
    amountinnumber:"",
    date:""
  })

  const [addData, setaddData] = useState(initialState)
  console.log(addData);

  const HandleChange = (err) => {
    setaddData({...addData,[err.target.name]: err.target.value})
  }
  const HandleSubmit = (err) => {
    err.preventDefault();
    try{
      axios.post('http://127.0.0.1:8000/api/Withdrawal/', addData).then(res => {
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
                Withdrawal
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
                value={addData.phonenumber}
                noValidate onChange= {HandleChange}
                placeholder='Enter Phone Number'
                name='phonenumber'
                required/>
                <br />
                <br />
                <input type="text"
                value={addData.amountinword}
                noValidate onChange= {HandleChange}
                placeholder='Enter Amount in Word'
                name='amountinword'
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
                value={addData.date}
                noValidate onChange= {HandleChange}
                placeholder='Enter date'
                name='date'
                required/>
                <input type="submit" value="DEPOSIT" className='deposit'/>
                
            </form>
        </div>
    </div>
  )
}

export default Withdrawal
