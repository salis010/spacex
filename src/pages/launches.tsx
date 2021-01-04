import * as React from "react"
import { useQuery } from "@apollo/client"
import { PAGE_NUMBER, LAUNCHES } from "../graphql/queries"
import { LaunchDetail } from "../components/launch/launch-detail"
import { Pagination } from "../components/pagination"
import { LAUNCHES_PER_PAGE } from "../constants"

export const Launches: React.FunctionComponent = () => {
    const page = parseInt(useQuery(PAGE_NUMBER).data.pageNumber, 10)
    const { loading, error, data } = useQuery(LAUNCHES, {
        variables: { offset: LAUNCHES_PER_PAGE * page },
    })

    return (
        <div>
            {!loading &&
                data.launchesPast.map((launch) => (
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
            <Pagination />
            {error && <p>Error: {JSON.stringify(error)}</p>}
        </div>
    )
}
