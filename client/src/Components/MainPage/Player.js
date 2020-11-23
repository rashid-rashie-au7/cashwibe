import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './style.css'

export default class Player extends Component {
    render() {
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={[
                        'https://www.youtube.com/watch?v=FuAOdgIiXyg'
                      ]}
                    width='100%'
                    height='100%'
                    playing= {true}
                    muted={true}
                    loop={true}
                />
            </div>
        )
    }
}
