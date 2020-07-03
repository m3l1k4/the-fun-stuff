import React from 'react';
import Header from "../../components/Header";
import "./Bridge.scss";



export default function Bridge() {
    return (
        <>
        <Header/>
        <div className="bridge">
            <div className="bridge__text-wrapper">
                <h1 className="bridge__title">Not so fast </h1>
                <p className="bridge__hint">Many ways to cry , one way to puzzle</p>
            </div>
        </div>
        </>
    )
}
