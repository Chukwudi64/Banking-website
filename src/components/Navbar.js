import React from "react";
import { Link } from 'react-router-dom'


function Navbar() {
    let authUser = sessionStorage.getItem('user');
    console.log(authUser);
    if(authUser === 'USER'){
        return (
            <nav>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Buyairtime'>Buyairtime</Link></li>
                    <li><Link to='/Deposit'>Deposi</Link></li>
                    <li><Link to='/Transactionhistory'>Transactionhistory</Link></li>
                    <li><Link to='/Logout'>Logout</Link></li>
                    <li><Link to='/Transfer'>Transfer</Link></li>
                    <li><Link to='/Withdraw'>Withdraw</Link></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul className="menu">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Signup'>Signup</Link></li>
                    <li><Link to='/Signin'>Signin</Link></li>
                </ul>
            </nav>
        )
    }
    
}
export default Navbar