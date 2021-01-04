export interface ITheme {
    colors: {
        white: string
        primary: string
        tableBorder: string
        text: string
        disabled: string
        softText: string
    },
    dimensions: {
        radius: string
        borderRadius: string
    },
    spaces: {
        textHPadding: string
    }
}

export const theme: ITheme = {
    colors: {
        white: "RGB(250, 250, 250)",
        primary: "RGB(65, 105, 225)",
        tableBorder: "RGB(200, 200, 215)",
        text: "RGB(50, 50, 50)",
        softText: "RGB(75, 75, 125)",
        disabled: "RGB(100, 100, 100)"
    },    
    dimensions: {
        radius: "20px",
        borderRadius: "6px"
    },
    spaces: {
        textHPadding: "10px",    
    }
}
