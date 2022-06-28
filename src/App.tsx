import Style from './stylesheet/Style';
import Button from './components/Button';

function App() {
  return (
    <div style={Style.container}>
      <div style={Style.div}>
        <Button variant="default" size="default" color='blue' cursor='not-allowed' opacity={1}/>
      </div>
      <div style={Style.div}>
        <Button variant="outline" size="large" backgroundColor='orange' cursor='default' opacity={0.4}/>
      </div>
      <div style={Style.div}>
        <Button variant="text" size="small" color='red' backgroundColor='cornflowerblue'/>
      </div>
      <div style={Style.div}>
        <Button boxshadow='24px 24px blue'/>
      </div>
      <div style={Style.div}>
        <Button size="default" boxshadow='24px 24px'/>
      </div>
    </div>
  );
}

export default App;
