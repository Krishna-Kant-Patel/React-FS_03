
import './App.css';
import Card from './components/Card';
function App() {
  return (
    <div className="App">
      <Card number="2,500" infor='enterprise organization successfully launched' img='https://img.freepik.com/premium-vector/rocket-flat-cartoon-icon-illustration-sticker-design_617535-155.jpg?w=740'/>
      <Card number="45,000" infor='enterprise users onboarded seamlessly' img='https://img.freepik.com/free-vector/businessman-holding-pencil-big-complete-checklist-with-tick-marks_1150-35019.jpg?w=1060&t=st=1685557474~exp=1685558074~hmac=596edb9811f5ea15a7a645df15d4f3835d6de2444d393c9f117db530d7f020c3'/>
      <Card number="200,000+" infor='professionals trained on product and strategy' img='https://img.freepik.com/free-vector/business-analytics-concept-illustration_114360-127.jpg?w=740&t=st=1685557719~exp=1685558319~hmac=74f0110dd4d3c3cac661d42635905ed0b1d80cd86c4e23ce7d6939e9477c0aa7'/>
      
    </div>
  );
}

export default App;
