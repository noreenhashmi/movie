import React from 'react';
import classes from '../styles/Card.module.css'

const Card = ({id,url,title,author,courseDate,courseDetails}) => {
    return (  
        <div className={classes.Card}>
            <img className={classes.Img} src={url} alt="card-image.png" />
            <div className={classes.TextSection}>
                <h3 className={classes.Heading}>{title}</h3>
                <span className={classes.Author}>{author}</span>
                <span className={classes.Date}>{` | ${courseDate}`}</span>
                <p className={classes.Description}>{courseDetails}</p>
            </div>
        </div>
    );
}
 
export default Card