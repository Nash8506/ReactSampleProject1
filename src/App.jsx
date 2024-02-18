import './App.css';
import HeroSection from './components/Hero';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <div>
      <Navigation/>
      <HeroSection/>
    </div>
  );
};

// npm run dev (terminal code to open the website)

export default App;