import '../App.css';

function Store(props) { 
    return (
        <div className="App">
            <header className="App-header">
            <p>Your delicious burger is on its way!</p>
            <p>Your burger will be delivered to:</p>
            <p>{props.address}</p>
            <p>{props.city}</p>
            <p>{props.zipCode}</p>
            <p>{props.country}</p>
            <p>Thank you for your order!</p>
            </header>
        </div>
    );
}
    
export default Store;