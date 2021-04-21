import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Swiper from "swiper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import { SectionHeader, IconAlternate } from "components/molecules";
import { CardReview } from "components/organisms";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles(() => ({
  swiperContainer: {
    width: "100%",
    maxWidth: 500
  },
  buttonConatiner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Reviews = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  React.useEffect(() => {
    new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-container .swiper-pagination",
        type: "bullets",
        clickable: true
      },
      autoplay: {
        delay: 2000
      }
    });
  });

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        overline={<Rating name="read-only" value={5} readOnly />}
        title={
          <span>
            <Typography component="span" variant="inherit" color="secondary">
              Take a look what our customers say
            </Typography>
          </span>
        }
      />
      <div className={clsx("swiper-container", classes.swiperContainer)}>
        <div className="swiper-wrapper">
          {data.map((item, index) => (
            <CardReview
              key={index}
              className={"swiper-slide"}
              noBorder
              noShadow
              text={item.feedback}
              icon={
                <IconAlternate
                  color="secondary"
                  fontIconClass="fas fa-quote-right"
                />
              }
              authorName={item.authorName}
              authorTitle={item.authorOccupation}
              authorPhoto={item.authorPhoto}
            />
          ))}
        </div>
        <div className="swiper-pagination" />
      </div>
      <div className={classes.buttonConatiner}>
        <Button
          href="https://www.google.com/search?q=tailormade+boston+wellesley&hl=en&sxsrf=ALeKk02BOtOODH1TpRe3mJKpQLSgf8s2sA%3A1617906954546&source=hp&ei=Ck1vYLDSHdCy5NoPirKt4AI&iflsig=AINFCbYAAAAAYG9bGjwBOw_tFFmrdCSrY-NiBaiaQBr0&oq=tailormade+boston+well&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6BAgjECc6AggmOgUIIRCrAlDWCFitImDMKGgAcAB4AIABe4gBygSSAQMzLjOYAQCgAQKgAQGqAQdnd3Mtd2l6&sclient=gws-wiz#lrd=0x89e38105ffa252f3:0x9e66888113f9c039,1,,,"
          target="_blank"
          variant="outlined"
          color="secondary"
        >
          View More
        </Button>
      </div>
    </div>
  );
};

Reviews.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired
};

export default Reviews;
