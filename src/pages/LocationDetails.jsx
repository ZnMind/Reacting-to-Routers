import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const LocationDetails = () => {

    const { locationsid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/locations/${locationsid}`)
            .then(location => location.json())
            .then(data => setDetails(data))
            .catch(e => console.log(e));
    }, [locationsid]);

    return (
        <main className="container">
            <section className="d-flex row justify-content-center">
                <div className="row col-md-12 mb-4 justify-content-center">
                    <h2 className="text-center">Location Details Page</h2>
                </div>
                <div className="row col-md-12 mb-4 justify-content-center">
                    <Link to="/" className='btn btn-outline-primary mr-4'>Home</Link>
                    <Link to="/locations" className='btn btn-outline-primary'>View Location</Link>
                </div>
                <div className="card col-md-6 shadow mt-2">
                    <h4 className='text-center'> {details?.name} </h4>
                    <p className='text-center'> {details?.climate} - {details?.terrain}</p>
                </div>
            </section>
        </main>
    )
}

export default LocationDetails;