/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import { Facebook, Instagram } from 'react-feather';
import { getServices, getExtras } from 'src/utils';
import DatePicker from 'src/components/DatePicker';
import Loader from 'src/components/Loader';

import './accomodationPage.scss';

const useStyles = makeStyles(() => ({
  // pictures: {
  //   width: '100%',
  //   height: '100%',
  //   flex: '0 0 auto',
  //   margin: 'auto .5rem',
  //   borderRadius: '.5rem',
  // },
}));

const AccomodationPage = ({
  isLoading,
  accomodation,
  changeDate,
  dateFromFormated,
  dateToFormated,
  dateFrom,
  dateTo,
  fetchAccomodation,
  servicesList,
  extrasList,
  openModal,
  isLogged,
  sendReservation,
  accomodationId,
  owner,
}) => {
  const { id } = useParams();
  useEffect(() => {
    // console.log(id);
    fetchAccomodation(id);
  }, []);

  const classes = useStyles();
  const carouselSettings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // dots: true,
  };

  const handleReservationSubmit = (evt) => {
    evt.preventDefault();
    if (!isLogged) {
      openModal('Veuillez vous connecter avant de reserver', 'LoginForm');
    }
    else {
      sendReservation(dateToFormated, dateFromFormated, accomodationId);
    }
  };

  const handleContactOwnerClick = () => {
    if (!isLogged) {
      openModal('Veuillez vous connecter avant d\' envoyer un message', 'LoginForm');
    }
    else {
      openModal('Contacter le propriétaire de cet hébergement', 'ContactOwnerPanel');
    }
  };
  // console.log(accomodation.services);

  const services = getServices(servicesList, accomodation.services);
  const extras = getExtras(extrasList, accomodation.extras);

  return (

    <main className="accomodation">
      {isLoading && <Loader />}
      {!isLoading
        && (
          <>
            <div className="accomodation__head">
              <div className="accomodation__head__carrousel">
                <Slider {...carouselSettings}>
                  {accomodation.pictures.map((picture) => (
                    <div className="accomodation__head__carrousel__item" key={picture}>
                      <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${picture}`} alt="" />
                    </div>
                  ))}
                </Slider>
                <div className="accomodation__head__carrousel__infos">
                  <div className="accomodation__head__carrousel__info">
                    <h1 className="accomodation__head__carrousel__info__title">{accomodation.title}</h1>
                    <p className="accomodation__head__carrousel__info__location">{`${accomodation.city}, ${accomodation.country}`}</p>
                  </div>
                </div>
              </div>
              <div className="accomodation__head__additional-info">
                <div className="accomodation__head__additional-info__characteristics">
                  {accomodation.electricity && <img alt="electricity" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/electricity.png`} />}
                  {accomodation.pipedWater && <img alt="piped water" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/pipedWater.png`} />}
                  {accomodation.animals && <img alt="animals" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/Animaux.png`} />}
                  {accomodation.smokers && <img alt="smockers" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/smokers.png`} />}
                  {accomodation.accessibility && <img alt="accessibility" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/accessibility.png`} />}
                  <div className="accomodation__head__additional-info__characteristics__capacity">
                    <p>{accomodation.capacity}</p>
                    <img alt="capacity" src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/capacity.png`} />
                  </div>
                  <p>{accomodation.surface} m²</p>
                </div>
                <div className="accomodation__head__additional-info__social-links">
                  {accomodation.facebookLink !== null && (
                    <a href={accomodation.facebookLink}>
                      <Facebook size={50} strokeWidth={1} />
                    </a>
                  )}

                  {accomodation.instagramLink !== null && (
                    <a href={accomodation.instagramLink}>
                      <Instagram size={50} strokeWidth={1} />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="accomodation__body">

              <div className="accomodation__body__owner-card">
                <h2 className="accomodation__body__owner-card__title">Proposé par</h2>
                <div className="accomodation__body__owner-card__card">
                  <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/avatar/${owner.avatar}`} alt="owner-avatar" className="accomodation__body__owner-card__card__avatar" />
                  <p className="accomodation__body__owner-card__card__pseudo">
                    {owner.pseudo}
                  </p>
                  <button type="button" onClick={handleContactOwnerClick} className="accomodation__body__owner-card__card__contact">Contacter le propriétaire</button>
                  <form className="accomodation__body__owner-card__card__reservation" onSubmit={handleReservationSubmit}>
                    <h2 className="accomodation__body__owner-card__card__reservation__title">Je souhaite partir</h2>
                    <div className="accomodation__body__owner-card__card__reservation__form">
                      <label className="accomodation__body__owner-card__card__reservation__form__input">
                        <p>du</p>
                        <DatePicker changeDate={changeDate} dateValue={dateFrom} label="Date d'arrivée" identifier="dateFrom" />
                      </label>
                      <label className="accomodation__body__owner-card__card__reservation__form__input">
                        <p>au</p>
                        <DatePicker changeDate={changeDate} dateValue={dateTo} label="Date de départ" identifier="dateTo" />
                      </label>
                    </div>
                    <button type="submit" className="accomodation__body__owner-card__card__reservation__submit">
                      Reservez
                    </button>
                  </form>
                </div>
              </div>

              <div className="accomodation__body__content">
                <div className="accomodation__body__content__description">
                  {/* <h2 className="accomodation__body__content__description__title">Description</h2> */}
                  <p className="accomodation__body__content__description__content"> {accomodation.description} </p>
                </div>
                <div className="accomodation__body__content__services">
                  <h2 className="accomodation__body__content__services__title">Services</h2>
                  <div className="accomodation__body__content__services__items">
                    {services.map((service) => (
                      <div className="accomodation__body__content__services__item" key={`service${service.id}`}>
                        <img alt={service.name} src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${service.icon}`} />
                        <p className="accomodation__body__content__services__item__name">{service.name}</p>
                      </div>
                    ))}
                  </div>
                  {/* <button type="button">Voir tous les services</button> */}
                </div>
                <div className="accomodation__body__content__services">
                  <h2 className="accomodation__body__content__services__title">Extras</h2>
                  <div className="accomodation__body__content__services__items">
                    {extras.map((extra) => (
                      <div className="accomodation__body__content__services__item" key={`extra${extra.id}`}>
                        <img alt={extra.name} src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${extra.icon}`} />
                        <p className="accomodation__body__content__services__item__name">{extra.name}</p>
                      </div>
                    ))}
                  </div>
                  {/* <button type="button">Voir tous les extras</button> */}
                </div>
              </div>
            </div>
          </>
        )}
    </main>
  );
};
AccomodationPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  accomodation: PropTypes.shape({
    surface: PropTypes.number,
    capacity: PropTypes.number,
    title: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    animals: PropTypes.bool,
    electricity: PropTypes.bool,
    accessibility: PropTypes.bool,
    smokers: PropTypes.bool,
    pipedWater: PropTypes.bool,
    facebookLink: PropTypes.string,
    instagramLink: PropTypes.string,
    services: PropTypes.arrayOf(PropTypes.number),
    extras: PropTypes.arrayOf(PropTypes.number),
    pictures: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  changeDate: PropTypes.func.isRequired,
  dateFromFormated: PropTypes.string.isRequired,
  dateToFormated: PropTypes.string.isRequired,
  dateFrom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  dateTo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]).isRequired,
  fetchAccomodation: PropTypes.func.isRequired,
  servicesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  extrasList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setContactOwnerPanel: PropTypes.func.isRequired,
  // setLoginPanel: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  sendReservation: PropTypes.func.isRequired,
  accomodationId: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string,
    pseudo: PropTypes.string,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default AccomodationPage;
