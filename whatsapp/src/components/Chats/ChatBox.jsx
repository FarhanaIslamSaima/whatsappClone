import React from 'react';
import {Box,Dialog,withStyles} from '@material-ui/core'
const style={
    dialogpaper:{
       width:'400px'
    }
}

const ChatBox = ({classes}) => {
    return (
        <Dialog open={true} classes={{paper:classes.dialogpaper}}>
            Hello
        </Dialog>

    );
};

export default withStyles(style)(ChatBox);