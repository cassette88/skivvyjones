import React, { Component } from 'react'
import axios from 'axios';


export default class Videos extends Component {
  constructor(props){
    super(props);
    this.findVideoData = this.findVideoData.bind(this);
  }

  findVideoData(id){
    //id = 'Bjhel5M0pog';
    axios.get(`https://youtubeanalytics.googleapis.com/v2/reports?dimensions=insightPlaybackLocationDetail&endDate=2018-09-13&filters=video%3D%3D${id}%3BinsightPlaybackLocationType%3D%3DEMBEDDED&ids=channel%3D%3DUCXzIKbnT7VS5V-kQLHzPScQ&maxResults=20&metrics=views&sort=-views&startDate=2008-01-01&key=`)
    .then(res => {
      console.log(res)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
       <div className="row">
       <div className="col" align="center">
      <h1>Skivvy Jones</h1>
      <p>3,310,490 views</p>
      </div>
      </div> 
      <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
      <p>Dirty Projectors</p>
      <div className="youtube-player" data-id="qIeCZQemTC0"></div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
      <p>Beach House</p>      
      <div className="youtube-player" data-id="PHbtR8uO81M"></div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
      <p>Atlas Sound</p>
      <div className="youtube-player" data-id="ZBtW5WTb0qE"></div>
      </div>
      {/* <button type="button" className="btn btn-success"
        onClick={this.findVideoData.bind(this,'Bjhel5M0pog')}
        >Fetch Data</button> */}
        <div className="col-lg-4 col-md-6 col-sm-6">
         <a href="https://www.pastemagazine.com/"><img className="img-fluid" src={require('./img/paste.png')} alt="paste magazine log"/></a>
           <p>2603 views</p>
           </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
        <p>Argentina</p>
          <img src={require('./png250px/ar.png')} alt="argentina flag"/>
          <p>23719 views</p>
        </div>
           <div className="col-lg-4 col-md-6 col-sm-6">
          <a href="https://www.billboard.com/"><img className="img-fluid" src={require('./img/Billboard_logo.png')} alt="billboard magazine logo"/></a>
           <p>5900 views</p>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-6" align="center">
           <p>France</p>
          <img src={require('./png250px/fr.png')} alt="french flag"/>
          <p>123103 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6">
          <a href='https://mixi.jp/'><img className="img-fluid" src={require('./img/Mixi_logo.png')} alt="mixi logo"/></a>
           <p>817 views</p>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-6">
          <a href="https://hipersonica.com/"><img className="img-fluid" src={require('./img/hipersonica.jpeg')} alt="mixi logo"/></a>
           <p>828 views</p>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-6">
          <a href="https://www.lesinrocks.com/"><img className="img-fluid" src={require('./img/inrocks.jpg')} alt="mixi logo"/></a>
           <p>1869 views</p>
           </div>
           <div className="col-lg-4 col-md-6 col-sm-6" align="center">
           <p>Japan</p>
          <img src={require('./png250px/jp.png')} alt="japanese flag"/>
          <p>56516 views</p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-6" align="center">
           <p>Indonesia</p>
          <img src={require('./png250px/id.png')} alt="indonesian flag"/>
          <p>32529 views</p>
        </div>
      </div>
      </div>
      
    )
  }
}
