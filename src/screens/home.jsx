import React from 'react';
import Header from '../components/header';
import { MdInfo, MdSearch } from "react-icons/md";


export default function HomeScreen() {
    return (
        <div>
            <Header />
            <section className="carousel">
                <div className="carousel__text">
                    <h3 className="carousel__h3">Find Your Best Job</h3>
                    <h3 className="carousel__h3">In Your Locality</h3>
                </div>
                <div className="carousel__img">
                    <img src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="careousel img" />
                </div>

                <div className="carousel__search">
                    <h2>Search for job (<MdInfo />)</h2>
                    <form action="#">
                        <select name="title" id="title">
                            <option value="">Select Job</option>
                        </select>
                        <select name="city" id="city">
                            <option value="">Select City</option>
                        </select>
                        <button type="submit">
                            <MdSearch className='icon' />
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}