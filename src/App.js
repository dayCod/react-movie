import './App.css';
import NavigationBar from './components/NavigationBar';
import './styling/styling.css';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>

      <section id="trending">
        <Trending />
      </section>

      <section id="superhero">
        <SuperHero />
      </section>
    </div>
  );
}

export default App;
