import './App.css';
import Home from './Pages/Home';

function App() {
  return (
    <div
      className="App"
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Home />
    </div>
  );
}

export default App;
