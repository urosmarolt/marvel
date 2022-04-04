import React from "react";
import styles from './Card.module.css'

const Card = ({ results }) =>  {
    let display
    
    if (results) {
        return (
            <div className={styles.cardContainer}>
                <div className={styles.nameContainer}>
                    <h2>{results.label}</h2>
                </div>
                <div className={styles.descContainer}>
                    {results.description}
                </div>
                <div className={styles.imgContainer}>
                    <img src={`${results.thumbnail.path}.${results.thumbnail.extension}`} alt="Marvel" width="300" />
                </div>
            </div>
        );
    }
    else {
        display = "No Characters found :/"
    }

    return <>{display}</>
}


export default Card