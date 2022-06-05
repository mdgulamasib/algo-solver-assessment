import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageSlider from './components/ImageSlider';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <ImageSlider></ImageSlider>
      <Footer></Footer>
    </div>
  );
}

export default App;
