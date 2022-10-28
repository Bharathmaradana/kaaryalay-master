import React,{useState} from 'react'
import './chart.css'
import Chart from "react-apexcharts";

function Recharts() {
  const [state, setState] = useState({
   
  });
  const [show,setshow]= useState(false);



  return (
    <div style={{overFlow:'hidden'}}>
      <div className="chart">
        <div className="graph-1" style={{ marginTop: "2rem" }}>
          <div className="graph-2">
            <div className="graph-3">
              <div
                className="graph-4"
                style={{ height: "125px" }}
                id="block-data"
              >
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-5" style={{ height: "220px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-7">
              <div className="graph-4" style={{ height: "125px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-5" style={{ height: "170px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-7">
              <div className="graph-4" style={{ height: "205px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-5" style={{ height: "180px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-7">
              <div className="graph-4" style={{ height: "85px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="graph-5" style={{ height: "170px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-7">
              <div className="graph-4" style={{ height: "175px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>  
                </div>
              </div>
              <div className="graph-5" style={{ height: "120px" }}>
                {" "}
                <div className="showing">
                  <div className="show-1">
                    <div
                      className="show-2"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <p className="show-p-1">Total Compensation</p>
                      <p className="show-p-2">$500.00</p>
                      <p className="show-p-3">Cycle 5 - October 2021</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-7">
              <div className="graph-4"></div>
              <div className="graph-5"></div>
            </div>
          </div>
        </div>
        <div className="chart-line"></div>
        <div className="chart-line"></div>
        <div className="chart-line"></div>
        <div className="chart-line-1"></div>
      </div>
    </div>
  );
}

export default Recharts