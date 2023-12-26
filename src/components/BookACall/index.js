
// import {HiChevronDoubleDown} from "react-icons/hi"
// import {BiSolidChevronLeft} from "react-icons/bi"
// import {BiSolidChevronRight} from "react-icons/bi"
import {Link} from "react-router-dom"
import 'animate.css';
import "./index.css"

/* 
 <div className="Book-container">
        <h1 className="book-heading">Book a 15-Minute Discovery Call with a Launch Expert.</h1>
        <hr className="hr-line"/>
        <p className="book-para">If you're a business coach generating atleast 10k/month, then you might just be a few strategies, tactis and best practises away from your first 10,000 launch.</p>
        <p class="animate__animated animate__fadeInUp animate__infinite"><HiChevronDoubleDown className="color" /></p>
        <div className="sel-container">
            <div className="mini-container">
               <p>hello</p>
        </div>
     </div>
    </div>

<div className="row30">
<p className="circle-btn">1</p>
<h1 className="cho-heading">Choose Appointment</h1>
</div>
<div className="choose-con">
<h1 className="cho-heading43">YOUR TIME ZONE</h1>
<select className="select">
    <option>Kakinada</option>
    <option>(GMT-11:00) Midway</option>
</select>
<div className="row88 m-3">
    <div className="row3">
       <BiSolidChevronLeft className="color21 mr-0"/>
       <p className="text ml-0">Previous</p>
    </div>
    <div className="row4">
        <p className="text">Next</p>
        <BiSolidChevronRight className="color21" />
    </div>
</div>
</div>
</div>
<div className="mini-container2">
<div className="row30">
    <p className="circle-btn">2</p>
    <h1 className="cho-heading">Your Information</h1>
</div>
</div>
<div className="mini-container2">
<div className="row30">
    <p className="circle-btn">3</p>
    <h1 className="cho-heading">Confirmation</h1>
</div>
</div> */

const BookACall = () => (
    <div className='book-a-container'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='login-container'>
                <div className='col-12 col-md-5'>
                <h1 className='login-heading'>yexponent is build to create the top business</h1>
                <p className='login-paragraph'>We'll no ask you a few questions (~15 secs). this will give you clarity on if yexponent is the right fit for professional goals. this Applications proccess has helped us fing our first 2200+ members from ~25000 Applications in the last 3 yeas.</p>
                <Link to="/login" ><button type="button" className='login-button'>let's go</button></Link>
                </div>
            </div>
          </div>
        </div>
    </div>
)

export default BookACall