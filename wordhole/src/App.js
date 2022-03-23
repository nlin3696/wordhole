import './App.css';
import FlexView from 'react-flexview';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

export default function App() {
  return (
    <div className="App">
      <FlexView className="App-header">wordhole 🕳️</FlexView>
      <Board />
      <Keyboard />
    </div>
  );
}
