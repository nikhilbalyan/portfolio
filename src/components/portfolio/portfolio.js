import React, { Component } from 'react';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let portfolio = [
      {
        "name": "Processing Time in Mule",
        "description": "Calculate processing Time in Mule for each Component",
        "imgurl": 'processingTime_wwfywb',
        "url": "https://youtu.be/_SlajIKm5Ko"
      },
      {
        "name": "Translation of text from English to Spanish involving Azure API, Slack API and Mule application for orchestration",
        "description": "Convert English to Spanish from Slack Channel using Mule application as orchestrator and Azure API for conversion of text",
        "imgurl": "translate_slack_bot_PM_sxdhny",
        "url": "https://www.youtube.com/watch?v=Pa71X6aBD3U"
      },
      {
        "name": "Shopping Cart Application Spring Boot Application",
        "description": "Fetch and display user products such as Books and Apparel",
        "imgurl": "shoppingCart_t0pcif",
        "url": "https://youtu.be/npTnYxj-ADI"
      },
      {
        "name": "Cheque Submission Android Application",
        "description": "Cheque Submission Application for Android",
        "imgurl": 'ChequeSubmission_byulyy',
        "url": "https://drive.google.com/file/d/0Bz5kvTbBe4fVTk16OFM3S0E5dDQ/view?usp=sharing"
      }
    ]
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works, Click Items to Know More</h1>
            <div className="row">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                portfolio && portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                          <div>
                          
                          <Image cloudName="nikhilbalyan" publicId= {`${item.imgurl}`} height = "300" width = "300" crop="scale"/>
                          <a href={item.url}>
                            <span>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                            
                              <h5>{item.name}</h5>
                              
                              <p>{item.description}</p>
                              
                            </div>
                          </div>
                          </span>
                          </a>
                          </div>
                    </div>
                    </div>
                  )
                })
              }
              </div>
              </div>
              <div>
                <a href="https://youtu.be/_SlajIKm5Ko"><span>Processing Time Mule Application</span></a>
                <br/>
                <a href="https://www.youtube.com/watch?v=Pa71X6aBD3U"><span>Tranlsate English to Spanish for Slack Channel using Translate service of Microsoft Azure and orchestrating using Mule application </span></a>
                <br/>
                <a href="https://youtu.be/npTnYxj-ADI"><span>Shopping Cart Spring Boot</span></a>
                <br/>
                <a href="https://drive.google.com/file/d/0Bz5kvTbBe4fVTk16OFM3S0E5dDQ/view?usp=sharing"><span>Cheque Submission Android Application</span></a>
              </div>
            <h1>Selected Open Source Contributions</h1>
            <div className = "row">
            <p>
              <a href= "https://github.com/mulesoft/docs-mule-runtime/issues/1311">
                <span>
                  Record Type missing from Flat file schemas in Mule Documentation
                  </span>
              </a>
              <br/>
              <a href = "https://github.com/getodk/collect/issues/644">
               <span>
                  Missing Runtime Permission for Android 6.0 and above from ODK Collect Android Application
                  </span>
              </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
