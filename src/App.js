import NavComponent from "./components/NavComponent";
import './components/components.css';
import MainComponent from "./components/MainComponent";
function App() {
  return (
    <div className="App">
      {/* <h1>FLexbox Blog</h1> */}
      <NavComponent/>
      <MainComponent/>
    </div>
  );
}

export default App;
