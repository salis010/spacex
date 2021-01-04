import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: ${theme.colors.primary};
`

interface IProps {
    text: string
}

export const Title: React.FunctionComponent<IProps> = ({ text }) => (
    <H1>{text}</H1>
)
