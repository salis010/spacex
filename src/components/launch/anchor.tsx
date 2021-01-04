import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

const A = styled.a`
    font-size: 1.4rem;
`

const Item = styled.p`
    font-size: 1.4rem;
    margin: 0 0 1.4rem 2rem;
    color: ${theme.colors.text};
`

interface IProps {
    link: string
    text: string
}

export const Anchor: React.FunctionComponent<IProps> = ({ link, text }) => (
    <>
        {
            <Item>
                {link ? (
                    <A target="_blank" href={link}>
                        {text}
                    </A>
                ) : (
                    "N/A"
                )}
            </Item>
        }
    </>
)
