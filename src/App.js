import './App.css';
import About from './components/organisms/about/about.jsx';
import Banner from './components/organisms/banner/banner.jsx';
import GlobalStyle from './style/style.js';
import Contacts from './components/organisms/contacts/contacts.jsx';
import Testimony from './components/organisms/testimonies/testimony.jsx';
import Songs from './components/organisms/song/songCards.jsx';
import Footer from './components/organisms/footer/footer.jsx';
import { ScrollProvider } from './utils/scrollContext.js';

function App() {

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
