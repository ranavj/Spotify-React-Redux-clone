import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { faStepBackward } from '@fortawesome/free-solid-svg-icons/faStepBackward';
import { faStepForward } from '@fortawesome/free-solid-svg-icons/faStepForward';
import { faRandom } from '@fortawesome/free-solid-svg-icons/faRandom';
import { faRetweet } from '@fortawesome/free-solid-svg-icons/faRetweet';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp';
export const Footer = () => {
    return (
        <div className="footer footer-pos">
            <div className="player-container">
                <div className="song-control">
                    <div className="control-btn shuffle-song">
                        <i className="fa fa-random"></i>
                        <FontAwesomeIcon icon={faRandom} className='fa'/>
                    </div>
                    <div className="control-btn back-song">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 reverse">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                        </svg> */}

                        {/* <i className="fa fa-step-backward reverse"></i> */}
                        <FontAwesomeIcon icon={faStepBackward} className='fa' />
                    </div>
                    <div className="control-btn play-btn">
                        {/* <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 play-btn">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                        </svg> */}
                        {/* <i className="fa play-btn fa-play-circle-o"></i> */}
                        <FontAwesomeIcon icon={faPlayCircle} className='fa'/>
                    </div>
                    <div className="control-btn next-song">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 forward">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                        </svg> */}

                        <i className="fa fa-step-forward forward"></i>
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
                                {/* <h4>Conect to a device</h4> */}
                                {/* <i className="fa fa-question-circle-o" aria-hidden="true">
                                </i> */}
                                <FontAwesomeIcon icon={faQuestionCircle} className='fa' />
                            </div>
                            <img src="/static/media/media.ea524865.png" alt="devices" />
                            <div className="device ">
                                <div className="icon">
                                    {/* <i className="fa fa-laptop" aria-hidden="true"></i> */}
                                    <FontAwesomeIcon icon={faLaptop} className='fa'/>
                                </div>
                                <div className="details">
                                    <h4>DESKTOP-447DTQ6</h4>
                                    <span>
                                        {/* <i className="fa fa-spotify" aria-hidden="true"></i> */}
                                        Spotify Connect</span>
                                </div>
                            </div>
                            <div className="device ">
                                <div className="icon">
                                    {/* <i className="fa fa-laptop" aria-hidden="true"></i> */}
                                    <FontAwesomeIcon icon={faLaptop} className='fa' />
                                </div>
                                <div className="details">
                                    <h4>Spotify React Player</h4>
                                    <span>
                                        {/* <i className="fa fa-spotify" aria-hidden="true"></i> */}
                                        {/* <FontAwesomeIcon icon={'spotify'} className='fa'/> */}
                                    Spotify Connect</span>
                                </div>
                            </div>
                            <button className="learn-more">LEARN MORE</button>
                            <div className="triangle">
                            </div>
                        </div>
                    </div>
                    <div className="volume-sider-container">
                        {/* <i className="volumen fa fa-volume-up" aria-hidden="true"></i> */}
                        <FontAwesomeIcon icon={faVolumeUp} className='volumen fa'/>
                        <div className="volume-sider vol-pos">
                            <div className="position-sider position-style">
                            </div><div className="handler-sider handler">
                            </div><div className="po">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}