import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Home.css'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent navbarWrapper">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    PT Committee
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                    <div class="d-flex">

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
