export interface ILaunch {
    missionName: string
    date: string
    launchSite: string
    articleLink: string
    videoLink: string
    ships: IShip[]
}

interface IShip {
    name: string
}