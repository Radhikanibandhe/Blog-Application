import React from "react";
import './header.component.css'

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitle-sm">Read, Write &</span>
                <span className="headerTitle-lg">Explore!😄</span>
            </div>
            <div className="header-bg"></div>
        </div>
    )
}