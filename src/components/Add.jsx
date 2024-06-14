import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {
    const [data, setData] = useState(
        {
            "busName": "",
            "route": "",
            "busNo": "",
            "driver": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Added")
                }
                else {
                    alert("Not Added")
                }

            }
        )
    }

    return (
        <div>
             <div class="alert alert-danger" role="alert">
 <center><h1>KSRTC APP</h1></center>
</div>
            <NavBar/>
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Bus Name</label>
                            <input type="text" name="busName" value={data.busName} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Route</label>
                        <input type="text" name="route" value={data.route} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Bus Number</label>
                        <input type="text" name="busNo" value={data.busNo} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Driver</label>
                        <input type="text" name="driver" value={data.driver} onChange={inputHandler} className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Add