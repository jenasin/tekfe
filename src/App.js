import logo from './logo.svg';
import './App.css';

function App() {

  // Test api call
  const axios = require('axios').default;
  // Make a request for a user with a given ID
  axios.get('https://stepa.azurewebsites.net/api/WeatherForecast')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Great application in React Azure
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          learn react
        </a>
      </header>
    </div>
  );
}

export default App;
