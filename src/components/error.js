import React from 'react'
import { MainW } from '../styleW/allWrapper'

const Error = () => {
    return (
        <MainW>
            <div className="container d-flex align-items-center justify-content-center text-danger">
                <div>
                    <h1>I'm Sorry</h1>
                    <h1>Wrong Address</h1>
                </div>
            </div>

        </MainW>
    )
}

export default Error
