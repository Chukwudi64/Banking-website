import React from 'react'
import {useState} from 'react'
import axios from 'axios'


function Buyairtime() {
  const initialState=Object.freeze({
    mobilenetwork:"",
    phonenumber:"",
    amountinnumber:""
  })

  const [addData, setaddData] = useState(initialState)
  console.log(addData);

  const HandleChange = (err) => {
    setaddData({...addData,[err.target.name]: err.target.value})
  }
  const HandleSubmit = (err) => {
    err.preventDefault();
    try{
      axios.post('http://127.0.0.1:8000/api/Buyairtime/', addData).then(res => {
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
                Buy Airtime
            </h3>
            {/* <h4 style={{color:'brown'}}>msg</h4> */}
            <form onSubmit={HandleSubmit} noValidate>
                <input type="text"
                value={addData.mobilenetwork}
                noValidate onChange= {HandleChange}
                placeholder='Enter Mobile Network'
                name='mobilenetwork'
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
                <input type="number"
                value={addData.amountinnumber}
                noValidate onChange= {HandleChange}
                placeholder='Enter Amount in Number'
                name='amountinnumber'
                required/>
                <input type="submit" value="BUYAIRTIME" className='buyairtime'/>
                
            </form>
        </div>
    </div>
  )
}

export default Buyairtime


