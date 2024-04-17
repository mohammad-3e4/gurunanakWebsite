import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Mnav from './Components/Mnav';
import Principal from './Components/Pages/Principal';
import Gallery from './Components/Main/Gallery';
import Books from './Components/Pages/Academics/Books';
import Result from './Components/Pages/Academics/Result';
import Syllabus from './Components/Pages/Academics/Syllabus';
import Admissionform from './Components/Pages/Admission/Admissionform';
import Management from './Components/Pages/Management/Management';
import Message from './Components/Pages/Management/Messages';
import Society from './Components/Pages/Management/Society';
import Notice from './Components/Pages/Recruitment/Notice';
import Recruitment from './Components/Pages/Recruitment/Recruitment';
import Achievements from './Components/Pages/School/Achievements';
import TCertificate from './Components/Pages/Admission/TCertificate';
import Fee from './Components/Pages/Admission/Fee';
import Faculty from './Components/Pages/School/Faculty';
import LabFac from './Components/Pages/School/LabFac';
import News from './Components/Pages/News';
import OurAbout from './Components/Pages/School/Ourabout';
import Salient from './Components/Pages/School/Salient';
import Strength from './Components/Pages/School/Strength';
import Main from './Components/Main/Main';
import OurCertificate from './Components/Pages/School/OurCertificate';
import IconsProps from './Components/IconProps';
import SchoolDisclosure from './Components/Pages/School/SchoolDisclosure';
import SchoolAffiliation from './Components/Pages/School/SchoolAffiliation';
import Timetable from './Components/Pages/Academics/TimeTable';
import AdminPageLayout from './Components/Admin/AdminPageLayout';
import UploadFile from './Components/Admin/UploadFile';
import UploadImage from './Components/Admin/UploadImage';
import UploadVideo from './Components/Admin/UploadVideo';
import Video from './Components/Pages/School/Video';
import UploadActivity from './Components/Admin/UploadActivity';
import OurActivity from './Components/Pages/School/OurActivity';
import SignUp from './Components/Admin/SignUp';
import LogIn from './Components/Admin/LogIn';
import Donate from './Components/Main/Donate';
import AddNotification from './Components/Admin/AddNotification';
import Notification from './Components/Notification';
import Addhighlight from './Components/Admin/AddHighlight';
import HomeActivity from './Components/Main/HomeActivity';
import AdminPage from './Components/Admin/AdminPage';
import UploadResult from './Components/Admin/UploadResult';
import UploadCertifiacte from './Components/Admin/UploadCertificate';
import UploadForm from './Components/Admin/UploadForm';
import UploadCarousel from './Components/Admin/UploadCarousel';
import Addsmc from './Components/Admin/Addsmc';
import Addpta from './Components/Admin/Addpta';
import DeleteNews from './Components/Admin/AdminNews';
import AdminAdmission from './Components/Admin/AdminAdmission';
import AdminGallery from './Components/Admin/AdminGallery';
import AdminVideo from './Components/Admin/AdminVideo';
import AdminActivity from './Components/Admin/AdminActivity';
import DeleteManagement from './Components/Admin/DeleteManagement';
import FacultySalary from './Components/Admin/FacultySalary';
import FacultyJoining from './Components/Admin/FacultyJoining';
import DeleteStaff from './Components/Admin/DeleteStaff';
import Payment from './Payment';


function App() {
  return (

    <BrowserRouter>

      <Mnav />
      <IconsProps />
      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/principal_desk" element={<Principal />} />
        <Route path="/news_updates" element={<News />} />
        <Route path="/books" element={<Books />} />
        <Route path="/result" element={<Result />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/admission_form" element={<Admissionform />} />
        <Route path="/fee_structure" element={<Fee />} />
        <Route path="/transfer_certificate" element={<TCertificate />} />
        <Route path="/committee" element={<Management />} />
        <Route path="/messages" element={<Message />} />
        <Route path="/society" element={<Society />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/form" element={<Recruitment />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/lab_fac" element={<LabFac />} />
        <Route path="/about_School" element={<OurAbout />} />
        <Route path="/homeactivity" element={<HomeActivity />} />
        <Route path="/salient_features" element={<Salient />} />
        <Route path="/student_strength" element={<Strength />} />
        <Route path="/our_certificates" element={<OurCertificate />} />
        <Route path="/school_affiliation" element={<SchoolAffiliation />} />
        <Route path="/school_disclosure" element={<SchoolDisclosure />} />
        <Route path="/time_table" element={<Timetable />} />
        <Route path="/admin" element={<AdminPageLayout />} />
        <Route path="/uploadfile" element={<UploadFile />} />
        <Route path="/uploadimage" element={<UploadImage />} />
        <Route path="/uploadvideo" element={<UploadVideo />} />
        <Route path="/our_video" element={<Video />} />
        <Route path="/uploadactivity" element={<UploadActivity />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activities" element={<OurActivity />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/addnotification" element={<AddNotification />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/addhighlight" element={<Addhighlight />} />
        <Route path="/adminpage" element={<AdminPage />} />
        <Route path="/uploadresult" element={<UploadResult />} />
        <Route path="/uploadcertificate" element={<UploadCertifiacte />} />
        <Route path="/uploadform" element={<UploadForm />} />
        <Route path="/uploadcarousel" element={<UploadCarousel />} />
        <Route path="/addsmc" element={<Addsmc/>} />
        <Route path="/addpta" element={<Addpta/>} />
        <Route path="/deletenews" element={<DeleteNews/>} />
        <Route path="/adminadmission" element={<AdminAdmission/>} />
        <Route path="/deleteimage" element={<AdminGallery/>} />
        <Route path="/adminvideo" element={<AdminVideo/>} />
        <Route path="/adminactivity" element={<AdminActivity/>} />
        <Route path="/delete_mangement" element={<DeleteManagement/>} />     
        <Route path='/facultysalary' element={<FacultySalary/>} /> 
        <Route path='/facultyjoining' element={<FacultyJoining/>} /> 
        <Route path='/deletestaff' element={<DeleteStaff/>} /> 
        <Route path='/payment' element={<Payment/>} /> 





      </Routes>
      <Footer />
      

    </BrowserRouter>
  );
}

export default App;
