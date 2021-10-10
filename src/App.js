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
    <div className="main-div">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
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
