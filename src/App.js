import Login from "./Login";
import Signup from "./Signup";
import NewProfile from "./NewProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Validations from "./Validations";
import Forgetpsd from "./Forgetpsd";
import Resetpsd from "./Resetpsd";
import Createacc from "./Createacc";
import Emailsuc from "./Emailsuc";
import Popups from "./Popups";
import Role from "./Role";
import Svgprac from "./Svgprac";
import EmailVer from "./EmailVer";
import Recrutiment from "./Recrutiment";
import RecrutimentPos from "./RecrutimentPos";
import Recpublish from "./Recpublish";
import Offercandidate from "./Offercandidate";
import Candidate from "./Candidate";
import Rejectedcandidate from "./Rejectedcandidate";
import Commonnavbar from "./Commonnavbar";
import UploadData from "./UploadData";
import Socialdata from "./Socialdata";
import Selecting from "./Selecting";
import Evaluate from "./Evaluate";
import Comment from "./Comment";
import Activity from "./Activity";
import EmailTemplate from "./EmailTemplate";
import EmailReject from "./EmailReject";
import EmailOffer from "./EmailOffer";
import UploadCv from "./UploadCv";
import DeleteCv from "./DeleteCv";
import NewTag from "./NewTag";
import Edit from "./Edit";
import Newsou from "./Newsou";
import Deletes from "./Deletes";
import Editsta from "./Editsta";
import Deletesta from "./Deletesta";
import Newstage from "./Newstage";
import Resume from "./Resume";
import Add from "./Add";
import Hire from "./Hire";
import Recrutmentmain from "./Recrutmentmain";
import Dashboard from "./Dashboard";
import Content from './Content'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/validations" element={<Validations />} />
          <Route path="/Forgetpsd" element={<Forgetpsd />} />
          <Route path="/Resetpsd" element={<Resetpsd />} />
          <Route path="/Createacc" element={<Createacc />} />
          <Route path="/Emailsuc" element={<Emailsuc />} />
          <Route path="/Popups" element={<Popups />} />
          <Route path="/Role" element={<Role />} />
          <Route path="/EmailVer" element={<EmailVer />} />
          <Route path="/Recrutiment" element={<Recrutiment />} />
          <Route path="/RecrutimentPos" element={<RecrutimentPos />} />
          <Route path="/Publish" element={<Recpublish />} />
          <Route path="/Recrutiment" element={<Recrutiment />} />
          <Route path="/RecrutimentPos" element={<RecrutimentPos />} />
          <Route path="/Dashboard" element={<Content/>}/>
          <Route path="/Recrutimentmain" element={<Recrutmentmain />} />
          <Route path="/offer" element={<Offercandidate />} />
          <Route path="/Rejected" element={<Rejectedcandidate />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Newprofile" element={<NewProfile />} />
          <Route path="/common" element={<Commonnavbar />} />
          <Route path="/Evaluate" element={<Evaluate />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Activity" element={<Activity />} />
          <Route path="/Candidate" element={<Candidate />} />
          <Route path="/upload" element={<UploadData />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Hire" element={<Hire />} />
          <Route path="/edits" element={<Editsta />} />
          <Route path="/deletes" element={<Deletes />} />
          <Route path="/newstage" element={<Newstage />} />
          <Route path="/Tag" element={<Socialdata />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/deletesta" element={<Deletesta />} />
          <Route path="/news" element={<Newsou />} />
          <Route path="/Source" element={<Selecting />} />
          <Route path="/Edittag" element={<UploadCv />} />
          <Route path="/deletetag" element={<DeleteCv />} />
          <Route path="/newcv" element={<NewTag />} />
          <Route path="/EmailTemplate" element={<EmailTemplate />} />
          <Route path="/EmailRejection" element={<EmailOffer />} />
          <Route path="/EmailOffer" element={<EmailReject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
