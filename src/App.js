import logo from './logo.svg'
import './App.css'
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
import GraphComponent from './components/GraphComponent'

function App() {

  const options = [
    'India', 'Maharashtra', 'Delhi Belly'
  ];
  const defaultOption = options[0];


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Covid-19 Predictions for India and its States
        </p>
      </header>
      <Dropdown 
        options={options} //onChange={this._onSelect} 
        value={defaultOption} 
        //arrowClassName='myArrowClassName'
        //arrowClosed={<span className="arrow-closed" />}
        //arrowOpen={<span className="arrow-open" />}
      />
      <GraphComponent />
    </div>
  );
}

export default App;