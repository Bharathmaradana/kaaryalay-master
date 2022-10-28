import React from 'react'
import {Row,Col} from 'react-bootstrap';

import person from './images/Update-pana 1.png';


function Dashboard() {
  return (
    <div>
      <Row>
        <Col sm={8}>
          <div className="dash-1">
            <div className="dash-2">
              <div className="dash-3">
                <div className="dash-cur"> </div>
                <Row className="dash-4">
                  <Col>
                    <h1 className="dash-txt">
                      Upgrade Your Account To Access Any Features!!
                    </h1>
                    <h4 className=" dash-txt-1" style={{ color: "white" }}>
                      Continue to use all benefits
                    </h4>
                    <button className="dash-btn">Upgrade</button>
                  </Col>
                  <Col>
                    <img src={person} className="dash-img img-fluid" />
                  </Col>
                </Row>
                <div className="dash-cur-1"> </div>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={4} >
        
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard