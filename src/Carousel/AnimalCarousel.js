import React from "react";
import ImageGallery from "react-image-gallery";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const AnimalCarousel = item => {
  const useStyles = makeStyles(theme => ({
    modalImage: {
      maxHeight: "500px",
      [theme.breakpoints.down("md")]: {
        maxHeight: "400px"
      },
      [theme.breakpoints.down("sm")]: {
        maxHeight: "300px"
      },
      [theme.breakpoints.down("xs")]: {
        maxHeight: "200px",
        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        borderRadius: "0.25rem"
      }
    }
  }));

  const classes = useStyles();

  const children = item.value.photos.length
    ? item.value.photos.map(img => ({
        original: img.medium,
        originalClass: classes.modalImage
      }))
    : [];

  return (
    <ImageGallery
      items={children}
      showBullets={false}
      showThumbnails={false}
      showPlayButton={false}
      showBullets={false}
      showIndex={true}
      disableThumbnailScroll={true}
      showFullscreenButton={false}
    />
  );
};

export default AnimalCarousel;
