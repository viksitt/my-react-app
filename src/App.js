
import './App.css';
import About from './componnt/About';
import Alert from './componnt/Alert';
import Navbar from './componnt/Navbar';
import Textform from './componnt/Textform';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  //darkmode
  const [mode,setmode] = useState('light'); //darkmode
  
  const removebodyclasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')

  }
  const togglemode = (cls)=>{
    removebodyclasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light')
     {  setmode('dark')
     document.body.style.backgroundColor='grey';}

  else{
    setmode('light')
    document.body.style.backgroundColor='white';
  }
  }

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
      },1000);
  }

return (
    <>
<Router>
 <Navbar title = "Textutills" mode= {mode} togglemode={togglemode} /> 
 <Alert alert={alert}> </Alert>
 <div className='container my-3'>
 <Switch>
          <Route path="/about">
            <About />
          </Route>
         <Route path="/">
          <Textform showAlert={showAlert}  heading = "Enter the text to analyze below" mode={mode}/> 
           </Route>
        </Switch>
        </div>
        </Router> 

</>
  );
}

export default App;
