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
                            <div className="inputrow">
                                <div className="inputcoloumn">
                                    <label>First Name</label>
                                    <input type='text' name= 'fname'></input>
                                </div>
                                <div className="inputcoloumn">
                                    <label>Last Name</label>
                                    <input type='text' name= 'lname' ></input>
                                </div>
                            </div>
                        
                            <div className="inputrow">
                                    <label>Email</label>
                                    <input type='email' name= 'email'></input>
                            </div>
                            <div className="inputrow">
                                <div className="inputcoloumn">
                                    <label>First Name</label>
                                    <input type='text' name= 'fname'></input>
                                </div>
                                <div className="inputcoloumn">
                                    <label>Last Name</label>
                                    <input type='text' name= 'lname' ></input>
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
