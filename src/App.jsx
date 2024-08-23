import { Routes, Route } from 'react-router-dom';
import SignIn from './Signin/Login';
import ForgotP from './Signin/Forgot_pass';
import Register from './Signup/Register';
import HeroSection from './Components/heroSection/HeroSection';
import Footer from './Components/Footer_v1/Footer';
import Home from './Pages/Home';
import Element_1 from './Components/Element_1/Element_1';
import Message from './Components/Message/Message';
import Calender from './Components/Calender/Calender';
import About_us from './Pages/About_us';
import Membership from './Pages/Membership';
import Events_page from './Pages/Events_page';
import Events from './Components/Events/Events';
import New_Pass from './Signin/New_pass';
import My_Account from './Pages/My_Account';
import Contact_Us from './Pages/Contact_Us';
import Agenda from './Pages/Agenda';
import Member_id from './Components/Popups/Member_id';
import Vclub from './Pages/voulenter_club_page'
import Vol_Form from './Pages/Vol_Form';
import Vclub_form_suceess from './Components/Vclubform/vclub_form_success';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<About_us/>}/>
      <Route path="/membership" element={<Membership/>}/>
      <Route path='/events' element={<Events_page/>}/>
      <Route path='/events_comp' element={<Events/>}/>
      <Route path="/myaccount" element={<My_Account/>}/>
      <Route path='/memberid' element={<Member_id/>}/>
      <Route path="/contactus" element={<Contact_Us/>}/>
      <Route path="/agenda" element={<Agenda/>}/>
      <Route path="/login" element={ <SignIn/> } />
      <Route path="/forgotpassword" element={<ForgotP/>}/>
      <Route path="/newpass" element={<New_Pass/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/herosection" element={<HeroSection/>}/>    
      <Route path="/footer" element={<Footer/>}/> 
      <Route path="/firstelement" element={<Element_1/>}/> 
      <Route path="/message" element={<Message/>}/> 
      <Route path='/cal' element={<Calender/>}/>
      <Route path='/vclub' element={<Vclub/>}/>
      <Route path='/vform' element={<Vol_Form/>}/>
      <Route path='/vsuccess' element={<Vclub_form_suceess/>}/>
    </Routes>
  );
}

export default App;
