import * as React from "react"
import { ILaunch } from "../../interfaces"
import styled from "@emotion/styled"
import { theme } from "../../styles/theme"
import { Item } from "./item"
import { Label } from "./label"
import { Anchor } from "./anchor"
import { List } from "./list"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 2rem;
    border: 1px solid ${theme.colors.primary};
`

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

const TableHeader = styled.p`
    height: 2.2rem;
    margin: 0;
    padding: 0.6rem 0 0.6rem ${theme.spaces.textHPadding};
    font-size: 1.6rem;
    font-weight: 800;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
`

const P = styled.p`
    font-size: 1.4rem;
    padding-left: ${theme.spaces.textHPadding};
    margin-bottom: 1.4rem;
    color: ${theme.colors.text};
`

const Link = styled.a`
    font-size: 1.4rem;
    margin-bottom: 1.4rem;
    padding-left: ${theme.spaces.textHPadding};
`

const ShipsWrapper = styled.div`
    margin-left: 3rem;
`

export const LaunchDetail: React.FunctionComponent<ILaunch> = ({
    missionName,
    date,
    launchSite,
    articleLink,
    videoLink,
    ships,
}) => {
    const localDate = new Date(date).toLocaleDateString()
    const shipsList = Object.values(ships)
        .filter((ship) => ship)
        .map((ship) => ship && ship.name)

    return (
        <Wrapper>
            <TableHeader>{missionName}</TableHeader>
            <DetailsWrapper>
                <Label text="Date" />
                <Item text={localDate} />
                <Label text="Launch Site" />
                <Item text={launchSite} />
                <Label text="Article" />
                <Anchor link={articleLink} text="Read here" />
                <Label text="Video" />
                <Anchor link={videoLink} text="Watch here" />
                <Label text="Ships" />
                <List list={shipsList} />
            </DetailsWrapper>
        </Wrapper>
    )
}
