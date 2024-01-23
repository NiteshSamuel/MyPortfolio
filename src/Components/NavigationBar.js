import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from 'react';
import '../Components/NavBar.css';


export const NavigationBar=()=> {
    const [activeLink, setActiveLink]=useState('home');
    const [scorlled, setScrolled]=useState(false);

    useEffect(()=>{
     const onScoll= ()=>{
        if(window.scrollY>50){
            setScrolled(true);
        }else{
            setScrolled(false);

        }
     } 
       window.addEventListener("scroll",onScoll);
       return ()=> window.removeEventListener("scroll",onScoll);
    },[])

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={"cssCheck"}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggle-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink=== 'home' ? 'actvie navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink=== 'skills' ? 'actvie navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink=== 'projects' ? 'actvie navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>#Projects</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img scr={''} alt=""/></a>
                <a href="#"><img scr={''} alt=""/></a>
                <a href="#"><img scr={''} alt=""/></a>

            </div>
            <button className="vvd" onClick={()=> console.log("button click")}> <span> Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

