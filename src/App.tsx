import Style from './stylesheet/Style';
import Button from './components/Button';

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
        <Button variant="default" size="default" color='blue'/>
      </div>
      <div style={Style.div}>
        <Button variant="outline" size="large" backgroundColor='orange'/>
      </div>
      <div style={Style.div}>
        <Button variant="text" size="small" color='red' backgroundColor='cornflowerblue'/>
      </div>
      <div style={Style.div}>
        <Button boxshadow/>
      </div>
      <div style={Style.div}>
        <Button size="default"/>
      </div>
    </div>
  );
}

export default App;
