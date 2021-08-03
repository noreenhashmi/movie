import React from 'react';
import classes from "../styles/Header.module.css"
const Header = () => {
    return ( 
    <header>
        <div className={classes.Topbar}>
            <a className={classes.Logo} href="#">
                <div>
                    <div className={classes.LogoHead}>EDYODA</div>
                    <p className={classes.LogoPara}>Stories</p>
                </div>
            </a>
            <div className={classes.ExploreDiv}>
                <ul className={classes.RightUl}>
                    <li className={classes.RightLi}>
                        <div className={classes.Categories}>Explore Categories<span><i className="fas fa-caret-down"></i></span></div>
                    </li>
                </ul>
                <ul className={classes.TopbarDetails}>
                    <div className={classes.GrayText}>
                        <p className={classes.GrayPara}>
                            EdYoda is free learning and knowledge <br /> sharing platform for techies
                        </p>
                    </div>
                    <div className={classes.ButtonWrapper}>
                        <button className={classes.MainWebsiteBtn}>Go To Main Website</button>
                    </div>
                </ul>
            </div>
        </div>
    </header>
    );
}
 
export default Header;