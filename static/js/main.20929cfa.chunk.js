(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{206:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),i=n(73),r=n.n(i),o=(n(81),n(1)),c=n(2),s=n(4),m=n(3),u=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I am ",e.name,"."),l.a.createElement("h3",null,e.roleDescription),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))}))))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),n}(t.Component),p=n(74),d=n.n(p),h=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:d.a,alt:""})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.name),l.a.createElement("br",null),l.a.createElement("span",null,e.address),l.a.createElement("br",null),l.a.createElement("span",null,e.email)))))))}}]),n}(t.Component),f=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfPassing," ",e.YearOfPassing)),l.a.createElement("p",null,e.Achievements,l.a.createElement("br",null),e.Achievements2,l.a.createElement("br",null),e.Achievements1)))})))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},e.work&&e.work.map((function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.CompanyName),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.MonthOfJoining," ",e.YearOfJoining," - ",e.MonthOfLeaving," ",e.YearOfLeaving)),l.a.createElement("p",null,e.Achievements)))})))),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",null,e.skillsDescription),l.a.createElement("div",{className:"bars"},l.a.createElement("ul",{className:"skills"},e.skills&&e.skills.map((function(e){return l.a.createElement("li",null,l.a.createElement("span",{className:"bar-expand ".concat(e.skillname.toLowerCase().split(" ").join(""))}),l.a.createElement("em",null,e.skillname))})))))))}}]),n}(t.Component),E=n(75),v=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){this.props.resumeData;var e=[{name:"Processing Time in Mule",description:"calculate processing Time in Mule for each Component",imgurl:"processingTime_wwfywb",url:"https://youtu.be/_SlajIKm5Ko"},{name:"Shopping Cart Application Spring Boot Application",description:"Fetch and display user products such as Books and Apparel",imgurl:"shoppingCart_t0pcif",url:"https://youtu.be/npTnYxj-ADI"},{name:"Cheque Submission Android Application",description:"Cheque Submission Application for Android",imgurl:"ChequeSubmission_byulyy",url:"https://drive.google.com/file/d/0Bz5kvTbBe4fVTk16OFM3S0E5dDQ/view?usp=sharing"}];return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Works, Click Items to Know More"),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e&&e.map((function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url},l.a.createElement(E.Image,{cloudName:"nikhilbalyan",publicId:"".concat(e.imgurl),height:"300",width:"300",crop:"scale"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))))))}))),l.a.createElement("h1",null,"Open Source Contributions"),l.a.createElement("div",{className:"row"},l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/mulesoft/docs-mule-runtime/issues/1311"},l.a.createElement("span",null,"Record Type missing from Flat file schemas in Mule Documentation")),l.a.createElement("br",null),l.a.createElement("a",{href:"https://github.com/getodk/collect/issues/644"},l.a.createElement("span",null,"Missing Runtime Permission for Android 6.0 and above from ODK Collect Android Application")))))))}}]),n}(t.Component),g=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},"Feel free to contact me for any work or suggestions below"))),l.a.createElement("div",{className:"row"},l.a.createElement("aside",{className:"eigth columns footer-widgets"},l.a.createElement("div",{className:"widget"},l.a.createElement("h4",null,"Email : "," ",e.email)))))}}]),n}(t.Component),b=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map((function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),n}(t.Component),N={imagebaseurl:"http://nikhilbalyan.github.io/portfolio",name:"Nikhil",role:"Integration Professional",linkedinId:"https://www.linkedin.com/in/nikhil-990601a2/",skypeid:"Your skypeid",roleDescription:" An enthusiastic software developer with a knack of designing and developing secure, scalable and robust Mule applications.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/nikhil-990601a2/",className:"fa fa-linkedin"},{name:"github",url:"https://github.com/nikhilbalyan",className:"fa fa-github"}],aboutme:"A Computer Science Engineer with more than 2 years of industry experience focusing on Integration domain spreading across various domains like Travel, Insurance and CRM ",address:"Bengaluru, India",email:"nbalyan10@gmail.com",education:[{UniversityName:"Manav Rachna International University",specialization:"Computer Science and Engineering",MonthOfPassing:"July",YearOfPassing:"2017",Achievements:"Campus Google Applied CS with Android Facilitator",Achievements1:"Winner of programming Competition supported by IEEE Computer Society, Delhi Section",Achievements2:"Winner of Declamation Contest"}],work:[{CompanyName:"Mindtree",specialization:"Software Developer",MonthOfJoining:"Nov",YearOfJoining:"2017",MonthOfLeaving:"",YearOfLeaving:"Present",Achievements:"Working on solving business problems of Integrating different systems using Mulesoft Ecosystem"},{CompanyName:"Softnerve",specialization:"Software Development R&D Intern",MonthOfJoining:"Sep",YearOfJoining:"2017",MonthOfLeaving:"Oct",YearOfLeaving:"2017",Achievements:"Contributed significantly for the integration of IOT devices and AWS IOT platform using Spring Boot Microservices"},{CompanyName:"CityExploro",specialization:"Android Developer Intern",MonthOfJoining:"Jan",YearOfJoining:"2017",MonthOfLeaving:"Jun",YearOfLeaving:"2017",Achievements:"Contributed in the development of an Android Application for exploring cities and launched the alpha version on Google Play Store"},{CompanyName:"R Systems International",specialization:"Android Developer Intern",MonthOfJoining:"Oct",YearOfJoining:"2015",MonthOfLeaving:"Apr",YearOfLeaving:"2016",Achievements:"Developed an Android Application for submission of cheques"}],skillsDescription:"Have hands on experience on",skills:[{skillname:"Mule4"},{skillname:"Mule3"},{skillname:"RAML"},{skillname:"Dataweave"},{skillname:"Spring Boot"},{skillname:"Java 8"},{skillname:"Reactjs"},{skillname:"JavaScript"},{skillname:"Android"}],portfolio:[{name:"project1",description:"ProcessingTime",imgurl:"images/portfolio/phone.jpg"},{name:"project2",description:"mobileapp",imgurl:"images/portfolio/project.jpg"},{name:"project3",description:"mobileapp",imgurl:"images/portfolio/project2.png"},{name:"project4",description:"mobileapp",imgurl:"images/portfolio/phone.jpg"}],testimonials:[{description:"This is a sample testimonial",name:"Some technical guy"},{description:"This is a sample testimonial",name:"Some technical guy"}]},w=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){return Object(o.a)(this,n),a.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u,{resumeData:N}),l.a.createElement(h,{resumeData:N}),l.a.createElement(f,{resumeData:N}),l.a.createElement(v,{resumeData:N}),l.a.createElement(g,{resumeData:N}),l.a.createElement(b,{resumeData:N}))}}]),n}(t.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");k?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):y(e)}))}}()},74:function(e,a,n){e.exports=n.p+"static/media/myPic.7e3b4761.jpg"},76:function(e,a,n){e.exports=n(206)},81:function(e,a,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.20929cfa.chunk.js.map