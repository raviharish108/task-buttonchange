import { useState } from 'react';
export function Addcolor() {
  let [color, setColor] = useState("orange");
  let OldColors = ["brown", "gray", "red"];
  let [ColorList, setColorsss] = useState(OldColors);
  let styles = {
    background: color,
    hight: "150px",
    width: "500px",
    margin: "10px"
  };
  return (
    <div>
      <input type="text"
        placeholder='enter the color'
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        value={color}
      ></input>
      <button
        onClick={() => setColorsss([...ColorList, color])}>addcolor</button>
      {ColorList.map((clr) => (
        <ColorBox color={clr} />))}

    </div>
  );
}
function ColorBox({ color }) {
  let Styless = {
    color: "black",
    background: color,
    hight: "300px",
    width: "500px",
    margin: "10px"
  };
  return (
    <div>
      <div style={Styless}>this is my color</div>
    </div>

  );
}
