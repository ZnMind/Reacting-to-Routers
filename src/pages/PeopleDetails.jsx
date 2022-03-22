import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const PeopleDetails = () => {

    const { peopleid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/people/${peopleid}`)
            .then(people => people.json())
            .then(data => setDetails(data))
            .catch(e => console.log(e));
    }, [peopleid]);

    return (
        <main className="container">
            <section className="d-flex row justify-content-center">
                <div className="row col-md-12 mb-4 justify-content-center">
                    <h2 className="text-center">People Details Page</h2>
                </div>
                <div className="row col-md-12 mb-4 justify-content-center">
                    <Link to="/" className='btn btn-outline-primary mr-4'>Home</Link>
                    <Link to="/people" className='btn btn-outline-primary'>View People</Link>
                </div>
                <div className="card col-md-6 shadow mt-2">
                    <h4 className='text-center'> {details?.name} </h4>
                    <p className='text-center'> {details?.gender} - {details?.age}</p>
                    <p className='text-center'>Eye Color: {details?.eye_color}</p>
                    <p className='text-center'>Hair Color: {details?.hair_color}</p>
                </div>
            </section>
        </main>
    )
}

export default PeopleDetails;