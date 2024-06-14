import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [data, setData] = useState(
        {
            "name": "",
            "email": "",
            "mobile": "",
            "gender": "",
            "password": "",
            "cpassword": ""

        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readvalue = () => {
        if (data.password == data.cpassword) {

            console.log(data)
            axios.post("http://localhost:8080/signup", data).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status == "success") {
                        alert("Sign Up Success")
                    }
                    else {
                        alert("Failed to Sign Up")
                    }
                }
            )
        }
        else {
            alert("Confirm Password And Password are not identical")
        }
    }
    return (
        <div>
             <div class="alert alert-danger" role="alert">
 <center><h1>KSRTC APP</h1></center>
</div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" name="name" value={data.name} onChange={inputHandler} className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Email Id</label>
                                <input type="email" name="email" value={data.email} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" name="mobile" value={data.mobile} onChange={inputHandler} className="form-control" />
                            </div>

                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Gender</label>
                                <select name="gender" value={data.gender} onChange={inputHandler} className="form-control">
                                    <option value="male">male</option>
                                    <option value="female">female</option>
                                </select>
                            </div>

                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Password</label>
                                <input type="password" name="password" value={data.password} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div>   <label htmlFor="" className="form-label"> Confirm Password</label>
                                <input type="password" name="cpassword" value={data.cpassword} onChange={inputHandler} id="" className="form-control" />
                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                            <button className="btn btn-success" onClick={readvalue}>sign Up</button>
                        </div>
                        <div className="col col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <p>New users click to<Link to="/" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"> Back To Login</Link></p>

                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SignUp