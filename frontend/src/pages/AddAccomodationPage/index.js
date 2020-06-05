import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import ManageAccomodationPanel from 'src/containers/ManageAccomodationPanel';
import './addAccomodationPage.scss';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  formControl: {
    minWidth: 220,
    width: '40%',
    zIndex: 0,
  },
  description: {
    width: '100%',
  },
});

// // ================fake data
// const accomodation = {
//   pictures: [
//     `${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/Igloo.jpg`,
//     `${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/Igloo.jpeg`,
//   ],
//   title: 'Tente tout confort',
//   capacity: 3,
//   city: 'Toulouse',
//   country: 'France',
//   surface: 20,
//   electricity: true,
//   pipedWater: true,
//   accessibility: false,
//   smokers: true,
//   animals: true,
//   facebookLink: '',
//   instagramLink: 'https://instagram.com',
//   services: [2, 0, 4],
//   extras: [0, 1, 2, 3, 4, 5],
//   user: {
//     id: 1,
//     avatar: 'Igloo.jpeg',
//     pseudo: 'Jean-Mich\'',
//   },
// };

// // ================fake data
const AddAccomodationPage = ({
  submitAdd,
  submitEdit,
  changeType,
  typeValue,
  allTypes,
  setManageAccomodationPanel,
  servicesList,
  extrasList,
  priceValue,
  surfaceValue,
  nbNightsValue,
  capacityValue,
  titleValue,
  cityValue,
  countryValue,
  adressValue,
  facebookValue,
  instagramValue,
  descriptionValue,
  pipedWaterValue,
  electricityValue,
  accessibilityValue,
  smokersValue,
  animalsValue,
  changeFields,
  changeSwitchs,
  servicesValue,
  extrasValue,
  setInfo,
  resetInfo,
}) => {
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      setInfo(id);
    }
    else {
      resetInfo();
    }
  }, [extrasList]);

  const handleClick = (evt) => {
    console.log(servicesList);
    let content = servicesList;
    let identifier = 'services';
    if (evt.target.id === 'extras') {
      identifier = 'extras';
      content = extrasList;
    }
    console.log(content);
    setManageAccomodationPanel(content, identifier);
  };
  const handleTypeChange = (evt) => {
    changeType(evt.target.value);
  };

  const handleFieldsChange = (evt) => {
    console.log(evt.target.id);
    changeFields(evt.target.id, evt.target.value);
  };
  const handleSwitchsChange = (evt) => {
    console.log(evt.target.id);
    changeSwitchs(evt.target.id);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (id) {
      submitEdit(id);
    }
    else {
      submitAdd();
    }
  };

  const classes = useStyles();
  return (
    <main className="manage-accomodation">
      <form className="manage-accomodation__form" onSubmit={handleSubmit}>
        <div className="manage-accomodation__form__images">
          <div className="manage-accomodation__form__image">
            <label htmlFor="img1">
              <img src="" alt="" />
              <input type="radio" id="img1" />
            </label>
          </div>
          <button type="button">Ajouter</button>
        </div>

        <div className="manage-accomodation__form__info">
          <TextField
            variant="outlined"
            id="title"
            label="Titre"
            className={classes.formControl}
            // className={classes.textField}
            value={titleValue}
          // onChange={handleFieldsChange}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              // labelId="demo-simple-select-outlined-label"
              // id="demo-simple-select-outlined"
              id="type"
              value={(typeValue === -1) ? '' : typeValue}
              onChange={handleTypeChange}
              label="Type"
            >
              {allTypes.map((thematic) => (
                thematic.types.map((type) => (
                  <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
                ))
              ))}
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            id="capacity"
            label="Capacité"
            type="number"
            className={classes.formControl}
            // className={classes.textField}
            value={(capacityValue === 0) ? '' : capacityValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="nbNights"
            label="nb de nuits minimum"
            type="number"
            className={classes.formControl}
            // className={classes.textField}
            value={(nbNightsValue === 0) ? '' : nbNightsValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="surface"
            label="Surface"
            type="number"
            className={classes.formControl}
            // className={classes.textField}
            value={(surfaceValue === 0) ? '' : surfaceValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="price"
            label="Prix"
            type="number"
            className={classes.formControl}
            // className={classes.textField}
            value={(priceValue === 0) ? '' : priceValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="city"
            label="Ville"
            className={classes.formControl}
            // className={classes.textField}
            value={cityValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="country"
            label="Pays"
            className={classes.formControl}
            // className={classes.textField}
            value={countryValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="adress"
            label="Adresse"
            className={classes.formControl}
            // className={classes.textField}
            value={adressValue}
            onChange={handleFieldsChange}
          />
        </div>
        <div className="manage-accomodation__form__switchs">
          <FormControlLabel
            className={classes.formControl}
            control={(
              <Switch
                id="pipedWater"
                color="primary"
                checked={pipedWaterValue}
                onChange={handleSwitchsChange}
              />
            )}
            label="Eau courante"
            labelPlacement="top"
          />
          <FormControlLabel
            className={classes.formControl}
            control={(
              <Switch
                id="electricity"
                color="primary"
                checked={electricityValue}
                onChange={handleSwitchsChange}
              />
            )}
            label="Electricité"
            labelPlacement="top"
          />
          <FormControlLabel
            className={classes.formControl}
            control={(
              <Switch
                id="accessibility"
                color="primary"
                checked={accessibilityValue}
                onChange={handleSwitchsChange}
              />
            )}
            label="APMR"
            labelPlacement="top"
          />
          <FormControlLabel
            className={classes.formControl}
            control={(
              <Switch
                id="smokers"
                color="primary"
                checked={smokersValue}
                onChange={handleSwitchsChange}
              />
            )}
            label="Fumeurs"
            labelPlacement="top"
          />
          <FormControlLabel
            className={classes.formControl}
            control={(
              <Switch
                id="animals"
                color="primary"
                checked={animalsValue}
                onChange={handleSwitchsChange}
              />
            )}
            label="Animaux"
            labelPlacement="top"
          />
        </div>

        <div className="manage-accomodation__form__social-links">
          <TextField
            id="facebook"
            label="Lien Facebook"
            variant="outlined"
            // className={classes.textField}
            value={facebookValue}
            onChange={handleFieldsChange}
          />
          <TextField
            variant="outlined"
            id="instagram"
            label="Lien Instagram"
            // className={classes.textField}
            value={instagramValue}
            onChange={handleFieldsChange}
          />
        </div>
        <div className="manage-accomodation__form__bottom">
          <TextField
            id="description"
            label="Description"
            multiline
            rows={6}
            variant="outlined"
            className={classes.description}
            // className={classes.textField}
            value={descriptionValue}
            onChange={handleFieldsChange}
          />
          <div className="manage-accomodation__form__services-extras">
            <p>Services</p>
            <div className="manage-accomodation__form__services-extras__values">
              {servicesValue.map((service) => (
                <div className="manage-accomodation__form__services-extras__values__item" key={`service${service.id}`}>
                  <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${service.icon}`} alt="icon" />
                  <p>{service.name}</p>
                </div>
              ))}
            </div>
            <button id="services" type="button" className="manage-accomodation__form__services-extras__add" onClick={handleClick}>Ajouter</button>
          </div>
          <div className="manage-accomodation__form__services-extras">
            <p>Extras</p>
            <div className="manage-accomodation__form__services-extras__values">
              {extrasValue.map((extra) => (
                <div className="manage-accomodation__form__services-extras__values__item" key={`extra${extra.id}`}>
                  <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${extra.icon}`} alt="icon" />
                  <p>{extra.name}</p>
                </div>
              ))}
            </div>
            <button id="extras" type="button" className="manage-accomodation__form__services-extras__add" onClick={handleClick}>Ajouter</button>
          </div>
        </div>
        <button type="submit" className="manage-accomodation__form__submit">Enregistrer</button>
      </form>
      <ManageAccomodationPanel />
    </main>
  );
};
AddAccomodationPage.propTypes = {
  allTypes: PropTypes.array.isRequired,
};

export default AddAccomodationPage;
