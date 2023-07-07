import Greeting from "./components/greeting";
import Lucky from "./components/luckyNumbers";
import PastResults from "./components/pastResults";
import "./App.css";

function App() {
  return (
    <>
      <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
      <Lucky />
      <PastResults />
    </>
  );
}

export default App;
