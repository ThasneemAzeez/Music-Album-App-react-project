import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const Viewall = () => {
    const [data, changeData] = useState([])
    const fetchAlbum=()=>{
        axios.get(
            "https://jsonplaceholder.typicode.com/albums"
        ).then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchAlbum()},[])    
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">

                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card" >
                                                <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/music-logo-design.jpg"height="250px" class="card-img-top" alt="..."></img>
                                                    <div class="card-body">
                                                        <h5 class="card-title">{value.userId}</h5>
                                                        <p class="card-text">{value.id}</p>
                                                        <a href="#" class="btn btn-primary">{value.title}</a>
                                                    </div>
                                            </div>
                                            </div>
                                    }
                                            )
                            }
                                       
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall