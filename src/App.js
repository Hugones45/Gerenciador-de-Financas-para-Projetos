import {Routes, Route} from 'react-router-dom'
import Company from './components/pages/Company';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects';


import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer'
import Project from './components/pages/Project';



function App() {
  return (
   <>
   <NavBar/>
    <Container customClass='min-height'>
<Routes>  
 <Route path='/' element={<Home/>}/>
 <Route path ='/projects' element={<Projects/>}/>
 <Route path ='/company' element={<Company/>}/>
 <Route path='/contact' element={<Contact/>}/>
 <Route path='/newproject' element={<NewProject/>}/>
 <Route path='/project/:id' element={<Project/>}/>
</Routes>
</Container>
<Footer/>
</>
  );
}

export default App;
