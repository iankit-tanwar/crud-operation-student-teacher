
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CreateStudent from './pages/createstudent/CreateStudent';
import CreateTeacher from './pages/createteacher/CreateTeacher';
import Home from './pages/Home'


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/student/create' element={<CreateStudent />}></Route>

    <Route path='/teacher/create' element={<CreateTeacher />}></Route>



    </Routes>
    
    
    
    
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
