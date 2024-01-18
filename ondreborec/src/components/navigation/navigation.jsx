import React from 'react';
import './navigation.css';

function NavigationMenu() {
    return (
        <nav className="navigation-menu">
            <ul>
                <li><a href="#section1">Sekce 1</a></li>
                <li><a href="#section2">Sekce 2</a></li>
                <li><a href="#section3">Sekce 3</a></li>
            </ul>
        </nav>
    );
}

export default NavigationMenu;