import { useState } from 'react'

// Write your Color component here
const Color = ({color, setSelectedColor}) => {
  return (
    <div 
      className={color} 
      onClick={() => setSelectedColor(color)} 
     ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")
  return (
    <div id="container">
      <div className={`navabar ${selectedColor === "" ? "black"  : selectedColor}`}>
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      {/* Picker component */}
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor}/>
        <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor}/>
      </div>      
    </div>
  );
};

export default App;