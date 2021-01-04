import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../styles/theme"
import { useQuery } from "@apollo/client"
import { SubTitle } from "./general/sub-title"
import { LAUNCHES_NAMES } from "../graphql/queries"
import { LaunchName } from "./launch-name"
import { StickyButton } from "./general/sticky-button"

const TableHeader = styled.div`
    display: grid;
    grid-template-columns: 80% 10% 10%;
    height: 3rem;

    &:last-child {
        border-bottom: 1px solid ${theme.colors.tableBorder};
    }
`

const HeaderItemWrapper = styled.div`
    display: flex;
    align-items: center;
    color: ${theme.colors.text};
    font-size: 1.4rem;
    font-weight: 800;
`

export const ComparisonTable: React.FunctionComponent = () => {
    const { loading, error, data } = useQuery(LAUNCHES_NAMES)

    return (
        <div>
            <SubTitle text="Compare Launches" />
            <TableHeader>
                <HeaderItemWrapper>Mission Name</HeaderItemWrapper>
                <HeaderItemWrapper>Compare</HeaderItemWrapper>
            </TableHeader>
            {!loading &&
                data.launchesPast.map((launch) => (
                    <LaunchName
                        key={launch.id}
                        id={launch.id}
                        missionName={launch.mission_name}
                    />
                ))}
            <StickyButton text="Compare" />
        </div>
    )
}
