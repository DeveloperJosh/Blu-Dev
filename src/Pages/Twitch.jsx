import '../App.css';

export const Twitch = () => {
    return (

        <div className="App">
            <header className="App-header">
            <iframe
             src="https://player.twitch.tv/?channel=aka_yee&parent=blu-dev.xyz"
             height="720"
             width="1280">
            </iframe>
            </header>

        </div>
    );
}
    
export default Twitch;