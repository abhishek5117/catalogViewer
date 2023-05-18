import React, { Fragment, useState } from 'react';
import Thumb from './components/Thumb';
import Viewer from './components/Viewer';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowBack, ArrowForward, PlayArrow, Pause } from '@material-ui/icons';
import { Grid, Button } from '@material-ui/core';
import image1 from './assets/images/tea-light-candle.jpeg';
import image2 from './assets/images/white-light-candle.jpg';
import image3 from './assets/images/pink-light-candle.jpeg';
import image4 from './assets/images/green-light-candle.jpeg';
import image5 from './assets/images/beach.jpg';

//import { image1, image2, image3, image4, image5 } from './assets/images/index';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px',
    flexDirection: 'column',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    opacity:' 1',
  },
  card: {
    display: 'flex',
    width: '100%',
    marginTop: '20px',
  },
  imagesContainer: {
    flex: '70%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionContainer: {
    flex: '30%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    padding: '20px',
    width: '35%'
  },
  controlButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
    marginLeft: '-450px',
    width: '58%',
  },
  button: {
    margin: '0 10px',
  },
  slideshowToggle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '25px',
  },
  thumbnailsContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
    marginLeft: '-150px',
  },
  thumbnail: {
    width: '100px',
    height: '100px',
    cursor: 'pointer',
    borderRadius: '12px',
    marginRight: '10px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    flexShrink: 0,
  },
  viewer: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '50px',
    textAlign: 'left'
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'left',
    color: '#333',
    fontFamily: 'Ubuntu, Regular',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.5',
    textAlign: 'left',
    color: '#666',
    fontFamily: 'Ubuntu, Regular',
  },
}));

