import React from "react";
import PropTypes from "prop-types";
import { makeStyles,LinearProgress,Typography,Box ,withStyles,  } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%"
    },
    name:{fontSize: '14px',marginBottom: '10px',fontWeight: 500,textTransform: 'uppercase',color: '#222222',width:'50%'},
    dFlex:{display:"flex !important",},
    percent:{color:'#d5c455',textAlign:'right',width:'50%'},
    barcolor:{backgroundColor:'#e6e8db'},
    pad:{padding:'10px'}
  }));
  const BorderLinearProgress = withStyles({
    root: {height:10,borderRadius: 4,}
})(LinearProgress);

function LinearProgressWithLabel(props) {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
          setProgress((oldProgress) => {
            if (oldProgress === props.value) {
              return props.value;
            }
            const diff = Math.random() * 10;
            return Math.min(oldProgress + diff, props.value);
          });
        }, 100);
        return () => {
          clearInterval(timer);
        };
      }, []);
    const classes = useStyles();
  return (
    <div className={classes.pad}>
        <div className={classes.dFlex}>
      <Typography variant="body2" className={classes.name}>
        {props.name}
      </Typography>
      <Typography variant="body2" className={classes.percent}>{`${Math.round(
            props.value
          )}%`}</Typography>
      </div>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
        <BorderLinearProgress variant="determinate"className={classes.barcolor} value={progress} />
        </Box>
      </Box>
    </div>
  );
}
export default LinearProgressWithLabel
LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired
};

