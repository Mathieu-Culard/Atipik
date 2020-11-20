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
import { Trash2 } from 'react-feather';
import Loader from 'src/components/Loader';
import background from 'src/assets/backgrounds/addAccomodationBackground.png';


const useStyles = makeStyles({
  formControl: {
    minWidth: 220,
    width: '35%',
    // zIndex: 0,
  },
  switch: {
    width: 'fit-content',
    padding: '1rem',
  },
  description: {
    width: '40%',
    height: '100%',
  },
  textfield: {
    minWidth: 220,
    width: '45%',
  },
});

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
  picturesURL,
  changePictures,
  deletePicture,
  editPicturesURL,
  deletePictureEdit,
  isLoading,
}) => {
  const { id } = useParams();

  useEffect(() => {
    if (id && !isLoading) {
      setInfo(id);
    }
    else {
      resetInfo();
    }
  }, [isLoading]);

  const handleClick = (evt) => {
    // console.log(servicesList);
    let content = servicesList;
    let identifier = 'services';
    if (evt.target.id === 'extras') {
      identifier = 'extras';
      content = extrasList;
    }
    // console.log(content);
    setManageAccomodationPanel(content, identifier);
  };

  const handleTypeChange = (evt) => {
    changeType(evt.target.value);
  };

  const handleFieldsChange = (evt) => {
    // console.log(evt.target.id);
    changeFields(evt.target.id, evt.target.value);
  };

  const handleSwitchsChange = (evt) => {
    // console.log(evt.target.id);
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

  const handleAddPicture = (evt) => {
    changePictures(evt.target.files);
  };

  let isEdit = false;
  if (id) {
    isEdit = true;
  } else {
    // eslint-disable-next-line no-param-reassign
    isLoading = false;
  }

  const classes = useStyles();
  return (
    <main className="manage-accomodation">
      <img src={background} alt="background" className="addBackground" />
      {isLoading && <Loader />}
      {!isLoading && (
        <form className="manage-accomodation__form" onSubmit={handleSubmit}>
          <div className="manage-accomodation__form__images">
            <div className="manage-accomodation__form__images__content">
              {isEdit && editPicturesURL.map((picture) => (
                <div key={picture.name} className="manage-accomodation__form__image">
                  <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/accomodation/${picture}`} alt="accomodation" />
                  <button type="button" data-id={picture} onClick={() => (deletePictureEdit(picture))} className="manage-accomodation__form__image__suppr"> <Trash2 color="#e64750" /> </button>
                </div>
              ))}
              {
                picturesURL.map((picture) => (
                  <div key={picture.name} className="manage-accomodation__form__image">
                    <img src={picture.file} alt="accomodation" />
                    <button type="button" data-id={picture} onClick={() => (deletePicture(picture))} className="manage-accomodation__form__image__suppr"> <Trash2 color="#e64750" /> </button>
                  </div>
                ))
              }


            </div>
            <label htmlFor="files-input" className="manage-accomodation__form__images__label">
              <input
                id="files-input"
                type="file"
                multiple
                onChange={handleAddPicture}
                className="manage-accomodation__form__images__input"
              />
              Ajouter
            </label>
          </div>
          <div className="manage-accomodation__form__info mui-inputs">
            <TextField
              // variant="outlined"
              id="title"
              label="Titre"
              className={classes.formControl}
              // className={classes.textField}
              value={titleValue}
              onChange={handleFieldsChange}
            />
            <FormControl className={classes.formControl}>
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
              // variant="outlined"
              id="capacity"
              label="Capacité"
              type="number"
              className={classes.formControl}
              // className={classes.textField}
              value={(capacityValue === 0) ? '' : capacityValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
              id="nbNights"
              label="nb de nuits minimum"
              type="number"
              className={classes.formControl}
              // className={classes.textField}
              value={(nbNightsValue === 0) ? '' : nbNightsValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
              id="surface"
              label="Surface"
              type="number"
              className={classes.formControl}
              // className={classes.textField}
              value={(surfaceValue === 0) ? '' : surfaceValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
              id="price"
              label="Prix"
              type="number"
              className={classes.formControl}
              // className={classes.textField}
              value={(priceValue === 0) ? '' : priceValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
              id="city"
              label="Ville"
              className={classes.formControl}
              // className={classes.textField}
              value={cityValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
              id="country"
              label="Pays"
              className={classes.formControl}
              // className={classes.textField}
              value={countryValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
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
              className={classes.switch}
              control={(
                <Switch
                  id="pipedWater"
                  color="primary"
                  checked={pipedWaterValue}
                  onChange={handleSwitchsChange}
                />
              )}
              label="Eau courante"
              labelPlacement="start"

            />
            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  id="electricity"
                  color="primary"
                  checked={electricityValue}
                  onChange={handleSwitchsChange}
                />
              )}
              label="Electricité"
              labelPlacement="start"

            />
            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  id="accessibility"
                  color="primary"
                  checked={accessibilityValue}
                  onChange={handleSwitchsChange}
                />
              )}
              label="Accès handicapés"
              labelPlacement="start"
            />
            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  id="smokers"
                  color="primary"
                  checked={smokersValue}
                  onChange={handleSwitchsChange}
                />
              )}
              label="Fumeurs"
              labelPlacement="start"

            />
            <FormControlLabel
              className={classes.switch}
              control={(
                <Switch
                  id="animals"
                  color="primary"
                  checked={animalsValue}
                  onChange={handleSwitchsChange}
                />
              )}
              label="Animaux"
              labelPlacement="start"

            />
          </div>
          <div className="manage-accomodation__form__social-links mui-inputs">
            <TextField
              id="facebook"
              label="Lien Facebook"
              // variant="outlined"
              className={classes.textfield}
              value={facebookValue}
              onChange={handleFieldsChange}
            />
            <TextField
              // variant="outlined"
              id="instagram"
              label="Lien Instagram"
              className={classes.textfield}
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
              // variant="outlined"
              // className={classes.description}
              // className={classes.textField}
              value={descriptionValue}
              onChange={handleFieldsChange}
            />
            <div className="manage-accomodation__form__services-extras">
              <p className="manage-accomodation__form__services-extras__title">Services</p>
              <div className="manage-accomodation__form__services-extras__values">
                <div className="manage-accomodation__form__services-extras__values__content">
                  {servicesValue.map((service) => (
                    <div className="manage-accomodation__form__services-extras__values__content__item" key={`service${service.id}`}>
                      <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${service.icon}`} alt="icon" />
                      <p>{service.name}</p>
                    </div>
                  ))}
                </div>
                <button id="services" type="button" className="manage-accomodation__form__services-extras__add" onClick={handleClick}>Ajouter</button>

              </div>
            </div>
            <div className="manage-accomodation__form__services-extras">
              <p className="manage-accomodation__form__services-extras__title">Extras</p>
              <div className="manage-accomodation__form__services-extras__values">
                <div className="manage-accomodation__form__services-extras__values__content">
                  {extrasValue.map((extra) => (
                    <div className="manage-accomodation__form__services-extras__values__content__item" key={`extra${extra.id}`}>
                      <img src={`${process.env.REACT_APP_BACKEND_URL}/assets/icon/${extra.icon}`} alt="icon" />
                      <p>{extra.name}</p>
                    </div>
                  ))}
                </div>
                <button id="extras" type="button" className="manage-accomodation__form__services-extras__add" onClick={handleClick}>Ajouter</button>
              </div>

            </div>
          </div>
          <button type="submit" className="manage-accomodation__form__submit">Enregistrer</button>
        </form>
      )}
      <ManageAccomodationPanel />
    </main>
  );
};

