import './App.css';
import { useRef } from 'react';
import About from './components/organisms/about/about.jsx';
import Banner from './components/organisms/banner/banner.jsx';
import GlobalStyle from './style/style.js';
import Contacts from './components/organisms/contacts/contacts.jsx';
import Testimony from './components/organisms/testimonies/testimony.jsx';
import Songs from './components/organisms/song/songCards.jsx';
import Footer from './components/organisms/footer/footer.jsx';

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
    <div className="App">
      <sction ref={homeRef}>
    <Banner
          scrollToSection={scrollToSection}
          homeRef={homeRef}
          aboutRef={aboutRef}
          testimonyRef={testimonyRef}
          songsRef={songsRef}
          contactsRef={contactsRef}
        />
        </sction>
        <section ref={aboutRef}>
      <About/>
        </section>
        <section ref = {testimonyRef}>
      <Testimony/>
        </section>
      <section ref={songsRef}>
      <Songs/>
      </section>
      <section ref={contactsRef}>
      <Contacts/>
      </section>
      <Footer/>
    </div>
    </>
  );
}

export default App;
