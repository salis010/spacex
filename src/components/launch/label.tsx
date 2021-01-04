import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

const P = styled.p`
    font-size: 1.2rem;
    margin: 0 0 0.8rem 0;
    color: ${theme.colors.softText};
`

interface IProps {
    text: string
}

export const Label: React.FunctionComponent<IProps> = ({ text }) => (
    <P>{text}</P>
)
