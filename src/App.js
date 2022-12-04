import './App.css';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signin from './components/Signin'
import Buyairtime from './components/Buyairtime'
import Deposit from './components/Deposit';
import Transactionshistory from './components/Transactionshistory';
import Signup from './components/Signup';
import Transfer from './components/Transfer';
import Withdrawal from './components/Withdrawal';
import PrivateRoute from './components/PrivateRoute';
import Logout from './components/Logout';






function App() {
  return (
    <Router>
      <Routes>
        
        <Route path='/Home' element={<Homepage/>}/>
        <Route path='/Signin' element={<Signin/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Logout' element={<Logout/>}/>
        <Route path='/' element={<PrivateRoute/>}>
          <Route path='/Transactionshistory' element={<Transactionshistory/>}/>
          <Route path='/Transfer' element={<Transfer/>}/>
          <Route path='/Withdrawal' element={<Withdrawal/>}/>
          <Route path='/Buyairtime' element={<Buyairtime/>}/>
          <Route path='/Deposit' element={<Deposit/>}/>
        </Route>
      </Routes>
    
    </Router>
  );
}

export default App;
