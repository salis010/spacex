import * as React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Title } from "./components/general/title"
import { Menu } from "./components/general/menu"
import { Launches } from "./pages/launches"
import { ComparisonPage } from "./pages/comparison-page"

export const App: React.FunctionComponent = () => {
    return (
        <Router>
            <Title text="SpaceX Launches" />
            <Menu />
            <Switch>
                <Route exact path="/" component={Launches} />
                <Route
                    exact
                    path="/compare-launches"
                    component={ComparisonPage}
                />
            </Switch>
        </Router>
    )
}
