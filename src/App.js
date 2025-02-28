import './App.css';
import About from './components/organisms/about/about.jsx';
import Banner from './components/organisms/banner/banner.jsx';
import GlobalStyle from './style/style.js';
import Contacts from './components/organisms/contacts/contacts.jsx';
import Testimony from './components/organisms/testimonies/testimony.jsx';
import Songs from './components/organisms/song/songCards.jsx';
import Footer from './components/organisms/footer/footer.jsx';
import { ScrollProvider } from './utils/scrollContext.js';
import { useTestimonies } from './hooks/useTestimonies.js';
import { useGeneralInfo } from './hooks/useGeneralInfo.js';

function App() {
  const { isLoading, error } = useTestimonies();
  const { isLoading: isGeneralLoading, isError: Generalerror } = useGeneralInfo();

  return (
    <>
    
      <GlobalStyle />
      <ScrollProvider>
        <div className="App">
          <Banner />
          <About />
          <Testimony />
          <Songs />
          <Contacts />
          <Footer />
        </div>
      </ScrollProvider>
    </>
  );
}

export default App;