import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const People = () => {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://ghibliapi.herokuapp.com/people')
            .then(people => people.json())
            .then(data => setPeople(data))
            .catch(e => alert(e));
    }, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <ul className="list-group">
                        <h2 className='row mb-4 justify-content-center text-center'>People Page</h2>
                        <div className="row mb-4 justify-content-center">
                            <Link to="/" className='btn btn-outline-primary mr-4'>Home</Link>
                        </div>
                        {people.map(people => (
                            <li key={`people-${people.id}`} className="list-group-item d-flex justify-content-between">
                                <span>{people.name}</span>
                                <Link to={`/people/${people.id}`} className='btn btn-outline-primary'>
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

export default People;