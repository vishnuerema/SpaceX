import React, { Component } from 'react'
import './App.css';

  class App extends Component {
    constructor() 
    {
      super();
      this.state = {
        initialdata: [],
        data: [],
        date :[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020]
      }
    }

    componentDidMount () {
      fetch("https://api.spacexdata.com/v3/launches?limit=100")
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          initialdata: json,
          data: json,
        })
      });

  }
  launchsuccessfilter = () =>{
    this.triggerApi('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true')
  }
  
  launchfalsefilter = () =>{
    this.triggerApi('https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false')

  }
    
  landsuccessfilter = () =>{
    this.triggerApi('https://api.spaceXdata.com/v3/launches?limit=100&land_success=true')
  }

  landfalsefilter = () =>{
    this.triggerApi('https://api.spaceXdata.com/v3/launches?limit=100&land_success=false')
  }

    triggerApi=(url)=>{
      fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        this.setState({
          initialdata: json,
          data: json,
        })
      });
    }

   yearFilter =(yr)=>{
      let newdata =[];
      newdata =this.state.initialdata.filter((filterdata)=>filterdata.launch_year==yr)
      console.log(newdata)
      this.setState({
        data : newdata
      })
   }

  render() {
    const { data,date } = this.state
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
              {date.map((val,i) => (
                <div  key={i} className="btn_launch"><button type="button" onClick={()=>{this.yearFilter(val)}} className="btn button launchbtn">{val}</button></div>
                ))}
                </div>
            </div>
            <div className="launchyear_filter">
            <p className="launch_year">
               Successful Launch 
              </p>
              <hr className="launch_hr" />
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" onClick={()=>{this.launchsuccessfilter()}} className="btn button launchbtn">True</button></div>
                <div className="btn_launch"><button type="button" onClick={()=>{this.launchfalsefilter()}} className="btn button launchbtn">False</button></div>
              </div>
            </div>
            <div className="launchyear_filter">
            <p className="launch_year">
               Successful Landing 
              </p>
              <hr className="launch_hr" />
              <div className="launch_all_btn">
                <div className="btn_launch"><button type="button" onClick={()=>{this.landsuccessfilter()}} className="btn button launchbtn">True</button></div>
                <div className="btn_launch"><button type="button" onClick={()=>{this.landfalsefilter()}} className="btn button launchbtn">False</button></div>
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
                      <p className="img_card_missionid">Mission ids : <span className="txt_card_date">{val.mission_id}</span></p>
                      <p className="img_card_missionid">Launch Year : <span className="txt_card_date">{val.launch_year}</span></p>
                      <p className="img_card_missionid">Successful Launch : <span className="txt_card_date">{val.launch_success ? "true":"false"}</span></p>
                      <p className="img_card_missionid">Successful Landing : <span className="txt_card_date">{val.rocket.first_stage.cores[0].land_success ? "true":"false"}</span></p>
                  </div>
                </div>
))}
          </div>
         </div>
        </div>
      </div>
      <div class="developer"><h1 className="devname">Developed by : </h1>Vishnue</div>
    </div>
  );
}
}

export default App;
