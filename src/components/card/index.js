import { useRef } from "react";
import Currency from "../../assets/currency-dollar.svg";
import Play from "../../assets/play.svg";

const Card = ({
  img,
  artistName,
  primaryGenreName,
  collectionPrice,
  trackCensoredName,
  src,
}) => {
  const audioRef = useRef(null);

  return (
    <div className="card-container">
      <div
        className="card-image"
        onPointerEnter={() => audioRef.current?.play()}
        onPointerLeave={() => audioRef.current?.pause()}
      >
        <div className="play">
          <img src={Play} width={32} height={32} alt="play" />
        </div>
        <img src={img} alt="play" className="img-thumbnail" />
        <div>
          <audio ref={audioRef} controls>
            <source src={src} type="audio/mpeg" />
            <source src={src} type="audio/ogg" />
            <source src={src} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="card-title">{artistName}</div>
          <div className="card-heading">{trackCensoredName}</div>
        </div>
        <div className="card-footer">
          <div className="badge">{primaryGenreName}</div>
          <div className="price">
            <img src={Currency} width={16} height={16} alt="usd price" />
            <div className="nominal"> {collectionPrice || 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
