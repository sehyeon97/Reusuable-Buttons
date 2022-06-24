import Style from './stylesheet/Style';
import Button from './components/Button';

const DefaultButton = {
  width: '200px',
  height: '150px',
  borderRadius: '8px',
  border: '1px solid black',
  backgroundColor: 'cornflowerblue',
  color: 'black'
}

const OutlineButton = {
  border: '3px solid black',
  backgroundColor: 'white',
  color: 'black',
  width: '200px',
  height: '150px',
  borderRadius: '8px'
}

const TextButton = {
  border: 'none',
  backgroundColor: 'white',
  color: 'black',
  width: '200px',
  height: '150px',
  borderRadius: '8px'
}

// For on and off buttons such as box shadow on / off,
// two states must be provided to button
const BoxShadowOnButton = {
  width: '200px',
  height: '150px',
  boxShadow: '8px 16px red'
}

const BoxShadowOffButton = {
  width: '200px',
  height: '150px',
  boxShadow: '0px 0px white'
}

function App() {
  return (
    <div style={Style.container}>
      <div style={Style.div}>
        <Button state={DefaultButton}/>
      </div>
      <div style={Style.div}>
        <Button state={OutlineButton}/>
      </div>
      <div style={Style.div}>
        <Button state={TextButton}/>
      </div>
      <div style={Style.div}>
        <Button state={BoxShadowOnButton} alternativeState={BoxShadowOffButton} boxshadow={true}/>
      </div>
    </div>
  );
}

export default App;
