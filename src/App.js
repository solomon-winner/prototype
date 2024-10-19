import './App.css';
import { useRef } from 'react';
import About from './components/organisms/about/about.jsx';
import Banner from './components/organisms/banner/banner.jsx';
import GlobalStyle from './style/style.js';
import Contacts from './components/organisms/contacts/contacts.jsx';
import Testimony from './components/organisms/testimonies/testimony.jsx';
import Songs from './components/organisms/song/songCards.jsx';
import Footer from './components/organisms/footer/footer.jsx';
import { ScrollProvider } from './utils/scrollContext.js';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const testimonyRef = useRef(null);
  const songsRef = useRef(null);
  const contactsRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <>
    <GlobalStyle/>
    <ScrollProvider>
    <div className="App">
      <Banner/>
      <About/>
      <Testimony/>
      <Songs/>
      <Contacts/>
      <Footer/>
    </div>
    </ScrollProvider>
    </>
  );
}

export default App;
