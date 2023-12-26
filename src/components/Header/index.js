import {BiChevronDown} from "react-icons/bi"
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {BiChevronRight} from "react-icons/bi"
import {MdKeyboardArrowUp} from "react-icons/md"
// import {RiArrowDropRightLine} from "react-icons/ri"
// import car from "../../assets/static-data-apis/header/media-files/singlePageData/industries/industries/car_1967877.png"
import assur from "../../assets/static-data-apis/header/media-files/nav/services/services/audit-and-assurance/assurance.png"
import over from "../../assets/static-data-apis/header/media-files/nav/services/services/audit-and-assurance/overview.png"
import adult from "../../assets/static-data-apis/header/media-files/nav/services/services/audit-and-assurance/audit.png"
import y from "../../assets/static-data-apis/header/media-files/nav/whyExponent/yexponent.png"
import could1 from "../../assets/static-data-apis/header/media-files/singlePageData/products/Cloud Applications/Applications Overview.png"
import could2 from "../../assets/static-data-apis/header/media-files/singlePageData/products/Cloud Applications/Customer-Experience.png"
import could3 from "../../assets/static-data-apis/header/media-files/singlePageData/products/Cloud Applications/Enterprise Performance Management.png"
import could4 from "../../assets/static-data-apis/header/media-files/singlePageData/products/Cloud Applications/Enterprise Resource Planning (ERP).png"
import could5 from "../../assets/static-data-apis/header/media-files/singlePageData/products/Cloud Applications/Financial Management.png"
import could6 from "../../assets/static-data-apis/header/media-files/singlePageData/products/Cloud Applications/Inventory-Management.png"
import resorce1 from "../../assets/static-data-apis/header/media-files/singlePageData/resources/Cloud Console Login.png"
import resorce2 from "../../assets/static-data-apis/header/media-files/singlePageData/resources/Community.png"
import resorce3 from "../../assets/static-data-apis/header/media-files/singlePageData/resources/Contracts-and-Policies.png"
import resorce4 from "../../assets/static-data-apis/header/media-files/singlePageData/resources/Crital-Patch-Updates.png"
import industries1 from "../../assets/static-data-apis/header/media-files/singlePageData/industries/industries/automotive.png"
import industries2 from "../../assets/static-data-apis/header/media-files/singlePageData/industries/industries/car_1967877.png"
import industries3 from "../../assets/static-data-apis/header/media-files/singlePageData/industries/industries/communications.png"
// import './styles.css';
import "./index.css"

/*
<nav class="navbar navbar-expand-lg navbar-light bg-light">
 <a class="navbar-brand" href="#/">Navbar</a>
 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
   <span class="navbar-toggler-icon"></span>
 </button>
 <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
   <div class="navbar-nav">
     <a class="nav-link active" href="#/">
       Home
       <span class="sr-only">(current)</span>
     </a>
     <a class="nav-link" href="#/careers">Features</a>
     <a class="nav-link" href="#/overview">Pricing</a>
     <a class="nav-link disabled" href="#/" tabindex="-1" aria-disabled="true">Disabled</a>
   </div>
 </div>
</nav> */

// const initialData = [
//   { id: 11, img: assur, heading: "Overview", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 11, img: over, heading: "Assurance", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 11, img: adult, heading: "Audit", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 12, img: adult, heading: "Strategy, Analytics & M&A", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 12, img: adult, heading: "Core Business Operations", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 12, img: adult, heading: "Enterprise, Technology & Performance", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 12, img: adult, heading: "Customer & Marketing", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 12, img: adult, heading: "Human Capital", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 13, img: adult, heading: "Mergers & Acquisitions", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 13, img: adult, heading: "Forensic", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 13, img: adult, heading: "Infrastructure & Economic Advisoryt", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 14, img: adult, heading: "Accounting & Internal Controls", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 14, img: adult, heading: "Regulatory & Legal", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 14, img: adult, heading: "Cyber & Strategic Risk", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 14, img: adult, heading: "Sustainability & Climate", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 15, img: adult, heading: "Legal Advisory Services", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 15, img: adult, heading: "Legal Management Consulting", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 15, img: adult, heading: "Legal Managed Services", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Tax Transformation", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Outsourced Compliance", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Mobility, Payroll & Immigration", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Workforce, Technology & Analytics", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Advisory & Transactions", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Technology Consulting", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Rewards, Employment Tax & Share Plans", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 16, img: adult, heading: "Sustainability & Climate", paragraph:"Bring the power of generative AI directly into your own platform with our API."},
//   { id: 2, name: 'Alice', age: 30 },
//   { id: 3, name: 'Bob', age: 22 },
  
