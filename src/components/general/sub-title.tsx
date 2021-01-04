import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

const H2 = styled.h2`
    font-size: 2rem;
    font-weight: 800;
    color: ${theme.colors.text};
`

interface IProps {
    text: string
}

export const SubTitle: React.FunctionComponent<IProps> = ({ text }) => (
    <H2>{text}</H2>
)
