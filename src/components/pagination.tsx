import * as React from "react"
import { useQuery } from "@apollo/client"
import { pageNumber } from "../graphql/cache"
import { PAGE_NUMBER } from "../graphql/queries"

export const Pagination: React.FunctionComponent = () => {
    const page = parseInt(useQuery(PAGE_NUMBER).data.pageNumber, 10)

    const handleUpClick = (): void => {
        pageNumber(page + 1)
    }

    const handleDownClick = (): void => {
        pageNumber(page + 1)
    }

    return (
        <>
            <button onClick={handleUpClick}>{"<"}</button>
            <span>{pageNumber()}</span>
            <button onClick={handleDownClick}>{">"}</button>
        </>
    )
}
