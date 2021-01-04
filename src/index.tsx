import * as React from "react"
import * as ReactDOM from "react-dom"
import { Global, css } from "@emotion/core"
import { globalCSS } from "./styles/global-css"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "emotion-theming"
import { theme } from "./styles/theme"
import { App } from "./app"
import { client } from "./graphql/client"

const mountNode = document.getElementById("mountNode")

//NEXT:
//  - compare
//  - find
//  - Cypress
//  - Display field names in LaunchDetail

ReactDOM.render(
    <>
        <Global
            styles={css`
                ${globalCSS}
            `}
        />
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </ApolloProvider>
    </>,
    mountNode
)
