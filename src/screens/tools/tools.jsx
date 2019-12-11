import React from 'react';
import './tools.scss';
import outlook from '../../assets/logos/outlook.png';
import zoho from '../../assets/logos/zoho.png';
import slack from '../../assets/logos/slack.png';
import dkm from '../../assets/logos/dkm.png';
import github from '../../assets/logos/github.png';
import jira from '../../assets/logos/jira.png';
const tools = _ => {
    return (
        <div className="fluid-container tools-background">
            <div className="tools-container screen-container d-flex flex-column justify-content-center align-items-center">
                <header className="mb-4">Day to Day Tools</header>
                <div className="row">
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={outlook} />
                            </div>
                            <div className="card-content">
                            Outlook is our official email provider. Keep yourself updated by accessing your emails on outlook desktop app, mobile app or web.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={zoho} style={{height:"63%",marginTop:"20px"}} />
                            </div>
                            <div className="card-content">
                            A one stop shop for all our employees. Zoho is our complete HR solution. Automate and simplify operations like Leave, company policies &amp; attendance.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={slack} />
                            </div>
                            <div className="card-content">
                            Slack is Xebia's internal chat application. You are always connected with Xebians through this easy and user friendly app.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={dkm} />
                            </div>
                            <div className="card-content">
                            Slack is Xebia's internal chat application. You are always connected with Xebians through this easy and user friendly app.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={github} style={{height:"63%",marginTop:"20px"}} />
                            </div>
                            <div className="card-content">
                            Outlook is our official email provider. Keep yourself updated by accessing your emails on outlook desktop app, mobile app or web.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={jira} />
                            </div>
                            <div className="card-content">
                            Outlook is our official email provider. Keep yourself updated by accessing your emails on outlook desktop app, mobile app or web.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default tools;