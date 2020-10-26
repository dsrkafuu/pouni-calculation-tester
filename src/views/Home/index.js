import ReactLogo from '../../assets/svg/ReactLogo.svg';
import './index.scss';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ReactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
