import React from 'react'
import './ErrorPage.css'
function ErrorPage({ title }) {
    return (
        <>
            <div className="backContainerLog">
                <div className="overlayLog"></div>
                <div id="notfound">
                    <div className="notfound">
                        <div className="notfound-404">
                            <h3>Oops! Page not found</h3>
                            <h1>
                                <span>4</span>
                                <span>0</span>
                                <span>4</span>
                            </h1>
                        </div>
                        <h2>{title}</h2>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ErrorPage