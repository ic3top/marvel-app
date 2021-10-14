import './appBanner.scss';
import avengersImg from '../../resources/images/avengers.png';
import avengersLogoImg from '../../resources/images/avengers_logo.png';

export const AppBanner = () => (
  <div className="app__banner">
    <img src={avengersImg} alt="Avengers" />
    <div className="app__banner-text">
      New comics every week!
      <br />
      Stay tuned!
    </div>
    <img src={avengersLogoImg} alt="Avengers logo" />
  </div>
);
