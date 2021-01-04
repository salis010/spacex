import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"
import { useQuery } from "@apollo/client"
import { LAUNCHES_TO_COMPARE } from "../../graphql/queries"
import { showComparison } from "../../graphql/cache"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 6rem;
    background-color: ${theme.colors.tableBorder};
`

const Button = styled.button`
    width: 10rem;
    height: 4rem;
    font-size: 1.2rem;
    font-weight: 800;
    color: ${(props) =>
        props.disabled ? theme.colors.tableBorder : theme.colors.white};
    background-color: ${(props) =>
        props.disabled ? theme.colors.disabled : theme.colors.primary};
    border-radius: 50rem;
    border: none;
    outline: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`

interface IProps {
    text: string
}

export const StickyButton: React.FunctionComponent<IProps> = ({ text }) => {
    const launchesToCompare = useQuery(LAUNCHES_TO_COMPARE).data
        .launchesToCompare

    const handleClick = () => {
        showComparison(true)
    }

    return (
        <Wrapper>
            <Button
                disabled={launchesToCompare.length !== 2}
                onClick={handleClick}
            >
                {text}
            </Button>
        </Wrapper>
    )
}
