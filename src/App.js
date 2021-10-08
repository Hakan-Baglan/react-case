import logo from './logo.svg';
import './App.css';
import {Header,
HeroBanner,
Services,
TheirWords,
Register,
Members,
Footer} from './components';

function App() {
  return (
    <div>
      <Header />
      <div>
      <HeroBanner />
      <Services />
      <TheirWords />
      <Register />
      <Members />
      <Footer />
      </div>
    </div>
  );
}

export default App;
