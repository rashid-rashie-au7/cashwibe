import React, { Component } from 'react'
import './signin.css'

export default class Signin extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="wrap-container">
                        <div className="logos">
                        <img src="logo.png" alt="Company logo" />
                        </div>
                        <h2> Hi, Welcome Back....</h2>
                        <div className="input-group">
                            <input type="text" className="input-style" placeholder="Username"  />
                        </div>
                        <div className="input-group">
                            <input type="password" className="input-style" placeholder="Password" />
                        </div>
                        <div className="input-group">
                            <button type="submit" className="button">Login</button>
                        </div>
                        <div className="input-group">
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
