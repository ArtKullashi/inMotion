import React,{ useState, useLayoutEffect }from 'react';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import Footer from './Components/footer/Footer';
import ScrollButton from './Components/ScrollButton';
import Sidedrawer from "./Components/header/Sidedrawer";
import Backdrop from "./Components/header/Backdrop";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    let phone=false;
    if(size[0]<1185){
        phone=true;
    }
    const headerToFocus = React.createRef();
    const aboutToFocus = React.createRef();
    const servicesToFocus = React.createRef();
    const contactToFocus = React.createRef();

  function drawerToggleHandler() {
    setSideDrawerOpen(prevsideDrawerOpen =>!prevsideDrawerOpen)
  };

  function scrollToServices(event){
    if(servicesToFocus.current){
           servicesToFocus.current.scrollIntoView({ 
           behavior: "smooth", 
           block: phone ? "start" : "center"
        });
    };
    if(sideDrawerOpen){
      setSideDrawerOpen(false);
    };
 };

 function scrollToAbout(event){
  if(aboutToFocus.current){
         aboutToFocus.current.scrollIntoView({ 
         behavior: "smooth", 
         block: "center"
      });
  };
  if(sideDrawerOpen){
    setSideDrawerOpen(false)
  };
};

function scrollToContact(event){
  if(contactToFocus.current){
         contactToFocus.current.scrollIntoView({ 
         behavior: "smooth", 
         block: "center"
      });
  };
  if(sideDrawerOpen){
    setSideDrawerOpen(false)
  };
};

 function scrollToTop(event){
    if(headerToFocus.current){
          headerToFocus.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "end"
        })
    }
    if(sideDrawerOpen){
      setSideDrawerOpen(false);
    }; 
 }

  let backdrop;
    
  if(sideDrawerOpen){
    backdrop= <Backdrop drawerToggle={drawerToggleHandler}/>
      
  }

  return (
    <div id="container">
      <Sidedrawer handleOnClick={scrollToServices}
      scrollToTop={scrollToTop}
      scrollToAbout={scrollToAbout}
      scrollToContact={scrollToContact}
      show={sideDrawerOpen}
      />

      {backdrop}

      <Header handleOnClick={scrollToServices}
        myDiv={headerToFocus}
        scrollToTop={scrollToTop}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
        drawerToggle={drawerToggleHandler}
        hamburgerClick={sideDrawerOpen}
        phone={phone}
        />

      <Main phone={phone} focusServices={servicesToFocus} focusAbout={aboutToFocus}/>

      <Footer phone={phone} focusContact={contactToFocus}/>
      
      <ScrollButton scrollToTop={scrollToTop}/>
    </div>
  );
}

export default App;
