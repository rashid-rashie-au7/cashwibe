import React, { Component } from 'react'
import './homepage.css'


export class InfoCard extends Component {
    render() {
        return (
            <div className='info-container'>
                <div className="info-card">
                <p>Total Applications</p>
                    <h4>5 <span>Nos.</span></h4>
                </div>
                <div className="info-card">
                    <p> Approved Applications</p>
                    <h4>5 <span>Nos.</span></h4>
                </div>
                <div className="info-card">
                    <p>Rejected Applications</p>
                    <h4>5 <span>Nos.</span></h4>       
                </div>
                <div className="info-card">
                    <p>Pending Applications</p>
                    <h4>5 <span>Nos.</span></h4>   
                </div>
            </div>
        )
    }
}

export default InfoCard
