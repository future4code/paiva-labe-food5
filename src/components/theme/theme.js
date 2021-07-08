import { createMuiTheme } from '@material-ui/core/styles/'

const theme = createMuiTheme ({
    palette: {
        primary: {
            main: "#5cb646",
            contrastText: "#000"
        },
        text: {
            primary: "#030303"
        }
    }
})

export default theme