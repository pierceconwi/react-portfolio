import React from 'react';
import Image from 'next/image'

export default function NavBar() {
    return (
        <div>
        {/* <div>
            <div>
                <Image src="../public/vercel.svg" alt="logo" width="50" height="50" />
            </div>
            <div>
                <p>Home</p>
                <p>Services</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
        </div> */}
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <Image src="../public/vercel.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                    Pierce Conwi
                </a>
                <div class="collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#top">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#services">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}