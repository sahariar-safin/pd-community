import React from 'react'
import MembersList from '../components/Home/MembersList'
import Navbar from '../components/Home/Navbar'
import '../style/Home.css'

function Home() {
    return (
        <div className='homeWrapper'>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5">
                        <h1 className="text-center">Welcome to the PT Committee</h1>
                        <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium quos, excepturi similique sunt reprehenderit quam! Quos odio eveniet enim voluptates?</p>
                        <MembersList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
