import React, { Component } from 'react';
import ProcessingTime from './processingTime.png'
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let portfolio = [
        {
          "name":"Processing Time in Mule",
          "description":"calculate processing Time in Mule for each Component",
          "imgurl": ProcessingTime,
          "url": "https://youtu.be/_SlajIKm5Ko"
        },
        {
          "name":"project3",
          "description":"mobileapp",
          "imgurl":"/images/portfolio/project2.png",
          "url": ""
        },
        {
          "name":"project4",
          "description":"mobileapp",
          "imgurl":"/images/portfolio/phone.jpg",
          "url": ""
        },
        {
          "name":"Cheque Submission Application",
          "description":"Cheque Submission Application for Android",
          "imgurl":"/images/portfolio/project.jpg",
          "url": "https://drive.google.com/file/d/0Bz5kvTbBe4fVTk16OFM3S0E5dDQ/view?usp=sharing"
        }
      ]
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            portfolio && portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    {/* <a href="#modal-01"> */}
                    {/* <div> */}
                    <a href = {item.url}>
                          <img src={`${item.imgurl}`} className="item-img"/>
                          
    
                      {/* </div> */}
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    {/* </a> */}
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
