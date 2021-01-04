import * as React from "react"
import styled from "@emotion/styled"
import { theme } from "../styles/theme"
import { useQuery } from "@apollo/client"
import { launchesToCompare } from "../graphql/cache"
import { LAUNCHES_TO_COMPARE } from "../graphql/queries"

interface ILaunchItem {
    selected: boolean
}

const LaunchItem = styled.div<ILaunchItem>`
    display: grid;
    grid-template-columns: 80% 10% 10%;
    height: 3rem;
    background-color: ${(props) =>
        props.selected ? theme.colors.tableBorder : theme.colors.white};
    border: 1px solid ${theme.colors.tableBorder};
    border-bottom: none;

    &:last-child {
        border-bottom: 1px solid ${theme.colors.tableBorder};
    }
`

const NameWrapper = styled.div`
    display: flex;
    align-items: center;
`

const ControlWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 6rem;
`

const Button = styled.button`
    height: 2rem;
    width: 6rem;
    font-size: 0.8rem;
    font-weight: 800;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    border: none;
    border-radius: 50rem;
    outline: none;
    cursor: pointer;
`

interface IProps {
    id: string
    missionName: string
}

export const LaunchName: React.FunctionComponent<IProps> = ({
    id,
    missionName,
}) => {
    const launches = useQuery(LAUNCHES_TO_COMPARE).data.launchesToCompare
    const selected = launches.includes(missionName)
    const newLaunchesToCompare = [...launches]
    const handleChange = (): void => {
        if (!selected) {
            newLaunchesToCompare.unshift(missionName)

            if (newLaunchesToCompare.length > 2) {
                newLaunchesToCompare.splice(2)
            }

            launchesToCompare(newLaunchesToCompare)
        } else {
            const index = launches.indexOf(missionName)
            newLaunchesToCompare.splice(index, 1)
            launchesToCompare(newLaunchesToCompare)
        }
    }

    return (
        <LaunchItem selected={selected}>
            <NameWrapper>{missionName}</NameWrapper>
            <ControlWrapper>
                <Button onClick={handleChange}>Select</Button>
            </ControlWrapper>
        </LaunchItem>
    )
}