AddAccomodationPage.propTypes = {
  picturesURL: PropTypes.arrayOf(PropTypes.string).isRequired,
  submitAdd: PropTypes.func.isRequired,
  submitEdit: PropTypes.func.isRequired,
  changeType: PropTypes.func.isRequired,
  typeValue: PropTypes.number.isRequired,
  setManageAccomodationPanel: PropTypes.func.isRequired,
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
  priceValue: PropTypes.number.isRequired,
  surfaceValue: PropTypes.number.isRequired,
  nbNightsValue: PropTypes.number.isRequired,
  capacityValue: PropTypes.number.isRequired,
  titleValue: PropTypes.string.isRequired,
  cityValue: PropTypes.string.isRequired,
  countryValue: PropTypes.string.isRequired,
  adressValue: PropTypes.string.isRequired,
  facebookValue: PropTypes.string.isRequired,
  instagramValue: PropTypes.string.isRequired,
  descriptionValue: PropTypes.string.isRequired,
  pipedWaterValue: PropTypes.bool.isRequired,
  electricityValue: PropTypes.bool.isRequired,
  accessibilityValue: PropTypes.bool.isRequired,
  smokersValue: PropTypes.bool.isRequired,
  animalsValue: PropTypes.bool.isRequired,
  changeFields: PropTypes.func.isRequired,
  changeSwitchs: PropTypes.func.isRequired,
  servicesValue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  extrasValue: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  setInfo: PropTypes.func.isRequired,
  resetInfo: PropTypes.func.isRequired,
  allTypes: PropTypes.array.isRequired,
  changePictures: PropTypes.func.isRequired,
  deletePicture: PropTypes.func.isRequired,
  editPicturesURL: PropTypes.arrayOf(PropTypes.string).isRequired,
  deletePictureEdit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AddAccomodationPage;
