import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className='col-md-12 mb-4'>
                    <h1 className="text-center">Heroku</h1>
                    <h5 className='text-center'>API: https://ghibliapi.herokuapp.com/</h5>
                </div>
                <div className="d-flex col-md-6 justify-content-between">
                    <Link to="/Films" className='btn btn-outline-primary'>View films</Link>
                    <Link to="/People" className='btn btn-outline-primary'>View People</Link>
                    <Link to="/Locations" className='btn btn-outline-primary'>View Locations</Link>
                </div>
            </section>
        </main>
    )
}

export default Home;