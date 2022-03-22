import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Films = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/films')
            .then(films => films.json())
            .then(data => setFilms(data))
            .catch(e => alert(e));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <ul className="list-group">
                        <h2 className='row mb-4 justify-content-center text-center'>Films Page</h2>
                        <div className="row mb-4 justify-content-center">
                            <Link to="/" className='btn btn-outline-primary mr-4'>Home</Link>
                        </div>
                        {films.map(films => (
                            <li key={`film-${films.id}`} className="list-group-item d-flex justify-content-between">
                                <span>{films.title}</span>
                                <Link to={`/films/${films.id}`} className='btn btn-outline-primary'>
                                    Full Details
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Films;