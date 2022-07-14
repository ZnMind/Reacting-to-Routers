import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Locations = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/locations')
            .then(locations => locations.json())
            .then(data => {
                console.log(data)
                setLocations(data)})
            .catch(e => alert(e));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <ul className="list-group">
                        <h2 className='row mb-4 justify-content-center text-center'>Locations</h2>
                        <div className="row mb-4 justify-content-center">
                            <Link to="/" className='btn btn-outline-primary mr-4'>Home</Link>
                        </div>
                        {locations.map(locations => (
                            <div key={`film-${locations.id}`} className="list-group-item d-flex justify-content-between">
                                <span>{locations.name}</span>
                                <Link to={`/locations/${locations.id}`} className='btn btn-outline-primary'>
                                    Full Details
                                </Link>
                            </div>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Locations;