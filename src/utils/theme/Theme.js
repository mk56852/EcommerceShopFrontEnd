import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#451952',
         
        },
        secondary: {
          main: '#662549',
        },
        color3 : {
        main: '#AE445A',
        },
        color4 :{
            main: '#F39F5A',
        },
        color5:{
            main:'#FAF6F0'
        }
      },
     
    components: {
        MuiButton: {
          styleOverrides: {
            root: { 
              textTransform: "none"
            },
          },
        },
    }
})

export default theme