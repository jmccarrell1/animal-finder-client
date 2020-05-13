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

    axios
      .get('http://localhost:3000/dogs')
      .then((response) => response.data)
      .then((data) => {
        dispatch(data);
      });

    dispatch({
      type: 'update_search',
      payload: {
        animals: [
          {
            id: 46363825,
            organization_id: 'MS166',
            url:
              'https://www.petfinder.com/dog/arnold-one-adorable-puppy-46363825/il/chicago/mercer-animal-rescue-ms166/?referrer_id=93207fa4-4d64-43c0-9c0a-44da255e832b',
            type: 'Dog',
            species: 'Dog',
            breeds: {
              primary: 'Labrador Retriever',
              secondary: 'American Staffordshire Terrier',
              mixed: true,
              unknown: false,
            },
            colors: {
              primary: 'Black',
              secondary: 'White / Cream',
              tertiary: 'Blue',
            },
            age: 'Baby',
            gender: 'Male',
            size: 'Medium',
            coat: 'Short',
            attributes: {
              spayed_neutered: true,
              house_trained: true,
              declawed: null,
              special_needs: false,
              shots_current: true,
            },
            environment: {
              children: null,
              dogs: true,
              cats: null,
            },
            tags: [],
            name: 'Arnold - one adorable puppy',
            description:
              'Arnold is our 4 month old lab  mix puppy.  He weighs 26 lbs. now so we believe he will be...',
            photos: [
              {
                small:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/1/?bust=1571871729&width=100',
                medium:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/1/?bust=1571871729&width=300',
                large:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/1/?bust=1571871729&width=600',
                full:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/1/?bust=1571871729',
              },
              {
                small:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/2/?bust=1571871732&width=100',
                medium:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/2/?bust=1571871732&width=300',
                large:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/2/?bust=1571871732&width=600',
                full:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/2/?bust=1571871732',
              },
              {
                small:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/3/?bust=1571871736&width=100',
                medium:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/3/?bust=1571871736&width=300',
                large:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/3/?bust=1571871736&width=600',
                full:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/3/?bust=1571871736',
              },
              {
                small:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/4/?bust=1571871742&width=100',
                medium:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/4/?bust=1571871742&width=300',
                large:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/4/?bust=1571871742&width=600',
                full:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46363825/4/?bust=1571871742',
              },
            ],
            status: 'adoptable',
            status_changed_at: '2019-10-23T23:12:21+0000',
            published_at: '2019-10-23T23:12:21+0000',
            distance: null,
            contact: {
              email: 'merceranimalrescue@gmail.com',
              phone: '901-651-6322',
              address: {
                address1: null,
                address2: null,
                city: 'Chicago',
                state: 'IL',
                postcode: '60605',
                country: 'US',
              },
            },
            _links: {
              self: {
                href: '/v2/animals/46363825',
              },
              type: {
                href: '/v2/types/dog',
              },
              organization: {
                href: '/v2/organizations/ms166',
              },
            },
          },
          {
            id: 46364110,
            organization_id: 'TX95',
            url:
              'https://www.petfinder.com/dog/hermione-46364110/tx/buchanan-dam/hill-country-humane-society-tx95/?referrer_id=93207fa4-4d64-43c0-9c0a-44da255e832b',
            type: 'Dog',
            species: 'Dog',
            breeds: {
              primary: 'Labrador Retriever',
              secondary: null,
              mixed: true,
              unknown: false,
            },
            colors: {
              primary: 'Black',
              secondary: null,
              tertiary: null,
            },
            age: 'Baby',
            gender: 'Male',
            size: 'Medium',
            coat: 'Short',
            attributes: {
              spayed_neutered: false,
              house_trained: false,
              declawed: null,
              special_needs: false,
              shots_current: false,
            },
            environment: {
              children: null,
              dogs: true,
              cats: true,
            },
            tags: [],
            name: 'Hermione',
            description:
              'MY NAME IS:  Hermione\nPOSTED TO PETFINDER DATE: Oct 23, 2019\nSIZE: 14 pounds\nAPPROXIMATE AGE: 5 months\nSHELTER STAFF...',
            photos: [
              {
                small:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46364110/1/?bust=1571872273&width=100',
                medium:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46364110/1/?bust=1571872273&width=300',
                large:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46364110/1/?bust=1571872273&width=600',
                full:
                  'https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/46364110/1/?bust=1571872273',
              },
            ],
            status: 'adoptable',
            status_changed_at: '2019-10-23T23:12:04+0000',
            published_at: '2019-10-23T23:12:04+0000',
            distance: null,
            contact: {
              email: 'hillcountryhs@gmail.com',
              phone: '(512) 793-5463',
              address: {
                address1: '9150 Ranch Road 1431 West',
                address2: null,
                city: 'Buchanan Dam',
                state: 'TX',
                postcode: '78609',
                country: 'US',
              },
            },
            _links: {
              self: {
                href: '/v2/animals/46364110',
              },
              type: {
                href: '/v2/types/dog',
              },
              organization: {
                href: '/v2/organizations/tx95',
              },
            },
          },
          {
            id: 46364111,
            organization_id: 'KY102',
            url:
              'https://www.petfinder.com/dog/a672563-46364111/ky/louisville/louisville-metro-animal-services-ky102/?referrer_id=93207fa4-4d64-43c0-9c0a-44da255e832b',
            type: 'Dog',
            species: 'Dog',
            breeds: {
              primary: 'Cairn Terrier',
              secondary: 'Mixed Breed',
              mixed: true,
              unknown: false,
            },
            colors: {
              primary: null,
              secondary: null,
              tertiary: null,
            },
            age: 'Adult',
            gender: 'Male',
            size: 'Small',
            coat: null,
            attributes: {
              spayed_neutered: false,
              house_trained: false,
              declawed: null,
              special_needs: false,
              shots_current: false,
            },
            environment: {
              children: null,
              dogs: null,
              cats: null,
            },
            tags: [],
            name: 'A672563',
            description: null,
            photos: [],
            status: 'adoptable',
            status_changed_at: '2019-10-23T23:10:42+0000',
            published_at: '2019-10-23T23:10:42+0000',
            distance: null,
            contact: {
              email: 'AnimalServicesAdoption@louisvilleky.gov',
              phone: '(502) 473-7387',
              address: {
                address1: '3516 Newburg Road Adoption Center',
                address2: '3705 Manslick Road Intake Facility',
                city: 'Louisville',
                state: 'KY',
                postcode: '40218',
                country: 'US',
              },
            },
            _links: {
              self: {
                href: '/v2/animals/46364111',
              },
              type: {
                href: '/v2/types/dog',
              },
              organization: {
                href: '/v2/organizations/ky102',
              },
            },
          },
          {
            id: 46364102,
            organization_id: 'CA625',
            url:
              'https://www.petfinder.com/dog/annabelle-star-46364102/ca/santa-cruz/santa-cruz-county-animal-shelter-ca625/?referrer_id=93207fa4-4d64-43c0-9c0a-44da255e832b',
            type: 'Dog',
            species: 'Dog',
            breeds: {
              primary: 'Siberian Husky',
              secondary: 'Mixed Breed',
              mixed: true,
              unknown: false,
            },
            colors: {
              primary: null,
              secondary: null,
              tertiary: null,
            },
            age: 'Adult',
            gender: 'Female',
            size: 'Medium',
            coat: null,
            attributes: {
              spayed_neutered: false,
              house_trained: false,
              declawed: null,
              special_needs: false,
              shots_current: false,
            },
            environment: {
              children: null,
              dogs: null,
              cats: null,
            },
            tags: [],
            name: 'ANNABELLE*',
            description: null,
            photos: [],
            status: 'adoptable',
            status_changed_at: '2019-10-23T23:10:37+0000',
            published_at: '2019-10-23T23:10:37+0000',
            distance: null,
            contact: {
              email: 'asa143@co.santa-cruz.ca.us',
              phone: '(831) 454-7200',
              address: {
                address1: '1001 Rodriguez St.',
                address2: '2200 7th Ave.',
                city: 'Santa Cruz',
                state: 'CA',
                postcode: '95062',
                country: 'US',
              },
            },
            _links: {
              self: {
                href: '/v2/animals/46364102',
              },
              type: {
                href: '/v2/types/dog',
              },
              organization: {
                href: '/v2/organizations/ca625',
              },
            },
          },
          {
            id: 46364105,
            organization_id: 'FL205',
            url:
              'https://www.petfinder.com/dog/rex-46364105/fl/miami/miami-dade-animal-services-fl205/?referrer_id=93207fa4-4d64-43c0-9c0a-44da255e832b',
            type: 'Dog',
            species: 'Dog',
            breeds: {
              primary: 'Rottweiler',
              secondary: 'Mixed Breed',
              mixed: true,
              unknown: false,
            },
            colors: {
              primary: null,
              secondary: null,
              tertiary: null,
            },
            age: 'Adult',
            gender: 'Male',
            size: 'Medium',
            coat: null,
            attributes: {
              spayed_neutered: true,
              house_trained: false,
              declawed: null,
              special_needs: false,
              shots_current: false,
            },
            environment: {
              children: null,
              dogs: null,
              cats: null,
            },
            tags: [],
            name: 'REX',
            description: null,
            photos: [],
            status: 'adoptable',
            status_changed_at: '2019-10-23T23:10:36+0000',
            published_at: '2019-10-23T23:10:36+0000',
            distance: null,
            contact: {
              email: 'pets@miamidade.gov',
              phone: '(305) 418-7149',
              address: {
                address1: '3599 NW 79 Avenue Doral',
                address2: null,
                city: 'Miami',
                state: 'FL',
                postcode: '33122',
                country: 'US',
              },
            },
            _links: {
              self: {
                href: '/v2/animals/46364105',
              },
              type: {
                href: '/v2/types/dog',
              },
              organization: {
                href: '/v2/organizations/fl205',
              },
            },
          },
        ],
        pagination: {
          count_per_page: 5,
          total_count: 5,
          current_page: 1,
          total_pages: 1,
          _links: {
            next: {
              href: '',
            },
          },
        },
      },
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
