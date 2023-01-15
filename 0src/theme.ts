import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette:{
        primary:{
            main:'#176a5',
            light:"skyblue"
        },
        secondary:{
            main:'#15c630'
        },
        info:{
            main:'#999'
        }
    }
})
declare module '@mui/material/styles' {
    export interface Theme {
        palette:{
            primary:{
                main?:string
                light:string
            },
            secondary:{
                main?:string
            },
            info:{
                main?:string
            }
        },
        
      }
    }
  