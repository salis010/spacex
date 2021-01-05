import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../styles/theme"
import { useQuery } from "@apollo/client"
import { pageNumber } from "../graphql/cache"
import { PAGE_NUMBER } from "../graphql/queries"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
`
const Button = styled.button`
    width: 10rem;
    height: 4rem;
    margin: 2rem;
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

const Page = styled.span`
    font-size: 2rem;
    font-weight: 800;
    color: ${theme.colors.text};
    margin: 2rem;
`

export const Pagination: React.FunctionComponent = () => {
    const page = parseInt(useQuery(PAGE_NUMBER).data.pageNumber, 10)

    const handleUpClick = (): void => {
        pageNumber(page + 1)
    }

    const handleDownClick = (): void => {
        if (page > 0) pageNumber(page - 1)
    }

    return (
        <Wrapper>
            <Button data-cy="previous-page-button" onClick={handleDownClick}>
                {"<"}
            </Button>
            <Page data-cy="page-number">{pageNumber() + 1}</Page>
            <Button data-cy="next-page-button" onClick={handleUpClick}>
                {">"}
            </Button>
        </Wrapper>
    )
}
