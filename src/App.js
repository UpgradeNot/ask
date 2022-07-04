import logo from './logo.svg';
import './App.css';
import ContactParentComponent from './Components/pure/ComponentA';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactParentComponent/>
      </header>
    </div>
  );
}

export default App;
