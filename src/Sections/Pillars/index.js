import React, { useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import XebiaCard from '../../Components/XebiaCard';

import styles from './Pillars.module.scss';

import data from './pillarsData';

const { cardContent, sectionData } = data;
export default () => {

  const toCamelCase = str => str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');

  const [loadedContent, setContent] = useState({
    title: 'People First',
    content: sectionData[toCamelCase('People First')]
  });

  const handleClick = title => {
    const content = {
      title,
      content: sectionData[toCamelCase(title)]
    } 
    setContent(content);
  }

  return(
    <Row className={styles.pillarsWrapper}>
      <Col>
        <Row>
          {
            cardContent.map(cardProps => (
              <Col 
                key={cardProps.title}
                sm={6} 
                className={styles.cardCol}
              >
                <XebiaCard
                  {...cardProps}
                  role="presentation"
                  active={cardProps.title === loadedContent.title}
                  handleClick={handleClick}
                />
              </Col>
            ))
          }
        </Row>
      </Col>
      <Col>
        <Card>
          <Card.Title>
            {loadedContent.title}
          </Card.Title>
          <Card.Body>
            <ul>
              {
                loadedContent.content.map(item => (
                  <li key={item}>
                    {item}
                  </li>
                ))
              }
            </ul>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
};


// const Pillars = () => {

//   const [coeInfo, descriptionHandler] = useState({ Title: "", Description: "", Clicked: -1 });

//   const Values = props => {
//     let { Value, Handler } = props;
//     // let askArrow = Clicked == Value ? "" : "Hide-Arrow";
//     return (
//       <div className="pillar-ml">
//         <div className="pillar-card col-12" onClick={ _=>Handler({Title: props.Title, Description: props.Description, Clicked: Value})}>
//           <div>
//             <img alt="people" src={props.Src} />
//           </div>
//           <div className="mt-2">
//             <span>{props.Title}</span>
//           </div>
//           <div className="mt-4">{props.ShortDesc}</div>
//         </div>
//       </div>

//     )
//   }

//   return (
//     <div className="pillars-container screen-container d-flex flex-column justify-content-center align-items-center">
//       <header id="pillars" className="mb-4">Xebia's Values</header>
//       <div className="row">
//       <div className="pillar-grid text-center col-md-6">
//         {
//           XebiaValues.map((x, i) => <Values {...x} key={i} Handler={descriptionHandler} Value={i} Clicked={coeInfo.Clicked} />)
//         }
//       </div>
//       {
//         coeInfo.Clicked !== -1 ?
//           <div className="col-md-6">
//             <div className="col-md-12 Card-Description pillar-ml">
//               <div className="card-title h4">
//                 {
//                   coeInfo.Title
//                 }
//               </div>
//               <div>
//                 <ul>
//                   {
//                     coeInfo.Description.map((x,i)=> <li key={i}>{x.bullet}</li>)
//                   }
//                 </ul>
//               </div>
//             </div>
//           </div> : <div className="col-md-6">
//           <div className="col-md-12 Card-Description pillar-ml">
//               <div className="card-title h4">
//                 {
//                   XebiaValues[0].Title
//                 }
//               </div>
//               <div>
//                 <ul>
//                   {
//                     XebiaValues[0].Description.map((x,i)=> <li key={i}>{x.bullet}</li>)
//                   }
//                 </ul>
//               </div>
//             </div>
//           </div>
//       }
//       </div>
//     </div>
//   );
// };