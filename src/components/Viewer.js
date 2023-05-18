import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  viewer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    width: '50%',
    padding: '0 20px',
  },
  catalogImage: {
    maxWidth: '100%',
    maxHeight: '700px',
    marginBottom: '10px',
    borderRadius: '50px',
  },
  viewerHeading: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'left',
  },
  viewerDescription: {
    fontSize: '20px',
    textAlign: 'left',
  },
}));

const Viewer = ({ catalogImage, heading, description }) => {
  const classes = useStyles();

  return (
    <div className={classes.viewer}>
      <img src={catalogImage} alt="Catalog" className={classes.catalogImage} />
      <div className={classes.viewerHeading}>{heading}</div>
      <div className={classes.viewerDescription}>{description}</div>
    </div>
  );
};

export default Viewer;
