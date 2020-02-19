import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import outlook from './assets/outlook.png';
import zoho from './assets/zoho.png';
import slack from './assets/slack.png';
import dkm from './assets/dkm.png';
import github from './assets/github.png';
import jira from './assets/jira.png';
import zohodesk from './assets/zohodesk.png';
import zohopeople from './assets/zohopeoples.png';
import sharepoint from './assets/sharepoint.png';
import dotsBg from './assets/dots.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';

import SectionTitle from '../../Components/SectionTitle';

import styles from './Tools.module.scss';

const toolsData = [
  {
    logo: outlook,
    desc: 'Outlook is our official email provider. Keep yourself updated by accessing your emails on outlook desktop app, mobile app or web.',
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: zoho,
    desc: 'A one stop shop for all our employees. Zoho is our complete HR solution. Automate and simplify operations like Leave, company policies & attendance.',
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: zohopeople,
    desc: 'Zoho People take care of your HR processes. From onboarding and attendance management to time tracking and appraisals.',
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: zohodesk,
    desc: "Zoho Desk is the industry's first context-aware help desk software that helps businesses focus on the customer.",
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: slack,
    desc: "Slack is Xebia's internal chat application. You are always connected with Xebians through this easy and user friendly app.",
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: dkm,
    desc: "Struggling with queries related to payroll? DKM is the place to go! It is our payroll management system. Access your salary slips, investment details and FBP details.",
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: github,
    desc: "GitHub is a Git repository hosting service which is used by Xebia as an official code repository.",
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: jira,
    desc: "Jira is our offical tool for bug tracking, issue tracking, and project management.",
    appLinks: {
      ios: '',
      android: ''
    }
  },
  {
    logo: sharepoint,
    desc: "SharePoint is a web-based platform that integrates with Microsoft Office. SharePoint is primarily sold as a document management and storage system.",
    appLinks: {
      ios: '',
      android: ''
    }
  }
];

export default () => {
  return (
    <Row className={styles.toolsWrapper} style={{
      backgroundImage: `url("${dotsBg}")`
    }}>
      <Col>
        <SectionTitle
          title="Day to Day tools"
        />
      </Col>
      <Col>
        <Row>
          {
            toolsData.map(tool => (
              <Col md={3} key={tool.logo}>
                <div className={styles.toolCard}>
                  <div className={styles.cardImage}>
                    <Image src={tool.logo} fluid />
                  </div>
                  <div className={styles.desc}>
                    <p>
                      {tool.desc}
                    </p>
                  </div>
                  <div className={styles.appLink}>
                    Available On:
                    <a href={tool.appLinks.ios}>
                      <span>
                        <FontAwesomeIcon icon={faAppStoreIos} />
                      </span>
                    </a>
                    <a href={tool.appLinks.android}>
                      <span>
                        <FontAwesomeIcon icon={faGooglePlay} />
                      </span>
                    </a>
                  </div>
                </div>
              </Col>
            ))
          }
        </Row>
      </Col>
    </Row>
  )
};
