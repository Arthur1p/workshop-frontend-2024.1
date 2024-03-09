import React from 'react';
import './Header.css'

const handleInicioClick = () => {
    window.location.href="index.html"
}

function Header(){
    return(
        <header>
            <nav>
                <div className='logo' id='logo'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0nY4ATllrd5qOML2WXtWYr5-f396xNrxGY8Fj9U1wvQ&s"
                     alt="logo" className='logo' />
                </div>
                <button className='inicioButton' onClick={handleInicioClick}>Inicio</button>
            </nav>
        </header>
    )
}


export default Header;