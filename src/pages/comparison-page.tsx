import * as React from "react"
import { useQuery } from "@apollo/client"
import { ComparisonTable } from "../components/comparison-table"
import { DirectComparison } from "../components/direct-comparison"
import { SHOW_COMPARISON } from "../graphql/queries"

export const ComparisonPage: React.FunctionComponent = () => {
    const isShowComparison = useQuery(SHOW_COMPARISON).data.showComparison

    return <>{isShowComparison ? <DirectComparison /> : <ComparisonTable />}</>
}
