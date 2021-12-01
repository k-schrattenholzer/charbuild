import { useState } from "react";
import "./App.css";
import Character from "./components/Character/Character.jsx";
import Display from "./components/Display/Display.jsx";
import Selector from "./components/Selector/Selector.jsx";

function App() {
  //initialize state for head, middle, new saying and Sayings display
  const [head, setHead] = useState("pigeon");
  const [mid, setMid] = useState("poncho");
  const [bottom, setBottom] = useState("shorts");
  const [shoes, setShoes] = useState("converse");
  const [newSaying, setSaying] = useState("");
  const [sayings, setSayings] = useState([]);
  const [count, setCount] = useState(0);

  //need a handleClick to update the sayings array with new sayings when the button is clicked

  const handleClick = () => {
    setSayings((prevState) => [...prevState, newSaying]);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>make a QT</h1> 
        </header>
        <Selector
            head={head}
            onHeadChange={setHead}
            mid={mid} 
            onMidChange={setMid} 
            bottom={bottom} 
            onBottomChange={setBottom}
            shoes={shoes}
            onShoeChange={setShoes}
            newSaying={newSaying}
            addSaying={setSaying}
            handleClick={handleClick}
          />
          <Display {...{sayings, count}}/>
          <Character {...{head, mid, bottom, shoes}}/>
      </main>
    </div>
  );
}

export default App;
