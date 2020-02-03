import React from 'react';
import './tools.scss';
import outlook from '../../assets/logos/outlook.png';
import zoho from '../../assets/logos/zoho.png';
import slack from '../../assets/logos/slack.png';
import dkm from '../../assets/logos/dkm.png';
import github from '../../assets/logos/github.png';
import jira from '../../assets/logos/jira.png';
import zohodesk from '../../assets/logos/zohodesk.png';
import zohopeople from '../../assets/logos/zohopeoples.png';
import sharepoint from '../../assets/logos/sharepoint.png';
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
                                <img alt="leaves" src={zohopeople} />
                            </div>
                            <div className="card-content">
                                Zoho Peoples take care of your HR processes. From onboarding and attendance management to time tracking and appraisals.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={zohodesk} />
                            </div>
                            <div className="card-content">
                                Zoho Desk is the industry's first context-aware help desk software that helps businesses focus on the customer.
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
                                Struggling with queries related to payroll? DKM is the place to go! It is our payroll management system. Access your salary slips, investment details and FBP details
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
                                GitHub is a Git repository hosting service which is used by Xebia as an official code repository
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
                             Jira is our offical tool for bug tracking, issue tracking, and project management.
                            </div>
                            <div className="card-bottom">
                                <div><span>Available On:</span> <span><i class="fab fa-app-store-ios"></i></span><span><i class="fab fa-google-play"></i></span></div>
                            </div>
                        </div>
                    </div>
                    <div className="tools-cards d-flex justify-content-center flex-wrap">
                        <div className="text-center flex-fill">
                            <div className="d-flex flex-column align-items-center card-heading">
                                <img alt="leaves" src={sharepoint} />
                            </div>
                            <div className="card-content">
                                SharePoint is a web-based platform that integrates with Microsoft Office. SharePoint is primarily sold as a document management and storage system.
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