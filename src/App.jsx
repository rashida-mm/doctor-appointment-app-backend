import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {Route, Routes} from 'react-router-dom'
import Alldoc from './Components/Alldoc'
import ViewDoc from './Components/ViewDoc'
import Banner from './Components/Banner';

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
              <Alldoc />
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
