import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"

const P = styled.p`
    font-size: 1.2rem;
    margin: 0 0 1.4rem 0.8rem;
    color: ${theme.colors.text};
`

interface IProps {
    list: string[]
}

export const List: React.FunctionComponent<IProps> = ({ list }) => {
    return (
        <>
            {list.length > 0 ? (
                list.map((item) => <P key={item}>{item}</P>)
            ) : (
                <P>N/A</P>
            )}
        </>
    )
}
