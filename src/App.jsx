import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Route, Routes} from 'react-router-dom'
import Alldoc from './Components/Alldoc'
import ViewDoc from './Components/ViewDoc'
import Banner from './Components/Banner';
import Steps from './Components/Steps';
import Explore from './Components/Explore';
import About from './Components/About';
function App() {
  return (
    <div className="App">
      <header>
      <Header/>
      </header>
<section>
  <Routes>
    <Route path='/' element={<>
              <Banner />
              <Steps />
              <Explore/>
              <Alldoc />
              <About/>
            </>} />
    <Route path='/view/:id' element={<ViewDoc/>} />
  </Routes>
</section>
      <footer>
      <Footer/>
      </footer>
    </div>
  );
}

export default App;