// ];

const Header = () => {
  const [isOpen71, setIsOpen71] = useState(false);
  const [isOpen72, setIsOpen72] = useState(false);
  const [isOpen73, setIsOpen73] = useState(false);
  const [isOpen74, setIsOpen74] = useState(false);
  const [isOpen75, setIsOpen75] = useState(false);
  const [isOpen76, setIsOpen76] = useState(true);
  const [isOpen901, setIsOpen901] = useState(false);
  const [isOpen902, setIsOpen902] = useState(false);
  const [isOpen903, setIsOpen903] = useState(false);
  const [isOpen904, setIsOpen904] = useState(false);
  const [isOpen905, setIsOpen905] = useState(false);
  const [isOpen761, setIsOpen761] = useState(true);
  const [isOpen762, setIsOpen762] = useState(false);
  const [isOpen763, setIsOpen763] = useState(false);
  const [isOpen764, setIsOpen764] = useState(true);
  const [isOpen765, setIsOpen765] = useState(false);
  const [isOpen766, setIsOpen766] = useState(false);
  const [isOpen767, setIsOpen767] = useState(false);
  const [isOpen768, setIsOpen768] = useState(false);
  const [isOpen981, setIsOpen981] = useState(true);
  const [isOpen982, setIsOpen982] = useState(false);
  const [isOpen983, setIsOpen983] = useState(false);
  const [isOpen984, setIsOpen984] = useState(false);
  const [isOpen985, setIsOpen985] = useState(true);
  const [isOpen986, setIsOpen986] = useState(false);
  const [isOpen987, setIsOpen987] = useState(false);
  const [isOpen988, setIsOpen988] = useState(false);
  // const [data2, setData] = useState(initialData);
  // const [filter2, setFilter2] = useState('');

  // const filteredData = initialData.filter(item =>
  //   item.name.toLowerCase().includes(filter2.toLowerCase())
  // );

  // console.log(filteredData)

  // const handleFilterChange = event => {
  //   setFilter2(event.target.value);
  // };


  const handleMouseEnter71 = () => {
    setIsOpen75(false);
    setIsOpen72(false);
    setIsOpen73(false);
    setIsOpen74(false);
    setIsOpen71(true);
  };

  const handleMouseLeave71 = () => {
    setIsOpen71(false);
  };

  const handleMouseEnter72 = () => {
    setIsOpen71(false);
    setIsOpen75(false);
    setIsOpen73(false);
    setIsOpen74(false);
    setIsOpen72(true);
  };

  const handleMouseLeave72 = () => {
    setIsOpen72(false);
  };

  const handleMouseEnter73 = () => {
    setIsOpen71(false);
    setIsOpen72(false);
    setIsOpen75(false);
    setIsOpen74(false);
    setIsOpen73(true);
  };

  const handleMouseLeave73 = () => {
    setIsOpen73(false);
  };

  const handleMouseEnter74 = () => {
    setIsOpen71(false);
    setIsOpen72(false);
    setIsOpen73(false);
    setIsOpen75(false);
    setIsOpen74(true);
  };

  const handleMouseLeave74 = () => {
    setIsOpen74(false);
  };

  const handleMouseEnter75 = () => {
    setIsOpen71(false);
    setIsOpen72(false);
    setIsOpen73(false);
    setIsOpen74(false);
    setIsOpen75(true);
  };

  const handleMouseLeave75 = () => {
    setIsOpen75(false);
  };

  const handleMouseEnter76 = () => {
    setIsOpen76(true);
    
  };

  const handleMouseLeave76 = () => {
    setIsOpen76(false);
  };

  const handleMouseEnter901 = () => {
    setIsOpen901(true);
    
  };

  const handleMouseLeave901 = () => {
    setIsOpen901(false);
  };

  const handleMouseEnter902 = () => {
    setIsOpen902(true);
    
  };

  const handleMouseLeave902 = () => {
    setIsOpen902(false);
  };

  const handleMouseEnter903 = () => {
    setIsOpen903(true);
    
  };

  const handleMouseLeave903 = () => {
    setIsOpen903(false);
  };

  const handleMouseEnter904 = () => {
    setIsOpen904(true);
    
  };

  const handleMouseLeave904 = () => {
    setIsOpen904(false);
  };


  const handleMouseEnter905 = () => {
    setIsOpen905(true);
    
  };

  const handleMouseLeave905 = () => {
    setIsOpen905(false);
  };

  const handleMouseEnter761 = () => {
    setIsOpen761(true);
    
  };

  const handleMouseLeave761 = () => {
    setIsOpen761(false);
  };

  const handleMouseEnter762 = () => {
    setIsOpen762(true);
    
  };

  const handleMouseLeave762 = () => {
    setIsOpen762(false);
  };

  const handleMouseEnter763 = () => {
    setIsOpen763(true);
    
  };

  const handleMouseLeave763 = () => {
    setIsOpen763(false);
  };

  const handleMouseEnter764 = () => {
    setIsOpen764(true);
    
  };

  const handleMouseLeave764 = () => {
    setIsOpen764(false);
  };

  const handleMouseEnter765 = () => {
    setIsOpen765(true);
    
  };

  const handleMouseLeave765 = () => {
    setIsOpen765(false);
  };

  const handleMouseEnter766 = () => {
    setIsOpen766(true);
    
  };

  const handleMouseLeave766 = () => {
    setIsOpen766(false);
  };

  const handleMouseEnter767 = () => {
    setIsOpen767(true);
    
  };

  const handleMouseLeave767 = () => {
    setIsOpen767(false);
  };

  const handleMouseEnter768 = () => {
    setIsOpen768(true);
    
  };

  const handleMouseLeave768 = () => {
    setIsOpen768(false);
  };

  const handleMouseEnter981 = () => {
    setIsOpen981(true);
    
  };

  const handleMouseLeave981 = () => {
    setIsOpen981(false);
  };

  const handleMouseEnter982 = () => {
    setIsOpen982(true);
    
  };

  const handleMouseLeave982 = () => {
    setIsOpen982(false);
  };

  const handleMouseEnter983 = () => {
    setIsOpen983(true);
    
  };

  const handleMouseLeave983 = () => {
    setIsOpen983(false);
  };

  const handleMouseEnter984 = () => {
    setIsOpen984(true);
    
  };

  const handleMouseLeave984 = () => {
    setIsOpen984(false);
  };

  const handleMouseEnter985 = () => {
    setIsOpen985(true);
    
  };

  const handleMouseLeave985 = () => {
    setIsOpen985(false);
  };

  const handleMouseEnter986 = () => {
    setIsOpen986(true);
    
  };

  const handleMouseLeave986 = () => {
    setIsOpen986(false);
  };

  const handleMouseEnter987 = () => {
    setIsOpen987(true);
    
  };

  const handleMouseLeave987 = () => {
    setIsOpen987(false);
  };

  const handleMouseEnter988 = () => {
    setIsOpen988(true);
    
  };

  const handleMouseLeave988 = () => {
    setIsOpen988(false);
  };

  const underLine1 = isOpen71 ? "nav-buttons2" :"nav-buttons" 
  const underLine2 = isOpen72 ? "nav-buttons2" :"nav-buttons" 
  const underLine3 = isOpen73 ? "nav-buttons2" :"nav-buttons" 
  const underLine4 = isOpen74 ? "nav-buttons2" :"nav-buttons" 
  const underLine5 = isOpen75 ? "nav-buttons2" :"nav-buttons" 

  return(
  <div>
  <section className="header-section w-100 fixed-top">
  <div className="nav-outer">
    <Link to="/" className="dec"><h1 className="proxima-nova">Yexponent<p className="doct">o</p></h1></Link>
    </div>
    <div className="nav-outer">
      <div className="dropdown" onMouseEnter={handleMouseEnter71}>
        <button type="button" className = {underLine1}>Services {isOpen71 ? <MdKeyboardArrowUp />:<BiChevronDown />}</button>
        {isOpen71 && (
        <div className="dropdown-content" id="on-over-drop" onMouseLeave={handleMouseLeave71}>
         <div>
          <div className="left">
          <h1 className="sub-head">Services</h1>
          <div className="small-header-container">
          <div className={isOpen76 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter76} onMouseLeave={handleMouseLeave76} id = {11}  ><p className={isOpen76 ? "sub-para2":"sub-para"}>Audit & Assurance</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen901 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter901} onMouseLeave={handleMouseLeave901} ><p className={isOpen901 ? "sub-para2":"sub-para"} >Consulting</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen902 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter902} onMouseLeave={handleMouseLeave902}><p className={isOpen902 ? "sub-para2":"sub-para"}>Financial Advisory</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen903 ? "row-sub2":"row-sub"} onMouseEnter={handleMouseEnter903} onMouseLeave={handleMouseLeave903}><p className={isOpen903 ? "sub-para2":"sub-para"}>Risk Advisory</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen904 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter904} onMouseLeave={handleMouseLeave904}><p className={isOpen904 ? "sub-para2":"sub-para"}>Legal</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen905? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter905} onMouseLeave={handleMouseLeave905}><p className={isOpen905 ? "sub-para2":"sub-para"}>Tax</p><BiChevronRight className="logo88"/></div>
          </div>
          <hr />
          <button className="btn7">Contacts Sales</button>
          </div>
              </div>
              <p className='sr-line'/>
              <div className="bg">
                <Link to="/overview" className="dec">
                  <div className="ser-con">
                      <img src={over} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Overview</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      </Link>
                      <div className="ser-con">
                      <img src={assur} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Assurance</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={adult} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                     
                    </div>
              </div>
      )}
    </div>
    <div className="dropdown" onMouseEnter={handleMouseEnter72}>
        <button type="button" className = {underLine2}>Products {isOpen72 ? <MdKeyboardArrowUp />:<BiChevronDown />}</button>
        {isOpen72 && (
        <div className="dropdown-content1" id="on-over-drop" onMouseLeave={handleMouseLeave72}>
         <div>
          <div className="left">
          <h1 className="sub-head">Products</h1>
          <div className={isOpen761 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter761} onMouseLeave={handleMouseLeave761}><p className={isOpen761 ? "sub-para2":"sub-para"}>Cloud Infrastructure</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen762 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter762} onMouseLeave={handleMouseLeave762}><p className={isOpen762 ? "sub-para2":"sub-para"}>Cloud Applications</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen763 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter763} onMouseLeave={handleMouseLeave763}><p className={isOpen763 ? "sub-para2":"sub-para"}>Hardware and Software</p><BiChevronRight className="logo88"/></div>
          <hr />
          <button className="btn7">Contacts Sales</button>
          </div>
              </div>
              <p className='sr-line'/>
              <div className="bg mt-5">
                <Link to="/overview" className="dec">
                  <div className="ser-con">
                      <img src={could1} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Overview</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      </Link>
                      <div className="ser-con">
                      <img src={could2} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Assurance</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={could3} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={could4} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={could5} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={could6} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                    </div>
              </div>
      )}
    </div>
    <div className="dropdown" onMouseEnter={handleMouseEnter73}>
        <button type="button" className = {underLine3}>Resources {isOpen73 ? <MdKeyboardArrowUp />:<BiChevronDown />}</button>
        {isOpen73 && (
        <div className="dropdown-content2" id="on-over-drop" onMouseLeave={handleMouseLeave73}>
         <div>
          <div className="left">
          <h1 className="sub-head">Resources</h1>
          <div className="small-header-container">
          <div className={isOpen764 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter764} onMouseLeave={handleMouseLeave764}><p className={isOpen764 ? "sub-para2":"sub-para"}>Support</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen765 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter765} onMouseLeave={handleMouseLeave765}><p className={isOpen765 ? "sub-para2":"sub-para"}>Services</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen766 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter766} onMouseLeave={handleMouseLeave766}><p className={isOpen766 ? "sub-para2":"sub-para"}>Help Center</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen767 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter767} onMouseLeave={handleMouseLeave767}><p className={isOpen767 ? "sub-para2":"sub-para"}>Downloads</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen768 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter768} onMouseLeave={handleMouseLeave768}><p className={isOpen768 ? "sub-para2":"sub-para"}>Working with Us</p><BiChevronRight className="logo88"/></div>
          </div>
          <hr />
          <button className="btn7">Contacts Sales</button>
          </div>
              </div>
              <p className='sr-line'/>
              <div className="bg">
                <Link to="/overview" className="dec">
                  <div className="ser-con">
                      <img src={resorce1} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Overview</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      </Link>
                      <div className="ser-con">
                      <img src={resorce2} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Assurance</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={resorce3} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={resorce4} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                     
                    </div>
              </div>
      )}
    </div>
    <div className="dropdown" onMouseEnter={handleMouseEnter74}>
        <button type="button" className = {underLine4}>Industries {isOpen74 ? <MdKeyboardArrowUp />:<BiChevronDown />}</button>
        {isOpen74 && (
        <div className="dropdown-content3" id="on-over-drop" onMouseLeave={handleMouseLeave74}>
         <div>
          <div className="left">
          <h1 className="sub-head">Industries</h1>
          <div className={isOpen981 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter981} onMouseLeave={handleMouseLeave981}><p className={isOpen981 ? "sub-para2":"sub-para"}>Audit & Assurance</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen982 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter982} onMouseLeave={handleMouseLeave982}><p className={isOpen982 ? "sub-para2":"sub-para"}>Consulting</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen983 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter983} onMouseLeave={handleMouseLeave983}><p className={isOpen983 ? "sub-para2":"sub-para"}>Financial Advisory</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen984 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter984} onMouseLeave={handleMouseLeave984}><p className={isOpen984 ? "sub-para2":"sub-para"}>Risk Advisory</p><BiChevronRight className="logo88"/></div>
          <hr />
          <button className="btn7">Contacts Sales</button>
          </div>
              </div>
              <p className='sr-line'/>
              <div className="bg">
                <Link to="/overview" className="dec">
                  <div className="ser-con">
                      <img src={industries1} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Overview</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      </Link>
                      <div className="ser-con">
                      <img src={industries2} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Assurance</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={industries3} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Audit</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                     
                    </div>
              </div>
      )}
    </div>
    <div className="dropdown" onMouseEnter={handleMouseEnter75}>
        <button type="button" className = {underLine5}>Why Yexponent {isOpen75 ? <MdKeyboardArrowUp />:<BiChevronDown />}</button>
        {isOpen75 && (
        <div className="dropdown-content4" id="on-over-drop" onMouseLeave={handleMouseLeave75}>
         <div>
          <div className="left">
          <h1 className="sub-head2">Why Yexponent</h1>
          <div className={isOpen985 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter985} onMouseLeave={handleMouseLeave985}><p className={isOpen985 ? "sub-para2":"sub-para"}>Audit & Assurance</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen986 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter986} onMouseLeave={handleMouseLeave986}><p className={isOpen986 ? "sub-para2":"sub-para"}>Consulting</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen987 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter987} onMouseLeave={handleMouseLeave987}><p className={isOpen987 ? "sub-para2":"sub-para"}>Financial Advisory</p><BiChevronRight className="logo88"/></div>
          <div className={isOpen988 ? "row-sub2":"row-sub"}  onMouseEnter={handleMouseEnter988} onMouseLeave={handleMouseLeave988}><p className={isOpen988 ? "sub-para2":"sub-para"}>Risk Advisory</p><BiChevronRight className="logo88"/></div>
          <hr />
          <button className="btn7">Contacts Sales</button>
          </div>
              </div>
              <p className='sr-line'/>
              <div className="bg">
                <Link to="/overview" className="dec">
                  <div className="ser-con">
                      <img src={y} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">What is Yexponent?</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      </Link>
                      <div className="ser-con">
                      <img src={y} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">One of the largest global networks</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={y} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">How Yexponent continues to innovate</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                      <div className="ser-con">
                      <img src={y} alt="" className="img55" />
                      <div>
                      <h1 className="header-sub-head">Yexponent is a trusted partner to millions</h1>
                      <p className="header-sub-para">Bring the power of generative AI directly into your own platform with our API.</p>
                      </div>
                      </div>
                     
                    </div>
              </div>
      )}
    </div>
        <Link to="/careers" className="dec"><button type="button" className="nav-buttons">Careers <BiChevronDown  /></button></Link>
    </div>
    <div className="right d-flex align-items-center justify-content-end book-container">
    <Link to="/book-a-call"><button type="button" className="book-button">Book a call</button></Link>
    </div>
    </section>
<Navbar bg="light" expand="lg" className="nav d-flex d-lg-none fixed-top">
<Navbar.Brand href="#home"> <div className="nav-outer">
    <Link to="/" className="dec"><h1 className="proxima-nova">Yexponent<p className="doct">o</p></h1></Link>
    </div></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav bg-white" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="header-color">
          <Nav.Link href="#home">Services </Nav.Link>
          <NavDropdown title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">Action 3</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#home">Resources</Nav.Link>
          <Nav.Link href="#about">Industries</Nav.Link>
          <Nav.Link href="#home">Why Yexponent</Nav.Link>
          <Link to="/careers" className="dec"><Nav.Link href="#home">Careers</Nav.Link></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
)
        }

export default Header