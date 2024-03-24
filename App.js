import React from "react";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import "./styles/style.css"

function App(){
    return(
       <div className="App">
            <Nav />
            <Switch>
                <Route path="/" exact>
                    {/* exact必須完全符合指定路徑 */}
                    <Homepage />
                </Route>
                <Route path="/about" exact>
                    <About />
                </Route>
            </Switch>
            <Footer />
       </div>
    )
}
export default App;