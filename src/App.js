import React, { useEffect, useRef } from 'react';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import { Grid } from '@material-ui/core';
import { SpeechState, useSpeechContext } from "@speechly/react-client";
import {
    PushToTalkButton,
    PushToTalkButtonContainer,
    ErrorPanel,
  } from "@speechly/react-ui";

import useStyles from './styles';
const App=() => {
    const classes = useStyles();
    

    return (
       <div> 
       <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{height:'100vh'}}>
            <Grid item sx={12} sm={4} className={classes.mobile}>
             <Details title="Income"/>
            </Grid>
            <Grid  item sx={12} sm={3} className={classes.main}>
                <Main />
            </Grid>
            <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title="Income" />
            </Grid>
            <Grid item sx={12} sm={4} className={classes.last}>
                <Details title = "Expense"/>
            </Grid>
            
            <PushToTalkButtonContainer>
                <PushToTalkButton />
                <ErrorPanel />
             </PushToTalkButtonContainer>
             </Grid>
        </div>
    );
};

export default App