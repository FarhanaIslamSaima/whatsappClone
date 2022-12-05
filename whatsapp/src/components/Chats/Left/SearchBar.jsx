import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import {Box} from '@material-ui/core'
import { alpha, makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    container:{
        padding:'8px',


    },

    
    root: {
      flexGrow: 1,

    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: 'white',
      color:'white',
      
      marginLeft: 0,
      width: '100%',
     
    },
    searchIcon: {
 
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color:'white'
    },
    inputRoot: {
      color: 'black',
      background:'lightgrey',
      width:'100%',
      borderRadius:'10px',
     
    
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
    
    },
  }));
const SearchBar = () => {
    const classes=useStyles();
    return (
        <Box className={classes.container}>
                  <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon style={{color:'white'}}/>
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>


        </Box>
  
    );
};

export default SearchBar;