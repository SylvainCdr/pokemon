// Creation d'un beau header pour le site 'pokemon world'

import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <div >
                <Link to="/">
                    <img src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9" alt="pokemon-logo" className="header__logo" />
                </Link>
            </div>
            <div className="header__menu">
                <Link to="/">Home</Link>
        
            </div>
        </div>
    );
}





// function Header() {
//     return (
//         <div className="App">
//             <h3>Header</h3>
//         </div>
//     );
// }

export default Header;
