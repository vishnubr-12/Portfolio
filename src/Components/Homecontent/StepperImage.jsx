import React from 'react';
import { makeStyles, useTheme,Hidden } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Text from './HomeText'
import photo from '../../Assets/IMG.jpeg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'photo',
    imgPath:photo,
  },
  // {
  //   label: 'photo1',
  //   imgPath:photo,
  // },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width:'100%',
    flexGrow: 1,
    padding:'12px',
    [theme.breakpoints.down('xs')]: {padding: '0px !important'}
  },
  img: {
    height: '630px',
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);



  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            <Hidden xsDown >
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label}/>
            ) : null}
            </Hidden>
            <Hidden smUp ><div style={{background: `url(${step.imgPath}) no-repeat center center`,backgroundSize: 'cover'}}><Text/></div></Hidden>
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </div>
  );
}

export default SwipeableTextMobileStepper;