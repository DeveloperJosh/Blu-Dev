import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HS() {
    const [image, setImage] = React.useState(0)
    const imageLinks = ["https://media.discordapp.net/attachments/823564283882766346/901688352246485042/Code_-_Insiders_DAg2Pe9XC3.png", "https://thumbs.gfycat.com/IdealisticHiddenBumblebee-max-1mb.gif", "https://c.tenor.com/00Ljqy2Iv9QAAAAC/shintaro-kisaragi-shintaro.gif"]
  return (
    <div className="App">
      <header className="App-header">
      <img src={imageLinks[image]} alt="happi"/>
      <div>
        <h>Happy, Sad</h><br></br>
        <button className="btn2 blue"onClick={() => {setImage(1)}}>Happy</button>
        <button className="btn2 red1" onClick={() => {setImage(2)}}>Sad..</button>
        <button className="btn2 green" onClick={() => {setImage(0)}}>Reset</button>
        </div>
        <Link to="/"><button className='btn'>Go Home</button></Link>
      </header>
    </div>
  );
}
export default HS; 