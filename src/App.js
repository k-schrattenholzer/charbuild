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
  //need a handleClick to update the sayings array with new sayings when the button is clicked

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>make a qt</h1>
          <Selector
            head={head}
            onHeadChange={setHead}
            mid={mid} 
            onMidChange={setMid} 
            bottom={bottom} 
            onBottomChange={setBottom}
            shoes={shoes}
            onShoeChange={setShoes}
          />
          <Display />
          <Character {...{head, mid, bottom, shoes}}/>
        </header>
      </main>
    </div>
  );
}

export default App;
