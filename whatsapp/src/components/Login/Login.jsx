
import React from 'react';
import {withStyles,Dialog} from '@material-ui/core'
const style={
    DialogPaper:{
        width:'800px'
    }
}
const Login = ({classes}) => {
    return (
      <Dialog open={true} classes={{paper:classes.DialogPaper}}>
        hello

      </Dialog>
    );
};

export default withStyles(style)(Login);