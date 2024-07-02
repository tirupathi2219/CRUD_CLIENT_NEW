import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../config";
import './Register.scss'

function Register() {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
    })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
        setError('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        fetch(config.BE_URL + '/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json()
        }).then((result) => {
            if (result.error) {
                throw new Error(result.error);
            }
            navigate('/login')
        }).catch((err) => {
            setError(err.message)
        })
    }
    return (
        <div className="register">
            <h2 className="title">Create an Account</h2>
            {error.split(" ").includes('login')
                ? <p className="reg_error">{error} <Link to={"/login"}>here</Link></p>
                : <p className="reg_error">{error}</p>}
            <div>
                <form className="form_container" onSubmit={handleSubmit}>
                    <div>
                        <input type='text' name='name' placeholder='User Name' onChange={handleChange} value={userData.name} />
                    </div>
                    <div>
                        <input type='text' name='email' placeholder='User Email' onChange={handleChange} value={userData.email} />
                    </div><div>
                        <input type='text' name='mobile' placeholder='Mobile Number' onChange={handleChange} value={userData.mobile} />
                    </div><div>
                        <input type='text' name='password' placeholder='Password' onChange={handleChange} value={userData.password} />
                    </div>
                    <div className="submit_button">
                        <button type="submit" >Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
