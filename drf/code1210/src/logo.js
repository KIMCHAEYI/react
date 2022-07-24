import React from "react";
import "./logo.css"
import styled from 'styled-components;'

function logo() {
    return (
        <div className="logo">
            <div className="logoImg">
                <img className="logoimg" alt="logo_image" src="img/logo.png" />
            </div>
        </div>
    )
}

export default logo;