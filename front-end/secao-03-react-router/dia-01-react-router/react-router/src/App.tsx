import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import CoffeeList from "./components/pages/CoffeeList";
import Coffee from "./components/pages/Coffee";
import NotFound from './components/pages/NotFound';
import Layout from "./components/pages/Layout";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={ <Layout />}>
        <Route index element={ <Home />}/>
        <Route path="/coffees" element={ <CoffeeList />}/>
        <Route path="/coffees/:coffee" element={ <Coffee />}/>
      </Route>
      <Route path="/*" element={ <NotFound />}/>
    </Routes>
    </>
  )
}

export default App
