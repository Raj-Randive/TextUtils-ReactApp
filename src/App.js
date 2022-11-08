// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const [mode, setMode] = useState('light'); // ---> Tells whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {

    // setAlert is an object...!!
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');   // donot ever write setMode = 'dark'
      document.body.style.backgroundColor = 'rgb(4 32 70)';
      // document.body.style.color = '	white';
      showAlert("Dark Mode has been Enabled.", "success");
      // document.title = 'TextUtils - Dark Mode'

    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // document.body.style.color = 'black';
      showAlert("Light Mode has been Enabled.", "danger");
      // document.title = 'TextUtils - Light Mode'
    }
  }

  return (

    <>
      <Router>
        {/* --> Using props (JAVASCRIPT) */}
        <Navbar title="Text-Utils" aboutText="About" mode={mode} toggleMode={toggleMode} />  

        <Alert alert={alert} />

        <div className="container mt-5">

          {/* // We will bring About page section from the react-router in place of textform*/}
          <Routes>
            {/* ********** Router-1 ********** */}
            <Route exact path="/about" element= {<About mode={mode}/>} />

            {/* ********** Router-2 ********** */}
            <Route exact path="/" element= { <TextForm showAlert={showAlert} heading="TextUtils - Word Counter, Character Counter" mode={mode} /> }  />

          </Routes>

        </div>

      </Router>
    </>

  );
}

export default App;
