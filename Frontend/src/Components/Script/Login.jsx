import React, { useEffect, useState } from 'react'
import '../Style/Login.css'
import logo from '../../asserts/logo-s.png'
import image from '../../asserts/block-image.jpg'
import RefreshIcon from '@mui/icons-material/Refresh';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import axios from 'axios';

export default function Login() {

    const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 567897887).toString(36))
    const [inCaptcha, setInCaptcha] = useState("")
    const [data, setData] = useState(true);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState(false);
    const [rotate,setRotate] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [ display,setDisplay] = useState(false)
    
    const url = "http://localhost:5000"

    const signin = useNavigate()

    const handleName = (e) => {
        const name = e.target.value;
        setName(name);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const showEye = (e)=>{
      
        setDisplay(true)
        setShowPassword(true)
        setTimeout(()=>{
            setShowPassword(false)
            setDisplay(false)
        },1000)
    }

    const handleLogin = (e) => {
        e.preventDefault();
        if (captcha === inCaptcha) {
            if (name === "" || password == "") {
                if (name === "") {
                    return alert("Please enter the name");
                }
                if (password === "") {
                    return alert("Please enter the password");
                }
                setData(false);
            }
            else {
                setPassword("");
                setData(true);
                                                      //forwarding data to backend 
                axios.post(`${url}/login`, { name,password })
                    .then((res) => {
                        if (res.data.exist) {
                            signin('/')
                                               //routing page 
                        }
                        else {
                            setAlert(true);
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                    }
                    )
            }
        }
        else {
            setData(false);
        }
    }

    const handleRefresh = () => {
        setRotate(false)
        setTimeout(()=>{
            setCaptcha(Math.floor(Math.random() * 567897887).toString(36))
            setRotate(true)
        },1000)
    }

    return (
        <div className='main'>
            {alert ? <Alert severity="warning" style={{ backgroundColor: "rgba(255, 52, 8, 0.461)", color: "white", zIndex: 1000, position: "fixed", top: 5, }}>
                Invalid User_ID and Password
            </Alert> : ""}
            <div className='herologin'>
                <div className="content">
                    <div className="logoLogin">
                        <img src={image} alt="image" />
                    </div>
                    <div className="right">
                        <div className="login">
                            <form className="info">
                                <div className="info-1">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h2>Login</h2>
                                <p>Please enter your details</p>
                                <fieldset>
                                    <legend>
                                        Enter your name
                                    </legend>
                                    <input type="text" onChange={handleName} />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        Enter your password
                                    </legend>
                                    <div className="eye">
                                        <input type={showPassword?"text":"password"} onChange={handlePassword} name="password" placeholder=' Example : a3#4%$AR*a' />
                                        <span onClick={showEye}>{display?<RemoveRedEyeTwoToneIcon/>: <VisibilityOffTwoToneIcon/>} </span>
                                        </div>
                                </fieldset>
                                <div className='captcha'>
                                    <input type="text" placeholder='CAPTCHA' className={data ? 'input-captcha' : 'red'} onChange={(e) => setInCaptcha(e.target.value)} />
                                    <pre >{captcha}</pre><RefreshIcon className={rotate?"refresh":"rotate-animation"} onClick={handleRefresh} />
                                </div>
                                <button onClick={handleLogin}>Login</button>
                                <button className='signin' onClick={(e) => {
                                    e.preventDefault()
                                    signin('/signup')
                                }}>Not a Member ? Sign up</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
