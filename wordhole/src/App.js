import './App.css';
import FlexView from 'react-flexview';

export default function App() {
  return (
    <div className="App">
      <FlexView className="App-header">letsss gooo</FlexView>
      <FlexView
        width="100%"
        hAlignContent="center"
        style={{ fontSize: '100px', fontFamily: 'cursive' }}
      >
        I love Kennedii
      </FlexView>
    </div>
  );
}
