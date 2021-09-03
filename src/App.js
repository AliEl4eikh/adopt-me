/* eslint-disable import/named */
/* eslint-disable import/namespace */
import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
    const theme = useState("")

    return (
        <ThemeContext.Provider value={theme}>
            <div>
                <Router>
                    <header>
                        <Link to="/"></Link>
                    </header>
                    <Switch>
                        <Route path="/details/:id">
                            <Details />
                        </Route>
                        <Route path="/">
                            <SearchParams />
                        </Route>
                    </Switch>
                </Router>
            </div>
        </ThemeContext.Provider>
    )
}

render(
    <StrictMode>
        <App />
    </StrictMode>, document.getElementById("root"))