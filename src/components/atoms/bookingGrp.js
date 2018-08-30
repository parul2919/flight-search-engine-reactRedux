import React, { Fragment } from "react";
import type { Node } from "react";

type Props = {
  imageTitle: string,
  imgSrc: string,
  buttonTitle: string,
  onClickHandler: Function,
  bookFlight: Function
};

const BookingGrp = ({
  imageTitle,
  imgSrc,
  buttonTitle,
  bookFlight
}: Props): Node => {
  return (
    <Fragment>
      <div className="img">
        <img src={imgSrc} alt={imageTitle} />
      </div>
      <div className="text-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={bookFlight()}
        >
          {buttonTitle}
        </button>
      </div>
    </Fragment>
  );
};

export default BookingGrp;
