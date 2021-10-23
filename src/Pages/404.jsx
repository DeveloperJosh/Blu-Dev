import '../App.css';

export const Oh404 = () => {
    return (

        <div className="App">
            <header className="App-header">
            <img id="image" src="https://i.pinimg.com/originals/ff/28/2f/ff282fc9be15259038a84650e7a83487.gif" alt="cry"/>
            <h1 className="Home">404</h1>
            <h1 className="Home">What you don't lov.. lov.. <b className="red">love</b>.. me..</h1>

            <a
          className="App-link"
          href="/love"
          rel="noopener noreferrer"
           >
            <button className='btn'>I love you!!!</button>
            </a>

            <a
          className="App-link"
          href="/sad"
          rel="noopener noreferrer"
           >
            <button className='btn'>I'm sorry no</button>
            </a>

            <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
           >
            <button className='btn'>Go HOME</button>
            </a>

            </header>

        </div>
    );
}
    
export default Oh404;