import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

const P = styled.p`
    font-size: 1.4rem;
    margin: 0 0 1.4rem 2rem;
    color: ${theme.colors.text};
`

interface IProps {
    text: string
}

export const Item: React.FunctionComponent<IProps> = ({ text }) => <P>{text}</P>
