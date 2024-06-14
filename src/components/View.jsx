import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [data, changeData] = useState([])

    const fetchData = () => {
      axios.get("http://localhost:8080/view").then(
        (response) => {
          changeData(response.data)
  
        }
      ).catch().finally()
    }
    useEffect(() => fetchData(), [])
  return (
    <div>
        
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                    data.map(
                                        (value,index)=>{
                                            return <tr>
                                            <th>{value.busName}</th>
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

export default View