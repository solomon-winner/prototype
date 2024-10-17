import './App.css';
import About from './components/organisms/about/about.jsx';
import Banner from './components/organisms/banner/banner.jsx';
import GlobalStyle from './style/style.js';
import Contacts from './components/organisms/contacts/contacts.jsx';
function App() {
  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <Banner/>
      <About/>
      <Contacts/>
    </div>
    </>
  );
}

export default App;
