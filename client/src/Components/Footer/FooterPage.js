import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt, faMapMarkerAlt, } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'
library.add(fab)

export default class FooterPage extends Component {
    render() {
        return (
            <div className="main-footer">
                <div className="container">
                    <div>
                        <img src="./brandlogo.png" alt="" />
                    </div>
                    <div className="list-info">
                        <div className="card-body">
                            <h5>Contact Us</h5>
                            <dl className="dlist-align">
                                <dt><FontAwesomeIcon icon={faPhoneAlt} size="lg" /></dt>
                                <dd style={{ fontFamily: 'sans-serif' }} >1800 1478 1236</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt><FontAwesomeIcon icon={faEnvelope} size="lg" /></dt>
                                <dd >info@cashwibe.com</dd>
                            </dl>
                            <dl className="dlist-align">
                                <dt><FontAwesomeIcon icon={faMapMarkerAlt} size="lg" /></dt>
                                <dd >CashWibe pvt.ltd. <br />
                                    2nd lane, MG Nagar, <br />
                                    Bangalore, Karnataka- India</dd>
                            </dl>
                        </div>
                        <div className="card-body">
                            <h5>Legal</h5>
                            <div>
                                <dl className="dlist-align">
                                    <dd >Terms & Condition</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dd >Our Policy</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dd >Grievance Redressal</dd>
                                </dl>
                                <dl className="dlist-align">
                                    <dd>Corporate Social Responsibility Policy</dd>
                                </dl>
                            </div>

                        </div>
                        <div className="card-body">
                            <h5>Follow Us</h5>
                            <div>
                                <dl className="dlist-align">
                                    <dt><FontAwesomeIcon icon={['fab', 'facebook']} size="lg" /></dt>
                                    <dd >Facebook</dd>
                                </dl>
                            </div>
                            <div>
                                <dl className="dlist-align">
                                    <dt><FontAwesomeIcon icon={['fab', 'instagram']} size="lg" /></dt>
                                    <dd >Instagram</dd>
                                </dl>
                            </div>
                            <div>
                                <div>
                                    <dl className="dlist-align">
                                        <dt><FontAwesomeIcon icon={['fab', 'twitter']} size="lg" /></dt>
                                        <dd >Twitter</dd>
                                    </dl>
                                </div>

                            </div>
                            <div>
                                <dl className="dlist-align">
                                    <dt><FontAwesomeIcon icon={['fab', 'youtube']} size="lg" /></dt>
                                    <dd >Youtube</dd>
                                </dl>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        Copyrights &copy; {new Date().getFullYear()} CashWibe All Rights Reserved
                    </div>
                </div>

            </div>
        )
    }
}
