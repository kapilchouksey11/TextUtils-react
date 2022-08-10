import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {// copied from documentationn
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//Whether dark mode is enabled or not.
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled.", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light mode has been enabled.", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }

  // const redMode = () => {
  //   setMode('red');
  //   document.body.style.backgroundColor = '#b55e67ab';
    
  //   // document.navbar.style.backgroundColor = '#bb2d3b';
  // }

  return (
    <>
    {/* <Router> */}
    <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* copied from documentation, now Switch is not available in REACT */}
      {/* <Routes>
        <Route exact path="/" element={ */}
          <TextForm showAlert={showAlert} heading="Enter The text to analyze below" mode={mode}/>
         {/* } />
         <Route exact path="/about" element={<About />} />
       </Routes> */}
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
