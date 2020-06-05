import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { useParams } from 'react-router-dom';
import { Facebook, Instagram } from 'react-feather';
import { getServices, getExtras } from 'src/utils';
import DatePicker from 'src/components/DatePicker';
import './accomodationPage.scss';
import ContactOwnerPanel from '../../containers/ContactOwnerPanel';


const useStyles = makeStyles(() => ({
  pictures: {
    width: '100%',
    height: '100%',
    flex: '0 0 auto',
    margin: 'auto .5rem',
    borderRadius: '.5rem',
  },
}));

// ================fake data
const accomodation = {
  pictures: [
    'Igloo.jpg',
    'Igloo.jpeg',
  ],
  title: 'Tente tout confort',
  capacity: 3,
  description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque maxime accusantium culpa, autem a eligendi doloremque iure iusto voluptate at, expedita labore veritatis qui? Provident doloremque sed sint, asperiores facilis tempora sapiente deleniti quas illum ad recusandae praesentium sequi nemo aperiam ullam debitis. Neque nobis accusantium quo dolore in temporibus ut, amet enim eaque necessitatibus natus placeat, provident sunt perspiciatis illo sapiente aspernatur veniam porro aliquam dolorem id laudantium! Vel perferendis nihil nulla quas impedit et nostrum itaque dolorem atque iste, assumenda nesciunt deleniti dolorum libero voluptatibus sit. Ex amet, nulla quo blanditiis ad voluptas ut, pariatur ullam nihil soluta error corporis illo voluptates atque alias consequatur ea, et fugiat ipsum nobis fuga? Eveniet magni cum tempore distinctio? Labore omnis tempora nisi mollitia eum eveniet? Dolore provident nihil beatae sequi quas ipsam at dolorem mollitia dignissimos ratione, ea nisi! Eos id vitae velit, hic eum quo sed nesciunt doloribus! Sed consectetur magnam deleniti architecto quod tempora possimus, quam saepe unde reiciendis eius vero id exercitationem molestias tempore amet beatae optio consequuntur vel dolore porro incidunt hic, doloribus recusandae. Repellendus ea consequuntur veritatis voluptatibus at, cumque error minima id delectus asperiores quaerat illo quos sint atque ab? Distinctio, dolorem rerum. Ex, sit nihil harum asperiores necessitatibus consequatur eligendi molestiae vero officia facere impedit veniam, explicabo expedita. Ab quaerat nostrum fugiat harum magnam ea. Aspernatur tempora nobis quae aliquam asperiores maiores reprehenderit ipsam vitae, saepe error rerum, voluptatem veritatis! Tempore, dolor. Reprehenderit maxime architecto cumque quas. Facere, saepe cum iusto similique nobis praesentium porro maiores alias repellat possimus maxime enim nihil unde at aperiam dolorem debitis eligendi corporis inventore voluptatem minima. Dicta quibusdam necessitatibus at perspiciatis, qui possimus voluptas eum velit rem earum asperiores culpa quae, deleniti quos sed molestias? Suscipit deleniti voluptatem, modi at sunt asperiores architecto repudiandae eligendi exercitationem amet, doloribus officia atque dignissimos. Autem labore beatae distinctio eum amet atque voluptates dolores hic minus quo ipsum eligendi natus velit, cumque quibusdam aliquam voluptas. Architecto est aliquid iusto vero. Illum odit esse omnis molestiae eaque labore. Modi, quaerat! Commodi dolorem fugit facilis ullam et voluptas possimus temporibus eos tenetur minima. Ipsam nisi recusandae laborum quisquam excepturi, dolorem totam officia doloremque ratione vitae, eligendi quia. Unde dolores doloremque cupiditate eos, provident vero, minus rem aperiam enim error quos modi. Provident odio voluptatem, similique in libero maxime perspiciatis cupiditate culpa explicabo, a eaque perferendis. Veritatis eius, tempore sit suscipit repudiandae libero reprehenderit iure tenetur aut! Deserunt harum architecto eligendi nisi dignissimos rerum, dicta, saepe voluptatibus eum vero et sapiente quia ratione iure, accusantium laboriosam illum earum neque a ipsum repudiandae facilis. Harum asperiores possimus soluta voluptate blanditiis adipisci, iusto cum, amet ratione nesciunt tempore. Quibusdam voluptatibus doloribus, veritatis atque laboriosam perferendis sunt recusandae asperiores libero ea suscipit quia aliquam. Tempora, ducimus praesentium nobis commodi dolorum neque earum mollitia illo excepturi quisquam hic culpa magni explicabo reiciendis dicta. Iusto minima autem asperiores harum quod, explicabo ab porro itaque libero dolore, iste veniam consequuntur rerum possimus incidunt! Veniam nemo ea, atque blanditiis dolorem nobis.',
  city: 'Toulouse',
  country: 'France',
  surface: 20,
  electricity: true,
  pipedWater: true,
  accessibility: false,
  smokers: true,
  animals: true,
  facebookLink: '',
  instagramLink: 'https://instagram.com',
  services: [1, 2, 0, 4],
  extras: [0, 1, 2, 3, 4, 5],
  user: {
    id: 1,
    avatar: 'Igloo.jpeg',
    pseudo: 'Jean-Mich\'',
  },
};

