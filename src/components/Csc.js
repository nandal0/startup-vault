import React, { useEffect } from "react";
// import "./styles.css";
import { useFormik } from "formik";
import {useState} from "react"
import Select from "react-select";
import { Country, State, City } from "country-state-city";

export default function Csc() {
    const [city,setCity]= useState([])
  const addressFromik = useFormik({
    initialValues: {
      country: "India",
      state: null,
      city: null,
    },
    onSubmit: (values) => console.log(JSON.stringify(values)),
  });
  console.log(State)
  // console.log(Country.getAllCountries())
  const countries = Country.getAllCountries();

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }));
  const updatedStates = (countryId) =>
    State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }));

  const updatedCities = (stateId) =>
    City.getCitiesOfCountry(stateId).map((city) => 
        // console.log(city)
         (
        
        {
      label: city.name,
      value: city.id,
      ...city,
    }));

  const { values, handleSubmit, setFieldValue, setValues } = addressFromik;
  console.log(values);

  useEffect(() => {
    if (values.country) {
     
      setCity(updatedCities(values.country.isoCode));
      console.log(city)
    }
  }, [values.country]);

  return (
    <div className="starup-location">
      <form onSubmit={handleSubmit}>
        <Select 
        className="select-country"
          id="country"
          name="country"
          label="country"
          options={updatedCountries}
          value={values.country}
          // onChange={value => {
          //   setFieldValue("country", value);
          //   setFieldValue("state", null);
          //   setFieldValue("city", null);
          // }}
          onChange={(value) => {
            setValues({ country: value, state: null, city: null }, false);
          }}
        />
        <Select
          id="state"
          className="select-country"

          name="state"
          options={updatedStates(values.country ? values.country.isoCode : null)}
          value={values.state}
          onChange={(value) => {
            setValues({ state: value, city: null }, false);
          }}
        />
        <Select
          id="city"
          name="city"
          className="select-country"

          // options={updatedCities(values.country ? values.country.isoCode : null)}
          options={city}
          value={values.city}
          onChange={(value) => setFieldValue("city", value)}
        />
        {/* <button type="submit">Submit</button> */}
        {/* <p>{JSON.stringify(.get)}</p> */}
      </form>
    </div>
  );
}
