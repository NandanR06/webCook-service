import React from 'react'
import '../Style/SignUp.css'
import logo from '../../asserts/logo-s.png'
import image from '../../asserts/block-image.jpg'
import RefreshIcon from '@mui/icons-material/Refresh';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import RemoveRedEyeTwoToneIcon from '@mui/icons-material/RemoveRedEyeTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';


export default function SignUp() {

    const [captcha, setCaptcha] = useState(Math.floor(Math.random() * 567897887).toString(36))
    const [inCaptcha, setInCaptcha] = useState("")
    const [data, setData] = useState(true);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState();
    const [validateEmail, setValidateEmail] = useState();
    const [validatePassword, setValidatePassword] = useState();
    const [rotate, setRotate] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [ display,setDisplay] = useState(false)


    const login = useNavigate();
    const url = 'http://localhost:5000';
    const handleRefresh = () => {
        setRotate(false)
        setTimeout(() => {
            setCaptcha(Math.floor(Math.random() * 567897887).toString(36))
            setRotate(true)
        }, 1000)
    }

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handlePassword = (e) => {

        const password = e.target.value;
        setPassword(password);
        regexPassword(password)
    }

    const regexEmail = (email) => {  //validating the email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const validInfo = emailRegex.test(email);
        setValidateEmail(validInfo);
    }

    const regexPassword = (password) => { //validating the password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
        setValidatePassword(passwordRegex.test(password));
    }
    const handleEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        regexEmail(email)
    }

    const showEye = (e)=>{
        setDisplay(true)
        setShowPassword(true)
        setTimeout(()=>{
            setShowPassword(false)
            setDisplay(false)
        },1000)
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        if (captcha === inCaptcha) {
            if (validateEmail) {
                if (validatePassword) {
                    if (name === ""){
                        if (name === "") {
                            return alert("Please enter the name");
                        }
                        setData(false);
                    }
                    else {
                        axios.post(`${url}/signup`, { name, password, email })
                            .then((res) => {
                                if (res.data.exist) {
                                    return alert("This user name is existed")
                                }
                                else {
                                    console.log(res);
                                    login('/login')
                                }
                            })
                            .catch(err => console.log(err));
                        setData(true);
                        console.log(data)
                    }
                }
                else {
                    alert("Password must contain at least 8 characters, with uppercase, lowercase, and a special symbol.")
                }
            }
            else {
                alert("Please enter a valid email address")
            }
        }
        else {
            setData(false);
        }
    }

    return (
        <div className='main'>
            <div className='hero2'>
                <div className="content2">
                    <div className="logo2">
                        <img src={image} alt="image" />
                    </div>
                    <div className="left">
                        <div className="singup">
                            <form className="info">
                                <div className="info-2">
                                    <img src={logo} alt="logo" />
                                </div>
                                <h2>Sign up</h2>
                                <p>Please enter your details</p>
                                <fieldset>
                                    <legend>
                                        Enter your name
                                    </legend>
                                    <input type="text" required onChange={handleName} name="userName" />
                                </fieldset>
                                <fieldset>
                                    <legend>
                                        Enter your Email
                                    </legend>
                                    <input type="email" onChange={handleEmail} name="password" placeholder='example.gmail.com' />
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
                                    <pre>{captcha}</pre><RefreshIcon className={rotate ? "refresh" : "rotate-animation"} onClick={handleRefresh} />
                                </div>
                                <button onClick={handleSignIn}>Sign up</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
