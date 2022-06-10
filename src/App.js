import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import ProjectDetails from './Pages/ProjectDetails';
import Projects from './Pages/Projects';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/details/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
