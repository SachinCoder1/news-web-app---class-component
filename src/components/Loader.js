import React, { Component } from 'react'
import loading from '../components/loading.gif'

export class Loader extends Component {
    render() {
        return (
            <div className="container text-center my-3">
                <img src={loading} alt="" />
            </div>
        )
    }
}

export default Loader
