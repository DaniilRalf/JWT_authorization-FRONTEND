import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {


    let [regLogin, setRegLogin] = useState('');
    let [regPassword, setRegPassword] = useState('');
    let [logLogin, setLogLogin] = useState('');
    let [logPassword, setLogPassword] = useState('');

    let URL_LOGIN = 'http://localhost:4444/auth/login';
    let URL_REG = 'http://localhost:4444/auth/registration';


    let regisration = async () => {
        let data = {
           username: regLogin,
           password: regPassword
        }
        const response = await axios.post(`${URL_REG}`, data);
        console.log(response.data)
    }
    let login = async () => {
        let data = {
            username: logLogin,
            password: logPassword
        }
        const response = await axios.post(`${URL_LOGIN}`, data);
        console.log(response.data);

        // let cook = document.cookie = `name=testtest2; value=testtest; domain=http://testtest.com`;
        // console.log(cook);
    }



  return (
    <div className="App">

        <div className="reg">
          <input value={regLogin} onChange={e => setRegLogin(e.target.value)} type='text' placeholder='Enter login'/>
          <input value={regPassword} onChange={e => setRegPassword(e.target.value)} type='text' placeholder='Enter password'/>
          <button onClick={() => regisration()}>Registration</button>
          <hr/>
        </div>

        <div className="login">
            <input value={logLogin} onChange={e => setLogLogin(e.target.value)} type='text' placeholder='Enter login'/>
            <input value={logPassword} onChange={e => setLogPassword(e.target.value)} type='text' placeholder='Enter password'/>
            <button onClick={() => login()}>Login</button>
            <hr/>
        </div>

      <div className="login"></div>

    </div>
  );
}

export default App;
