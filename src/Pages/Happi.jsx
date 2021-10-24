import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function HS() {
    const [image, setImage] = React.useState(0)
    const imageLinks = ["https://c.tenor.com/00Ljqy2Iv9QAAAAC/shintaro-kisaragi-shintaro.gif", "https://thumbs.gfycat.com/IdealisticHiddenBumblebee-max-1mb.gif" , "https://c.tenor.com/00Ljqy2Iv9QAAAAC/shintaro-kisaragi-shintaro.gif"]
  return (
    <div className="App">
      <header className="App-header">
      <img src={imageLinks[image]} alt="happi"/>
        <h>Happy, Sad</h><br></br>
        <button className="btn" onClick={() => {setImage(1)}}>Happy</button>
        <button className="btn" onClick={() => {setImage(2)}}>Sad...</button>
        <Link to="/"><button className='btn'>Go Home</button></Link>
      </header>
    </div>
  );
}
export default HS; 