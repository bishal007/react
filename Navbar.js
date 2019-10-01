import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends  Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-warning">
                    <div className="container">
                        <Link to='/' className='navbar-brand'>React Router</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item px-2">
                                    <Link to='/' className='nav-link'>Home</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='/about' className='nav-link'>About Us</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='/services' className='nav-link'>Services</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link to='/contact' className='nav-link'>Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
export  default Navbar;