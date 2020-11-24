import React, { Component } from 'react'

export class StatusCard extends Component {
    render() {
        return (
            <div className='status-container'>
                <div className="status-card">
                    <h6>Application No. : xcv0125874rt</h6>
                    <dl className="dlist-align">
                        <dt>Date :</dt>
                        <dd>23-11-2020</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Application Type :</dt>
                        <dd>Personal Loan</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Cutomer :</dt>
                        <dd>Abdul RAshid A</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Loan Amount :</dt>
                        <dd>15,00,000</dd>
                    </dl>
                    <div className="status-btn">
                        <button className="btn-status">View Application</button>
                    </div>
                </div>
                <div className="status-card">
                    <h6>Application No : xcv0125874rt</h6>
                    <dl className="dlist-align">
                        <dt>Date :</dt>
                        <dd>23-11-2020</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Application Type :</dt>
                        <dd>Personal Loan</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Cutomer :</dt>
                        <dd>Abdul RAshid A</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Loan Amount :</dt>
                        <dd>15,00,000</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Status :</dt>
                        <dd style={{color:"orangered",fontSize:"18px",fontWeight:"bold"}}>Pending</dd>
                    </dl>

                    <div className="status-btn" >
                        <button className="btn-status">View Application</button>
                    </div>
                </div>
                <div className="status-card">
                    <h6>Application No. : xcv0125874rt</h6>
                    <dl className="dlist-align">
                        <dt>Date :</dt>
                        <dd>23-11-2020</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Loan Type :</dt>
                        <dd>Personal Loan</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Cutomer :</dt>
                        <dd>Abdul Rashid A</dd>
                    </dl>
                    <dl className="dlist-align">
                        <dt>Loan Amount :</dt>
                        <dd>15,00,000</dd>
                    </dl>
                    <div className="status-btn">
                        <button className="btn-status">View Application</button>
                    </div>
                </div>

            </div>
        )
    }
}

export default StatusCard
