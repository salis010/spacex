import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../styles/theme"
import { useQuery } from "@apollo/client"
import { LAUNCH_TO_COMPARE, LAUNCHES_TO_COMPARE } from "../graphql/queries"
import { showComparison } from "../graphql/cache"
import { LaunchDetail } from "./launch/launch-detail"

const Button = styled.button`
    position: fixed;
    top: 6rem;
    right: 6rem;
    width: 6rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 800;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border-radius: 50rem;
    border: none;
    outline: none;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    margin-top: 2rem;
`

export const DirectComparison: React.FunctionComponent = () => {
    const handleClick = () => {
        showComparison(false)
    }

    const rx = /[()\.]/g

    const launchesToCompare = useQuery(LAUNCHES_TO_COMPARE).data
        .launchesToCompare

    const { loading, error, data } = useQuery(LAUNCH_TO_COMPARE, {
        variables: {
            launch1: launchesToCompare[0].replace(rx, ""),
            launch2: launchesToCompare[1].replace(rx, ""),
        },
    })

    const launches = !loading ? [data.launch1[0], data.launch2[0]] : []

    return (
        <>
            <Button onClick={handleClick}>Close</Button>
            <Wrapper>
                {!loading &&
                    launches.map((launch) => (
                        <LaunchDetail
                            key={launch.mission_name}
                            missionName={launch.mission_name}
                            date={launch.launch_date_local}
                            launchSite={launch.launch_site.site_name}
                            articleLink={launch.links.article_link}
                            videoLink={launch.links.video_link}
                            ships={launch.ships}
                        />
                    ))}
            </Wrapper>
        </>
    )
}
