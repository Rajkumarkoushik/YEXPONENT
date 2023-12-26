
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"
import Header from "./components/Header"
import Careers from "./components/Careers"
import OverView from "./components/OverView"
import BookACall from "./components/BookACall" 
import Home from "./components/home"
import Footer from "./components/Footer"
import Login from "./components/login";
import LoginBussines from "./components/loginbussines"
import LoginMarking from "./components/loginmarking"
import FormData from "./components/formdata"

const App = () => (
   <div>
      <BrowserRouter>
         <Header />
         <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/careers" element={<Careers />} />
            <Route exact path="/overview" element={<OverView />} />
            <Route exact path="/book-a-call" element={<BookACall />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/loginbussines" element={<LoginBussines />} />
            <Route exact path="/loginmarking" element={<LoginMarking />} />
            <Route exact path="/formdata" element={<FormData />} />
         </Routes>
         <Footer />
      </BrowserRouter>
   </div>
)

export default App;

