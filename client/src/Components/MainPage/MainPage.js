import React, { Component } from 'react';
import SlideShow from './SlideShow';
import Player from './Player'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCarAlt, faCreditCard, faWallet, faLaptop, faHandHoldingUsd, faFileAlt, faClock } from '@fortawesome/free-solid-svg-icons'
import ModalCalc from '../Modal/ModalCalc'

export default class MainPage extends Component {
    constructor(){
        super()
        this.state={
            modalShow:false
        }
        this.setModalShow = (modalShow) => {
            this.setState({modalShow});
        };
    }
    render() {
        let ModalClose =() =>this.setState({modalShow:false});
        return (
            <div>
                <div className="media-container" >
                    <div className="carousel" >
                        <SlideShow />
                    </div>
                    <div className="video-player" >
                        <Player />
                    </div >
                </div>
                <div className="button-section" >
                    <div className="coloumn-card">
                        <FontAwesomeIcon icon={faHome} size='3x' />
                        <div style={{ marginTop: '15px' }}>Home Loan</div>
                    </div>
                    <div className="coloumn-card">
                        <FontAwesomeIcon icon={faWallet} size='3x' />
                        <div style={{ marginTop: '15px' }}>Personal Loan</div>
                    </div>
                    <div className="coloumn-card">
                        <FontAwesomeIcon icon={faCarAlt} size='3x' />
                        <div style={{ marginTop: '15px' }}>Car Loan</div>
                    </div>
                    <div className="coloumn-card">
                        <FontAwesomeIcon icon={faCreditCard} size='3x' />
                        <div style={{ marginTop: '15px' }}>Credit Card</div>
                    </div>

                </div>

                <div className="media-container" >
                    <div className="btn-container" >
                        <h4>Calculate & Plan</h4>
                        <button className="btn-emi" onClick={()=> this.setModalShow(true)}> 
                            <FontAwesomeIcon icon={faWallet} size='2x' /> <br /> 
                             Personal Loan EMI Calculator 
                        </button>
                        <button className="btn-emi" ><FontAwesomeIcon icon={faHome} size='2x' /> <br />  Home Loan EMI Calculator</button>
                        <button className="btn-emi" > <FontAwesomeIcon icon={faCarAlt} size='2x' /> <br /> Car Loan EMI Calculator</button>
                        <button className="btn-emi" > <FontAwesomeIcon icon={faCreditCard} size='2x' /> <br /> Credit Card EMI Calculator</button>
                    </div >
                    <ModalCalc
                        show={this.state.modalShow}
                        onHide={() => this.setModalShow(false)}>
                    </ModalCalc>
                    <div className="vl"></div>
                    <div className="blog-container">
                        <h4>Latest News</h4>
                        <div className="blog">
                            <div className='blog-img'>
                                <img src="./logo.png" alt="" />
                            </div>
                            <div style={{ paddingTop: '40px' }}>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Autem perspiciatis aut magni, obcaecati voluptas deserunt soluta harum distinctio eos dolores fuga ullam.Dolore fugiat ullam officiis aliquam fugit, molestiae quas! </p>
                            </div>
                        </div>
                    </div >
                </div>
                <div className="portfolio-container" >
                    <div className="img-wrap">
                        <div className="portfolio-card">
                            <div className="circle-container">
                                <FontAwesomeIcon icon={faLaptop} size='5x' /> 
                             </div>
                             <div>100% Online Process</div>
                        </div>
                        <div className="portfolio-card">
                            <div className="circle-container">
                                <FontAwesomeIcon icon={faHandHoldingUsd} size='5x' />
                            </div>
                            <div>Loan Starting From 50,000</div>
                        </div>
                        <div className="portfolio-card">    
                            <div className="circle-container">
                                <FontAwesomeIcon icon={faFileAlt} size='5x' />
                            </div>
                            <div>Minimum Documentation</div>
                        </div>
                        <div className="portfolio-card">    
                            <div className="circle-container">
                                <FontAwesomeIcon icon={faClock} size='5x' />
                            </div>
                            <div>Fastest Proccesing & Approval</div>
                        </div>
                    </div>


                </div>
                <div className="review-container" >
                    Reviews
            </div>
            </div>
        )
    }
}