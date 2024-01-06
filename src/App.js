import "./App.css";
import { useEffect } from "react";
import { Axios } from "axios";

function App() {
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  return (
    <div className="App">
      <div className="cryptoHeader">
        Cryptocurrency and Tokens Price Web App in React JS
      </div>
      <div className="cryptoDisplay">Div #2</div>
    </div>
  );
}

export default App;
