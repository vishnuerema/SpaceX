import React, { Component } from 'react'
import './App.css';

  class App extends Component {
    constructor() 
    {
      super();
      this.state = {
        data: [],
      }
    }

    componentDidMount () {
      fetch("https://api.spacexdata.com/v3/launches?limit=100")
      .then(res => res.json())
      .then(json => {
        // console.log(json)
        this.setState({
          data: json,
        })
      });

      fetch("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          data: json,
        })
      });
  }
  render() {
    const { data } = this.state
  return (
    <div className="Spacexdata_all">
      <div className="common_Spacexdata">
        <h4 className="head_Spacexdata">
          SpaceX Launch Programs
        </h4>
        <div className="filterandvalues_Spacexdata">
          <div className="filter_Spacexdata bg_white">
            <h3 className="filter_head">Filters</h3>
            <div className="launchyear_filter">
              <p className="launch_year">
                Launch year
              </p>
              <hr className="launch_hr" />
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2006</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2007</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2008</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2009</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2010</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2011</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2012</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2013</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2014</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2015</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2016</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2017</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2018</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2019</button></div>
              </div>
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">2020</button></div>
              </div>
            </div>
            <div className="launchyear_filter">
            <p className="launch_year">
               Successful Launch 
              </p>
              <hr className="launch_hr" />
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">True</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">False</button></div>
              </div>
            </div>
            <div className="launchyear_filter">
            <p className="launch_year">
               Successful Landing 
              </p>
              <hr className="launch_hr" />
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" className="btn button launchbtn">True</button></div>
                <div className="btn_launch"><button type="button" className="btn button launchbtn">False</button></div>
              </div>
            </div>
          </div>
          <div className="filtervalue_Spacexdata">
            <div className="filtervalue_Spacexdata_img">
            {data.map((val,i) => (
                <div key={i} className="Spacexdata_imgdata">
                  <div className="Spacexdata_imgs">
                      <img src={val.links.mission_patch_small} className="spacex_img img-fluid" alt="no-img" />
                  </div>
                  <div className="Spacexdata_img_data">
                      <h6 className="img_card_head">FalconSat#{val.flight_number}</h6>
                      <p className="img_card_missionid">Mission ids</p>
                      <p className="img_card_missionid">Launch Year : <span className="txt_card_date">{val.launch_year}</span></p>
                      <p className="img_card_missionid">Successful Launch : <span className="txt_card_date">{val.launch_success}</span></p>
                      <p className="img_card_missionid">Successful Landing : <span className="txt_card_date"></span></p>
                  </div>
                </div>
))}
          </div>
         </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
