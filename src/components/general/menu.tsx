import * as React from "react"
import { Link } from "react-router-dom"

export const Menu: React.FunctionComponent = () => (
    <div>
        <Link to="/">Past Launches</Link>
        {" | "}
        <Link to="/compare-launches">Compare Launches</Link>
    </div>
)
