import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const Search = () => {
    const [data,setData]=useState(
        {
            "busName":""
        }
    )

    const [result, setResult] = useState([])
    
    const inputHandler=(event)=>(
        setData({...data,[event.target.name]:event.target.value})       

    )

    const readvalue = () => {
        console.log(data)
        axios.post("http://localhost:8080/Search", data).then(
          (response) => {
            setResult(response.data)
          }
        ).catch(
          (error) => {
            console.log(error)
          }
        ).finally()
      }

  return (
    <div>
    <NavBar/>
    <div class="alert alert-danger" role="alert">
 <center><h1>KSRTC APP</h1></center>
</div>
    <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Bus Name</label>
                <input type="text" name="busName" value={data.name} onChange={inputHandler} id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={readvalue}>Search</button>
              </div>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Bus Name</th>
                  <th scope="col">Route</th>
                  <th scope="col">Bus Number</th>
                  <th scope="col">Driver Name</th>
                </tr>
              </thead>
              <tbody>
                {
                  result.map(
                    (value, index) => {
                      return <tr>
                        <td scope="row">{value.busName}</td>
                        <td>{value.route}</td>
                        <td>{value.busNo}</td>
                        <td>{value.driver}</td>
                      </tr>
                    }
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>



    </div>
  )
}

export default Search