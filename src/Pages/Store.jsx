import '../App.css'

export const Store = (props) => {
    return (
        <><div className="App">
            <header className="App-header">
                <form action="/order" onSubmit={props.handleSubmit}>
                    <label className="yes">Order Now</label><br></br>
                    <input className="input" type="email" name="email" onChange={props.handleChange} value={props.test} required/><br></br>
                    <p>Discord Tag<input className="input" type="text" name="discord tag" onChange={props.handleChange} value={props.test} required/><br></br></p>
                    <p className="footer">Do you want a bot?<input type="checkbox" name="bot" value="Yes" /><br></br></p>
                    <p className="footer">Do you want a website?<input type="checkbox" name="website" value="Yes" /><br></br></p>
                    <button className="btn" type="submit">Submit</button><br></br>
                    <button className="btn" onClick={props.handleReset}>Reset</button><br></br>
                </form>
                    <a
                    className="App-link"
                    href="/"
                    rel="noopener noreferrer"
                     >
                    <button className='btn'>Home</button>
                    </a><br></br>
            </header>
            </div><div>
        <footer className="footer">Made by Josh</footer>
      </div></>
    )
}

export default Store;