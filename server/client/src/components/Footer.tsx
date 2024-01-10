import './footer.scss';
import { SongSlider } from '../fetures/songPlayer/SongSlider';
import { useState } from 'react';
export const Footer = () => {
    const [player, setPlayer] = useState(false);
    const handleFooterLoad = () => {
        setPlayer(player => !player)
    }
    return (
        <div className="footer footer-pos">
            <button onClick={handleFooterLoad}>player show hide</button>
            { player && <SongSlider /> }
            {/* <div className="player-container">
                <div className="song-control">
                    <div className="control-btn shuffle-song">
                        <i className="fa fa-random"></i>
                        <FontAwesomeIcon icon={faRandom} className='fa'/>
                    </div>
                    <div className="control-btn back-song">
                       
                        <FontAwesomeIcon icon={faStepBackward} className='fa' />
                    </div>
                    <div className="control-btn play-btn">
                        
                        <FontAwesomeIcon icon={faPlayCircle} className='fa'/>
                    </div>
                    <div className="control-btn next-song">
                    
                        <FontAwesomeIcon  icon={faStepForward} className='fa'/>
                    </div>
                    <div className="control-btn repeat-song">
                        <i className="fa fa-retweet"></i>
                        <FontAwesomeIcon icon={faRetweet} className='fa' />
                    </div>
                </div>
                <div className="song-sider-container">
                    <span>0:00</span>
                    <div className="song-sider song-pos">
                        <div className="position-sider pos-pos"></div>
                        <div className="handler-sider handler-pos">
                        </div>
                        <div className="time-pos">
                        </div>
                    </div>
                    <span>0:00</span>
                </div>
                <div className="volume-control-container">
                    <div className="devices-container">
                        <i className="fa fa-desktop"></i>
                        <div className="overlay "></div>
                        <div className="devices hide">
                            <div className="devices-header">
                                <FontAwesomeIcon icon={faQuestionCircle} className='fa' />
                            </div>
                            <img src="/static/media/media.ea524865.png" alt="devices" />
                            <div className="device ">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLaptop} className='fa'/>
                                </div>
                                <div className="details">
                                    <h4>DESKTOP-447DTQ6</h4>
                                    <span>
                                        Spotify Connect</span>
                                </div>
                            </div>
                            <div className="device ">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faLaptop} className='fa' />
                                </div>
                                <div className="details">
                                    <h4>Spotify React Player</h4>
                                    <span>
                                    Spotify Connect</span>
                                </div>
                            </div>
                            <button className="learn-more">LEARN MORE</button>
                            <div className="triangle">
                            </div>
                        </div>
                    </div>
                    <div className="volume-sider-container">
                        <FontAwesomeIcon icon={faVolumeUp} className='volumen fa'/>
                        <div className="volume-sider vol-pos">
                            <div className="position-sider position-style">
                            </div><div className="handler-sider handler">
                            </div><div className="po">
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}