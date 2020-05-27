import React, { Component } from 'react';
import { CloudinaryContext, Image, Transformation } from 'cloudinary-react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    let portfolio = [
      {
        "name": "Processing Time in Mule",
        "description": "calculate processing Time in Mule for each Component",
        "imgurl": 'processingTime_wwfywb',
        "url": "https://youtu.be/_SlajIKm5Ko"
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
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                portfolio && portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a href={item.url}>
                          <div>
                          <Image cloudName="nikhilbalyan" publicId= {`${item.imgurl}`} height = "300" width = "300" crop="scale"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                          {/* </a> */}
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
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
