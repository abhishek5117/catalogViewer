import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardMedia } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  thumb: {
    width: '80px',
    height: '80px',
    cursor: 'pointer',
    border: '2px solid transparent',
    '&.thumb-selected': {
      border: '2px solid #39424e',
    },
  },
}));

const Thumb = ({ items, currentIndex, selectedThumb }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1} alignItems="center">
      {items.map((item, index) => (
        <Grid item key={index}>
          <Card
            className={`${classes.thumb} ${
              currentIndex === index ? 'thumb-selected' : ''
            }`}
            onClick={() => selectedThumb(index)}
          >
            <CardMedia
              component="img"
              alt={`Thumb ${index + 1}`}
              image={item.thumb}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Thumb;
