import React, { Component } from 'react'
import FooterCard from './FooterCard'
import InfoCard from './InfoCard'
import StatusCard from './StatusCard'
import './homepage.css'

export class HomePage extends Component {
    render() {
        return (
            <div className="grid-container">
                <info>
                     <InfoCard />
                </info>
                <main>
                    <div className="content">
                        <div className="main">
                            <StatusCard />
                        </div>
                    </div>
                </main>
                <footer>
                    <FooterCard />
                </footer>




            </div>
        )
    }
}

export default HomePage
