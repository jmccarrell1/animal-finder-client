import React, { useState, useReducer, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import axios from 'axios';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import { AnimalContext } from '../Contexts/AnimalContext';

export const Search = () => {
  const { state, dispatch } = useContext(AnimalContext);

  const onSubmit = async (values) => {};

  const validate = (values) => {};

  const onClick = (event) => {
    const newSearch = {
      terms: {
        age: '8',
        color: 'brown',
      },
    };

    const newPayload = [
      {
        id: '777',
      },
      {
        id: '888',
      },
    ];

    axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

    axios
      .get('http://localhost:3001/api/dogs')
      .then((response) => {
        console.log(response.data);
        dispatch({ type: 'update_search', payload: response.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: 'error', msg: err });
      });
  };

  return (
    <Form
      onSubmit={onClick}
      validate={validate}
      render={({ handleSubmit, reset, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Paper style={{ padding: 16 }}>
            <Grid container alignItems="flex-start" spacing={2}>
              <Grid item xs={2}>
                <Field
                  fullWidth
                  name="age"
                  component={Select}
                  label="Age"
                  formControlProps={{ fullWidth: true }}
                >
                  <MenuItem value="young">young</MenuItem>
                  <MenuItem value="senior">senior</MenuItem>
                  <MenuItem value="adult">adult</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={3}>
                <Field
                  fullWidth
                  name="gender"
                  component={Select}
                  label="Gender"
                  formControlProps={{ fullWidth: true }}
                >
                  <MenuItem value="male">male</MenuItem>
                  <MenuItem value="female">female</MenuItem>
                </Field>
              </Grid>
              <Grid item xs={2}>
                <Field
                  fullWidth
                  name="size"
                  component={Select}
                  label="Size"
                  formControlProps={{ fullWidth: true }}
                >
                  <MenuItem value="small">small</MenuItem>
                  <MenuItem value="large">large</MenuItem>
                  <MenuItem value="xlarge">xlarge</MenuItem>
                </Field>
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </Button>
              </Grid>
              <Grid item style={{ marginTop: 16 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    flexGrow: 1,
    //flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default Search;