// ================fake data
const AccomodationPage = ({
  changeDate,
  dateFromFormated,
  dateToFormated,
  dateFrom,
  dateTo,
  fetchAccomodation,
  servicesList,
  extrasList,
  setContactOwnerPanel,
  setLoginPanel,
  isLogged,
  sendReservation,
  accomodationId,
}) => {
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetchAccomodation(id);
  }, []);
  const classes = useStyles();
  const carouselSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  const handleReservationSubmit = (evt) => {
    evt.preventDefault();
    if (!isLogged) {
      setLoginPanel(true);
    }
    else {
      sendReservation(dateToFormated, dateFromFormated, accomodationId);
    }
  };

  const handleContactOwnerClick = () => {
    if (!isLogged) {
      setLoginPanel(true);
    }
    else {
      setContactOwnerPanel(true);
    }
  };

  const services = getServices(servicesList, accomodation.services);

  const extras = getExtras(extrasList, accomodation.extras);

  return (
    <main className="accomodation">
      <div className="accomodation__head">
        <div className="accomodation__head__carrousel">
          <Slider {...carouselSettings} className={classes.pictures}>
            {accomodation.pictures.map((picture) => (
              <div key={picture} className="accomodation__head__carrousel__item">
                <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/${picture}`} alt="" className="accomodation__head__carrousel__item__background" />
                <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/${picture}`} alt="" className="accomodation__head__carrousel__item__image" />
              </div>
            ))}
          </Slider>
          <div className="accomodation__head__carrousel__info">
            <h1 className="accomodation__head__carrousel__info__title">{accomodation.title}</h1>
            <p className="accomodation__head__carrousel__info__location">{`${accomodation.city}, ${accomodation.country}`}</p>
          </div>
        </div>
        <div className="accomodation__head__additional-info">
          <div className="accomodation__head__additional-info__characteristics">
            {accomodation.electricity && <img alt="electricity" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/RY2Kef5s.png`} />}
            {accomodation.pipedWater && <img alt="piped water" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/icon/RY2Kef5s.png`} />}
            {accomodation.animals && <img alt="animals" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/icon/RY2Kef5s.png`} />}
            {accomodation.smokers && <img alt="smockers" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/icon/RY2Kef5s.png`} />}
            {accomodation.accessibility && <img alt="accessibility" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/icon/RY2Kef5s.png`} />}
            <div className="accomodation__head__additional-info__characteristics__capacity">
              <p>{accomodation.capacity}</p>
              <img alt="accessibility" src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/icon/RY2Kef5s.png`} />
            </div>
            <p>{accomodation.surface} m²</p>
          </div>
          <div className="accomodation__head__additional-info__social-links">
            {accomodation.facebookLink !== '' && (
              <a href={accomodation.facebookLink}>
                <Facebook />
              </a>
            )}

            {accomodation.instragamLink !== '' && (
              <a href={accomodation.instagramLink}>
                <Instagram />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="accomodation__owner-card">
        <h2 className="accomodation__owner-card__title">Proposé par</h2>
        <div className="accomodation__owner-card__card">
          <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/${accomodation.user.avatar}`} alt="owner-avatar" className="accomodation__owner-card__card__avatar" />
          <p className="accomodation__owner-card__card__pseudo">
            {accomodation.user.pseudo}
          </p>
          <button type="button" onClick={handleContactOwnerClick}>Contacter le propriétaire</button>
          <form className="accomodation__owner-card__card__reservation" onSubmit={handleReservationSubmit}>
            {/* <h2 className="accomodation__owner-card__card__reservation__title">Je souhaite partir du</h2> */}
            <div className="accomodation__owner-card__card__reservation__form">
              <DatePicker changeDate={changeDate} dateValue={dateFrom} label="Je souhaite partir du" identifier="dateFrom" />
              <DatePicker changeDate={changeDate} dateValue={dateTo} label="au" identifier="dateTo" />
            </div>
            <button type="submit" className="">Reserver</button>
          </form>
        </div>
      </div>

      <div className="accomodation__content">

        <div className="accomodation__content__description">
          <h2 className="accomodation__content__description__title">Description</h2>
          <p className="accomodation__content__description__content"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque maxime accusantium culpa, autem a eligendi doloremque iure iusto voluptate at, expedita labore veritatis qui? Provident doloremque sed sint, asperiores facilis tempora sapiente deleniti quas illum ad recusandae praesentium sequi nemo aperiam ullam debitis. Neque nobis accusantium quo dolore in temporibus ut, amet enim eaque necessitatibus natus placeat, provident sunt perspiciatis illo sapiente aspernatur veniam porro aliquam dolorem id laudantium! Vel perferendis nihil nulla quas impedit et nostrum itaque dolorem atque iste, assumenda nesciunt deleniti dolorum libero voluptatibus sit. Ex amet, nulla quo blanditiis ad voluptas ut, pariatur ullam nihil soluta error corporis illo voluptates atque alias consequatur ea, et fugiat ipsum nobis fuga? Eveniet magni cum tempore distinctio? Labore omnis tempora nisi mollitia eum eveniet? Dolore provident nihil beatae sequi quas ipsam at dolorem mollitia dignissimos ratione, ea nisi! Eos id vitae velit, hic eum quo sed nesciunt doloribus! Sed consectetur magnam deleniti architecto quod tempora possimus, quam saepe unde reiciendis eius vero id exercitationem molestias tempore amet beatae optio consequuntur vel dolore porro incidunt hic, doloribus recusandae. Repellendus ea consequuntur veritatis voluptatibus at, cumque error minima id delectus asperiores quaerat illo quos sint atque ab? Distinctio, dolorem rerum. Ex, sit nihil harum asperiores necessitatibus consequatur eligendi molestiae vero officia facere impedit veniam, explicabo expedita. Ab quaerat nostrum fugiat harum magnam ea. Aspernatur tempora nobis quae aliquam asperiores maiores reprehenderit ipsam vitae, saepe error rerum, voluptatem veritatis! Tempore, dolor. Reprehenderit maxime architecto cumque quas. Facere, saepe cum iusto similique nobis praesentium porro maiores alias repellat possimus maxime enim nihil unde at aperiam dolorem debitis eligendi corporis inventore voluptatem minima. Dicta quibusdam necessitatibus at perspiciatis, qui possimus voluptas eum velit rem earum asperiores culpa quae, deleniti quos sed molestias? Suscipit deleniti voluptatem, modi at sunt asperiores architecto repudiandae eligendi exercitationem amet, doloribus officia atque dignissimos. Autem labore beatae distinctio eum amet atque voluptates dolores hic minus quo ipsum eligendi natus velit, cumque quibusdam aliquam voluptas. Architecto est aliquid iusto vero. Illum odit esse omnis molestiae eaque labore. Modi, quaerat! Commodi dolorem fugit facilis ullam et voluptas possimus temporibus eos tenetur minima. Ipsam nisi recusandae laborum quisquam excepturi, dolorem totam officia doloremque ratione vitae, eligendi quia. Unde dolores doloremque cupiditate eos, provident vero, minus rem aperiam enim error quos modi. Provident odio voluptatem, similique in libero maxime perspiciatis cupiditate culpa explicabo, a eaque perferendis. Veritatis eius, tempore sit suscipit repudiandae libero reprehenderit iure tenetur aut! Deserunt harum architecto eligendi nisi dignissimos rerum, dicta, saepe voluptatibus eum vero et sapiente quia ratione iure, accusantium laboriosam illum earum neque a ipsum repudiandae facilis. Harum asperiores possimus soluta voluptate blanditiis adipisci, iusto cum, amet ratione nesciunt tempore. Quibusdam voluptatibus doloribus, veritatis atque laboriosam perferendis sunt recusandae asperiores libero ea suscipit quia aliquam. Tempora, ducimus praesentium nobis commodi dolorum neque earum mollitia illo excepturi quisquam hic culpa magni explicabo reiciendis dicta. Iusto minima autem asperiores harum quod, explicabo ab porro itaque libero dolore, iste veniam consequuntur rerum possimus incidunt! Veniam nemo ea, atque blanditiis dolorem nobis. </p>
        </div>
        <div className="accomodation__content__services">
          <h2 className="accomodation__content__services__title">Services</h2>
          <div className="accomodation__content__services__items">
            {services.map((service) => (
              <div className="accomodation__content__services__item">
                <img alt={service.name} src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${service.icon}`} />
                <p className="accomodation__content__services__item__name">{service.name}</p>
              </div>
            ))}
          </div>
          {/* <button type="button">Voir tous les services</button> */}
        </div>

        <div className="accomodation__content__extras">
          <h2 className="accomodation__content__extras__title">Extras</h2>
          <div className="accomodation__content__extras__items">
            {extras.map((extra) => (
              <div className="accomodation__content__extras__item">
                <img alt={extra.name} src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${extra.icon}`} />
                <p className="accomodation__content__extras__item__name">{extra.name}</p>
              </div>
            ))}
          </div>
          {/* <button type="button">Voir tous les extras</button> */}
        </div>
      </div>
      <ContactOwnerPanel />
    </main>
  );
};
AccomodationPage.propTypes = {
};

export default AccomodationPage;
