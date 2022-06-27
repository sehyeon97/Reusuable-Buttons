import Style from './stylesheet/Style';
import Button from './components/Button';

const DefaultButton = {
  border: '1px solid black',
  borderRadius: '8px',
  backgroundColor: 'cornflowerblue',
  color: 'black'
}

const OutlineButton = {
  border: '3px solid black',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: 'black'
}

const TextButton = {
  border: 'none',
  borderRadius: '8px',
  backgroundColor: 'white',
  color: 'black'
}

const BoxShadowOnButton = {
  boxShadow: '8px 16px red'
}

const BoxShadowOffButton = {
  boxShadow: '0px 0px white'
}

const EnableButton = {
  opacity: 1.0,
  cursor: 'default'
}

const DisableButton = {
  opacity: 0.6,
  cursor: 'not-allowed'
}

function App() {
  return (
    <div style={Style.container}>
      <div style={Style.div}>
        <Button variant="default" size="default"/>
      </div>
      <div style={Style.div}>
        <Button variant="outline" size="large"/>
      </div>
      <div style={Style.div}>
        <Button variant="text" size="small"/>
      </div>
      <div style={Style.div}>
        <Button boxshadow size="default"/>
      </div>
      <div style={Style.div}>
        <Button size="default"/>
      </div>
    </div>
  );
}

export default App;
