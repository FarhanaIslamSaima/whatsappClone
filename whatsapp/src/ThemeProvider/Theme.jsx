import React from "react";


import { ThemeProvider,createMuiTheme } from '@material-ui/core/styles';
const theme=createMuiTheme({
    overrides:{
        MuiBackdrop:{
            root:{
               backgroundColor:'rgba(0, 0, 0, 0)'
            }

        }
    }
})
const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  export default Theme;


