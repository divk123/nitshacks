import React from "react";
import {useState} from "react";
 import './map.css';
 const map=()=>{
    return(
    
    <><div className="cont">
        

        <img className="img" src={require('./map.png')} />

        
        <div className="location">
                <label>
                   <h2> Location inside the campus:</h2>
                </label>
                <select >
                    <option value="ADMIN BUILDING">ADMIN BUILDING</option>
                    <option value="GYMKHANA PARK AND NEW GALLERY">GYMKHANA PARK AND NEW GALLERY</option>
                    <option value="ECE,CSE AND EIE DEPARTMENT AREA">ECE,CSE AND EIE DEPARTMENT AREA</option>
                    <option value="ME,CE,EE,MBA DEPARTMENT AREA">ME,CE,EE,MBA DEPARTMENT AREA</option>
                    <option value="T-POINT,BH1,BH2,BH3,PG HOSTEL AREA">T-POINT,BH1,BH2,BH3,PG HOSTEL AREA</option>
                    <option value="BH9 COMPLEX">BH9 COMPLEX</option>
                    <option value="BH4,BH8 AND BH5 AREA">BH4,BH8 AND BH5 AREA</option>
                    <option value="GH1,GH2.GH3 AREA">GH1,GH2.GH3 AREA</option>
                    <option value="SPORTS COMPLEX AREA">SPORTS COMPLEX AREA</option>
                    <option value="GUEST HOUSE AREA">GUEST HOUSE AREA</option>
                </select>
                </div>
            </div></>

    )
}
export default map;