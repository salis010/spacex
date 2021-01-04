import { gql } from '@apollo/client'
import { LAUNCHES_PER_PAGE } from '../constants'

export const LAUNCHES_NAMES = gql`
    query {
        launchesPast(limit: 200) {
          mission_name
          id
    }
}
`

export const LAUNCH_TO_COMPARE = gql`
    query launches($launch1: String!, $launch2: String!) {
        launch1: launchesPast(find: {mission_name: $launch1}) {
          mission_name
          launch_date_local
          launch_site {
            site_name
          }
          links {
            article_link
            video_link
          }
          ships {
            name
          }
        }
        launch2: launchesPast(find: {mission_name: $launch2}) {
          mission_name
          launch_date_local
          launch_site {
            site_name
          }
          links {
            article_link
            video_link
          }
          ships {
            name
          }
        }
      }
`

export const LAUNCHES = gql`
    query launches($offset: Int!) {
        launchesPast(limit: ${LAUNCHES_PER_PAGE}, offset: $offset) {
          mission_name
          launch_date_local
          launch_site {
            site_name
          }
          links {
            article_link
            video_link
          }
          ships {
            name
          }
        }
      }
`

export const PAGE_NUMBER = gql`
    query PageNumber {
      pageNumber @client
    }
`

export const LAUNCHES_TO_COMPARE = gql`
    query LaunchesToCompare {
      launchesToCompare @client
    }
`

export const SHOW_COMPARISON = gql`
    query ShowComparison {
      showComparison @client
    }
`