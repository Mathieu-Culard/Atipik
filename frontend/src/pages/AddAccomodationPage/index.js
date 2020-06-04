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

// ================fake data
const accomodation = {
  pictures: [
    `${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/Igloo.jpg`,
    `${process.env.REACT_APP_BACKEND_URL}/assets/type/picture/Igloo.jpeg`,
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
  services: [2, 0, 4],
  extras: [0, 1, 2, 3, 4, 5],
  user: {
    id: 1,
    avatar: 'Igloo.jpeg',
    pseudo: 'Jean-Mich\'',
  },
};

// ================fake data
const AddAccomodationPage = ({
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
  changeSwitchs
}) => {
  const handleClick = () => {
    setManageAccomodationPanel();
  };
  const handleFieldsChange = (evt) => {
    console.log(evt.target.value);
    changeFields(evt.target.id, evt.target.value);
  };
  const handleSwitchsChange = (evt) => {
    console.log(evt.target.id);
    changeSwitchs(evt.target.id);
  };

  const classes = useStyles();
  return (
    <main className="manage-accomodation">
      <form className="manage-accomodation__form">
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
            onChange={handleFieldsChange}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
            <Select
              // labelId="demo-simple-select-outlined-label"
              // id="demo-simple-select-outlined"
              // value={(value === 0) ? '' : value}
              // onChange={handleChangeValue}
              label="Type"
            >
              {/* {fillDropdowns()} */}
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
            <button type="button" className="manage-accomodation__form__services-extras__add" onClick={handleClick}>Ajouter</button>
          </div>
          <div className="manage-accomodation__form__services-extras">
            <p>Extras</p>
            <button type="button" className="manage-accomodation__form__services-extras__add" onClick={handleClick}>Ajouter</button>
          </div>
        </div>
        <button type="submit" className="manage-accomodation__form__submit">Enregistrer</button>
      </form>
    </main >
  );
};
AddAccomodationPage.propTypes = {
};

export default AddAccomodationPage;
