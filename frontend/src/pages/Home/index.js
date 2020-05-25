import React from 'react';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import './home.scss';

const CustomSlider = withStyles({
  root: {
    color: '#8dd7df',
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 220,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20%',
    },
  },
  textField: {
    [theme.breakpoints.up('md')]: {
      width: '20%',
    },
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  test: {
    marginRight: '5%',
  },
  slider: {
    [theme.breakpoints.up('md')]: {
      width: '30%',
      marginRight: '5%',
    },
    width: '100%',
    padding: '0 1rem',
  },
}));

const marks = [
  {
    value: 0,
    label: '€',
  },
  {
    value: 1,
    label: '€€',
  },
  {
    value: 2,
    label: '€€€',
  },
];
const Home = () => {
  const classes = useStyles();

  const fillDropdowns = () => {
    const options = [];
    for (let i = 0; i <= 10; i += 1) {
      options.push(
        <MenuItem key={i} value={i}>{i}</MenuItem>,
      );
    }
    return options;
  };

  return (
    // <Header />
    <main className="home">
      <section className="search">
        <h2 className="search__title">Où veux-tu aller?</h2>
        <form className="search__formular">
          <div className="row">
            <TextField id="country-input" label="Pays" className={classes.textField} size="small" />
            <TextField id="city-input" label="Ville" className={classes.textField} />
          </div>
          <div className="row">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Nombre de personnes</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Nombre de personnes"
              >
                {fillDropdowns()}
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Nombre de nuitées</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                // value={age}
                // onChange={handleChange}
                label="Nombre de nuitées"
              >
                {fillDropdowns()}
              </Select>
            </FormControl>
          </div>
          <div className="row">


            {/* <div className="sli">
                <Slider
                  defaultValue={0}
                  // getAriaValueText={valuetext}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="off"
                  step={1}
                  marks={marks}
                  min={0}
                  max={2}
                />
              </div> */}
            <Grid container spacing={0} className={classes.slider}>
              <Grid item className="slider__label" xs={2} md={12}>
                <p>Prix</p>
              </Grid>
              <Grid item xs container direction="column" alignItems="center" className="slider__component" md={12}>
                <Grid container alignItems="center" className="slider__marks">
                  <Grid item xs={4} className="slider__mark">
                    <p>€</p>
                  </Grid>
                  <Grid item xs={4} className="slider__mark">
                    <p>€€</p>
                  </Grid>
                  <Grid item xs={4} className="slider__mark">
                    <p>€€€</p>
                  </Grid>
                </Grid>
                <Grid item className="slider__bar" md={8} container xs={8}>
                  <CustomSlider
                    defaultValue={0}
                    // getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="off"
                    step={1}
                    marks
                    min={0}
                    max={2}
                  />
                </Grid>
              </Grid>
            </Grid>
            <FormControl variant="outlined" className={`${classes.formControl} ${classes.test}`}>
              <InputLabel id="demo-simple-select-outlined-label">Type d'hébergement</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                multiple
                value={marks}
                // onChange={handleChange}
                label="Type d'hébergement"
              >
                {marks.map((elt) => (
                  <MenuItem key={elt.value} value={elt.value}>{elt.value}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="row">
            <button className="search__submit" type="submit">Rechercher</button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default Home;
