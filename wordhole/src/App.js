import logo from "./logo.svg";
import "./App.css";
import FlexView from "react-flexview";

export default function App() {
  return (
    <div className="App">
      <FlexView className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 123123123123123
        </a>
      </FlexView>
    </div>
  );
}
