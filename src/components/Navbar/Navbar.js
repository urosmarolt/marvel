import React from "react";

import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.navbar}>
                <h1><span>Marvel Universe</span> Character Search</h1>
            </div>
        </nav>
    );
};

export default Navbar