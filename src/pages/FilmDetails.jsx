import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";

const FilmDetails = () => {

    const { filmid } = useParams();

    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://ghibliapi.herokuapp.com/films/${filmid}`)
            .then(films => films.json())
            .then(data => setDetails(data))
            .catch(e => console.log(e));
    }, [filmid]);

    return (
        <main className="container">
            <section className="d-flex row justify-content-center">
                <div className="row col-md-12 mb-4 justify-content-center">
                    <h2 className="text-center">Film Details Page</h2>
                </div>
                <div className="row col-md-12 mb-4 justify-content-center">
                    <Link to="/" className='btn btn-outline-primary mr-4'>Home</Link>
                    <Link to="/Films" className='btn btn-outline-primary'>View films</Link>
                </div>
                <div className="card col-md-6 shadow mt-2">
                    <h6 className='text-center'> {details?.title} </h6>
                    <p className='text-center'> {details?.director} - {details?.release_date}</p>
                    <p className='text-center'> {details?.description}</p>
                    <h6 className='text-center'> {details?.rt_score > 50 ?
                        <span className='text-success'>{details?.rt_score}</span> :
                        <span className='text-danger'>{details?.rt_score}</span>}</h6>
                </div>
            </section>
        </main>
    )
}

export default FilmDetails;