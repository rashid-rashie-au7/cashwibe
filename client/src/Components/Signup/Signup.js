import React, { Component } from 'react'
import './signup.css'

export default class Signup extends Component {
    render() {
        return (
            <div>
                <div className='container'>
                    <div className="wrap-container">
                    <h2>Signup</h2>
                        <form className='form'>
                            <div className="row row-space">
                                <div className="inputcoloumn">
                                <div className="input-group">
                                    <label>First Name</label>
                                    <input className="input-style" type='text' name= 'fname'></input>
                                </div>
                                </div>
                                <div className="inputcoloumn">
                                <div className="input-group">
                                    <label>Last Name</label>
                                    <input className="input-style" type='text' name= 'lname' ></input>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="input-group">
                                    <label className="label">Email</label>
                                    <input className="input-style" type='email' name= 'email'></input>
                            </div>
                            <div className="row row-space">
                                <div className="inputcoloumn">
                                <div className="input-group">
                                    <label>Password</label>
                                    <input className="input-style" type='password' name= 'password'></input>
                                    </div>
                                </div>
                                <div className="inputcoloumn">
                                <div className="input-group">
                                    <label>Confirm Password</label>
                                    <input className="input-style" type='password' name= 'password' ></input>
                                </div>
                                </div>
                            </div>
                            

                            <div className="inputrow">
                                <button type='submit' className='button'>Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
