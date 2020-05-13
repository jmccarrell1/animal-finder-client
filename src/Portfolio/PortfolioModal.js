import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AnimalCarousel from '../Carousel/AnimalCarousel';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import { minWidth } from '@material-ui/system';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const PortfolioModal = ({ isShowing, hide, item }) => {
  const matches = useMediaQuery('(min-width:380px)');

  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      paddingTop: '5%',
      justifyContent: 'center',
      height: '85%',
    },
    paper: {
      //   backgroundColor: theme.palette.background.paper,
      //   border: "2px solid #000",
      //   boxShadow: theme.shadows[5],
      padding: theme.spacing(0, 1, 0, 1),
      //   height: "90%",
      width: '90%',
      overflow: 'auto',
    },
    avatar: {
      backgroundColor: 'red',
    },
    twoColHeaderWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    headerColOne: {
      width: matches ? '50%' : '',
    },
    headerColTwo: {
      width: '50%',
      padding: '0px 0px 0px 15px',
    },
  }));

  const classes = useStyles();

  const formatBreed = (label, item) => {
    let value;

    if (item.primary) {
      value = item.primary;
    }
    if (item.secondary) {
      if (value) {
        value += ' / ';
      }
      value += item.secondary;
    }
    if (value && item.mixed) {
      value += ' (mixed)';
    }
    return formatItem(label, value);
  };

  const formatColor = (label, item) => {
    let value;

    if (item.primary) {
      value = item.primary;
    }
    if (item.secondary) {
      if (value) {
        value += ' / ' + item.secondary;
      }
    }
    if (item.tertiary) {
      if (value) {
        value += ' / ' + item.tertiary;
      }
    }
    return formatItem(label, value);
  };

  const isBoolean = (val) => {
    return 'boolean' === typeof val;
  };

  const boleanToYesNo = (val) => {
    if (isBoolean(val)) {
      return val ? 'yes' : 'no';
    }
    return;
  };

  const formatAttribute = (label, itemValue, defValue) => {
    let value = boleanToYesNo(itemValue);
    return formatItem(label, value, defValue);
  };

  const formatItem = (label, itemValue, defValue) => {
    let value;

    if (itemValue) {
      value = itemValue;
    } else {
      if (defValue) {
        value = defValue;
      }
    }

    return formatHtmlElement(label, value);
  };

  const formatHtmlElement = (label, val) => {
    if (label) {
      return (
        <div>
          {label}: {val}
        </div>
      );
    } else {
      if (val) {
        return <div>{val}</div>;
      }
    }
    return;
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isShowing}
      onClose={hide}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isShowing}>
        <div className={classes.paper}>
          <Card raised>
            <CardHeader
              title={formatItem(item.value.name, '', 'I need a name :(')}
              subheader={item.value.published_at}
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  D
                </Avatar>
              }
            />
            <CardContent>
              <div className={classes.twoColHeaderWrapper}>
                <div className={classes.headerColOne}>
                  <AnimalCarousel value={item.value} />
                </div>
                <div className={classes.headerColTwo}>
                  <div id="transition-modal-description">
                    <p>{item.value.description}</p>
                  </div>
                  {formatBreed('breed', item.value.breeds, 'unknown')}
                  {formatColor('color', item.value.colors)}
                  {formatItem('coat', item.value.coat)}
                  {formatItem('gender', item.value.gender)}
                  {formatItem('size', item.value.size)}
                  {formatAttribute(
                    'spayed / neutered',
                    item.value.attributes.spayed_neutered,
                    'unknown'
                  )}
                  {formatAttribute(
                    'house trained',
                    item.value.attributes.house_trained,
                    'unknown'
                  )}
                  {formatAttribute(
                    'shots current',
                    item.value.attributes.shots_current,
                    'unknown'
                  )}
                  {formatAttribute(
                    'special needs',
                    item.value.attributes.special_needs
                  )}
                  {formatAttribute(
                    'ok with children',
                    item.value.environment.children,
                    'unknown'
                  )}
                  {formatAttribute(
                    'ok with dogs',
                    item.value.environment.dogs,
                    'unknown'
                  )}
                  {formatAttribute(
                    'ok with cats',
                    item.value.environment.cats,
                    'unknown'
                  )}
                </div>
              </div>
              <CardContent>
                <div id="transition-modal-description">
                  <p>{item.value.description}</p>
                </div>
              </CardContent>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardContent>
          </Card>
        </div>
      </Fade>
    </Modal>
  );
};

export default PortfolioModal;
