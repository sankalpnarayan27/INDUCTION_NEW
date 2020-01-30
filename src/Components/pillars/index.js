import React,{ useState } from './node_modules/react';
import './pillars.scss';
import XebiaValues from './XebiaValues';

const Pillars = () => {

  const [coeInfo, descriptionHandler] = useState({ Title: "", Description: "", Clicked: -1 });

  const Values = props => {
    let { Value, Handler } = props;
    // let askArrow = Clicked == Value ? "" : "Hide-Arrow";
    return (
      <div className="pillar-ml">
        <div className="pillar-card col-12" onClick={ _=>Handler({Title: props.Title, Description: props.Description, Clicked: Value})}>
          <div>
            <img alt="people" src={props.Src} />
          </div>
          <div className="mt-2">
            <span>{props.Title}</span>
          </div>
          <div className="mt-4">{props.ShortDesc}</div>
        </div>
      </div>

    )
  }

  return (
    <div className="pillars-container screen-container d-flex flex-column justify-content-center align-items-center">
      <header id="pillars" className="mb-4">Xebia's Values</header>
      <div className="row">
      <div className="pillar-grid text-center col-md-6">
        {
          XebiaValues.map((x, i) => <Values {...x} key={i} Handler={descriptionHandler} Value={i} Clicked={coeInfo.Clicked} />)
        }
      </div>
      {
        coeInfo.Clicked !== -1 ?
          <div className="col-md-6">
            <div className="col-md-12 Card-Description pillar-ml">
              <div className="card-title h4">
                {
                  coeInfo.Title
                }
              </div>
              <div>
                <ul>
                  {
                    coeInfo.Description.map((x,i)=> <li key={i}>{x.bullet}</li>)
                  }
                </ul>
              </div>
            </div>
          </div> : <div className="col-md-6">
          <div className="col-md-12 Card-Description pillar-ml">
              <div className="card-title h4">
                {
                  XebiaValues[0].Title
                }
              </div>
              <div>
                <ul>
                  {
                    XebiaValues[0].Description.map((x,i)=> <li key={i}>{x.bullet}</li>)
                  }
                </ul>
              </div>
            </div>
          </div>
      }
      </div>
    </div>
  );
};

export default Pillars;
