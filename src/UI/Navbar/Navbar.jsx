import React from 'react';
import { useContext, useState } from 'react';
import context from '../../context/context';
const Navbar = () => {
    const { setVideoQ } = useContext(context);
    const [serachText, setSearchText] = useState('')
    let handler = (e) => {
        e.preventDefault();
        setVideoQ(serachText)
    }
    return (
        <nav class="navbar ">
            <div class="container ">
                <form class="d-flex" role="search" onSubmit={(e) => {
                    handler(e)
                }} >
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {
                        if (e.target.value.trim().length == 0) {
                            console.log('xato');
                        } else {
                            setSearchText(e.target.value.trim())
                        }
                    }} />
                    <button class="btn btn-outline-success" type="submit" >Search</button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;