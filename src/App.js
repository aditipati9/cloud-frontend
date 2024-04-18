import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard,Login,Signup,HomeParent,Redirect,ChildrenData,HomeAdmin,HomeHospital,HospitalData,AdminChildrenData,ParentProfile,HospitalProfile } from './components';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/redirect' element={<Redirect/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/signup' element={<Signup/>}/> */}
      {/* <Route path='/homeParent' element={<HomeParent/>}/> */}
      <Route path='/homeParent' element={<ChildrenData/>}/>
      {/* <Route path='/homeAdmin' element={<HomeAdmin/>}/>
      <Route path='/homeHospital' element={<HomeHospital/>}/>
      <Route path='/hospitalData' element={<HospitalData/>}/>
      <Route path='/adminChildrenData' element={<AdminChildrenData/>}/>
      <Route path='/parentProfile' element={<ParentProfile/>}/>
      <Route path='/hospitalProfile' element={<HospitalProfile/>}/> */}
    </Routes>
    </>
  );
}

export default App;