const CatalogViewer = () => {
  const classes = useStyles();

  const catalogsList = [
    {
      thumb: image1,
      image: image1,
      title: 'Image 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat ligula eu dui commodo hendrerit. Donec id purus nec felis aliquet convallis nec nec eros. Vestibulum ultricies neque in orci viverra, non aliquam urna congue. Integer ac lorem efficitur, interdum sem a, varius urna. Duis ac ex non mi interdum faucibus. Donec vitae neque at odio bibendum auctor. Aenean quis rutrum lacus. Proin vel eros eget purus facilisis condimentum ac at tellus. Nulla ullamcorper auctor est, at fermentum velit bibendum nec. Nulla facilisi. Sed sollicitudin mi nec arcu commodo, ut viverra elit faucibus. Donec posuere ligula ac dui scelerisque tincidunt. Nunc a felis lorem. Curabitur consectetur commodo neque ut pharetra. In hac habitasse platea dictumst.',
    },
    {
      thumb: image2,
      image: image2,
      title: 'Image 2',
      description:
        'Integer non metus in dui posuere volutpat. Sed sem nisi, efficitur id metus ut, feugiat venenatis magna. Phasellus rutrum nunc et quam gravida consequat. Ut sit amet nunc augue. Nullam dignissim tellus in dolor tincidunt, nec venenatis tellus tempor. Maecenas cursus justo sed sagittis posuere. Vivamus id est non lorem rutrum tincidunt ac eget ipsum. Mauris aliquam, ipsum at varius sodales, enim dui dictum libero, eu venenatis justo nisi vel nisl. Proin eget nunc eu urna tincidunt consectetur. Etiam rhoncus viverra ante. In quis varius lacus. Aliquam sit amet rutrum dui. Nulla facilisi. Donec blandit rhoncus tellus, nec ullamcorper velit bibendum non.',
    },
    {
      thumb: image3,
      image: image3,
      title: 'Image 3',
      description:
        'Vivamus fermentum condimentum diam, nec tristique elit tincidunt in. Ut tincidunt nulla at est gravida, sed iaculis tellus hendrerit. Mauris feugiat semper condimentum. Nulla eu orci at magna placerat fringilla. Nullam venenatis orci ligula, a viverra velit egestas eu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Aliquam erat volutpat. Ut tempus scelerisque congue. Pellentesque dignissim lobortis ullamcorper. Nulla nec nunc quis neque rutrum finibus.',
    },
    {
      thumb: image4,
      image: image4,
      title: 'Image 4',
      description:
        'Morbi bibendum luctus risus, non consequat ex malesuada id. Nullam ullamcorper sapien in dui posuere fringilla. Aenean volutpat eleifend aliquet. Praesent bibendum mi ac interdum dignissim. Quisque tincidunt nibh in sollicitudin vestibulum. Maecenas tincidunt ipsum eu elit feugiat, ut bibendum velit finibus. In at consequat elit. Nunc eget neque sit amet ante dapibus bibendum. Curabitur ac rhoncus nulla. Pellentesque rhoncus purus metus, ut aliquam quam dapibus vel. Vivamus bibendum sollicitudin lorem eu tristique. Nullam vel arcu ullamcorper, volutpat justo a, ornare lacus. In et enim id arcu placerat dapibus.',
    },
    {
      thumb: image5,
      image: image5,
      title: 'Image 5',
      description:
        'Pellentesque mollis augue nec purus efficitur scelerisque. Fusce condimentum, metus at placerat efficitur, nulla dolor maximus turpis, ac fringilla ligula mi non urna. In vitae mi ac diam finibus dignissim at eget sem. Sed aliquam congue ex, id aliquam urna lobortis id. Nunc finibus est non facilisis scelerisque. Integer vitae metus id elit luctus euismod id non urna. Fusce a ante enim. Sed at nisl eget sapien placerat interdum. Nulla facilisi. Morbi in nibh ac est consectetur euismod. Phasellus ut faucibus lectus. Sed sed pharetra magna. Mauris auctor lectus at luctus tincidunt. Phasellus eget ex ac turpis lacinia mattis. Nullam varius rutrum tortor nec placerat. Donec laoreet fringilla arcu, sed efficitur lorem ultrices id. Suspendisse in volutpat est, ut lobortis est.',
    },
  ];

  const [catalogs] = useState([...catalogsList]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideTimer, setSlideTimer] = useState(null);
  const slideDuration = 3000;

  const selectedThumb = (index) => {
    setActiveIndex(index);
    if (slideTimer) {
      clearInterval(slideTimer);
      setSlideTimer(null);
    }
  };

  const startSlideshow = () => {
    if (slideTimer) {
      clearInterval(slideTimer);
      setSlideTimer(null);
    } else {
      const turnover = setInterval(() => {
        setActiveIndex((prevCount) =>
          prevCount === catalogs.length - 1 ? 0 : prevCount + 1
        );
      }, slideDuration);
      setSlideTimer(turnover);
    }
  };

  const previousImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? catalogs.length - 1 : prevIndex - 1
    );
    if (slideTimer) {
      clearInterval(slideTimer);
      setSlideTimer(null);
    }
  };

  const nextImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === catalogs.length - 1 ? 0 : prevIndex + 1
    );
    if (slideTimer) {
      clearInterval(slideTimer);
      setSlideTimer(null);
    }
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.card}>
          <div className={classes.imagesContainer}>
            <Viewer catalogImage={catalogs[activeIndex].image} className={classes.viewer} />
          </div>
          <div className={classes.descriptionContainer}>
            <h2>{catalogs[activeIndex].title}</h2>
            <p>{catalogs[activeIndex].description}</p>
          </div>
        </div>
        <div className={classes.controlButtons}>
          <Button className={classes.button} onClick={previousImage}>
            <ArrowBack />
          </Button>
          <div className={classes.thumbnailsContainer}>
            {catalogs.map((catalog, index) => (
              <div
                key={index}
                className={classes.thumbnail}
                style={{
                  backgroundImage: `url(${catalog.thumb})`,
                  border:
                    activeIndex === index
                      ? '2px solid #39424e'
                      : '2px solid transparent',
                }}
                onClick={() => selectedThumb(index)}
              ></div>
            ))}
          </div>
          <Button className={classes.button} onClick={nextImage}>
            <ArrowForward />
          </Button>
        </div>
        <div className={classes.slideshowToggle}>
          <Button className={classes.button} onClick={startSlideshow}>
            {slideTimer ? <Pause /> : <PlayArrow />}
          </Button>
          <label>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  );
};

export default CatalogViewer;
