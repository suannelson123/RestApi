import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [region, setRegion] = useState("");
  const [countryName, setCountryName] = useState("");
  const apiKey = import.meta.env.VITE_MY_API_KEY;

  const filteredContinent = [
    "All",
    "Asia",
    "Europe",
    "Africa",
    "Oceania",
    "Americas",
    "Polar",
    "Antarctic Ocean",
    "Antarctic",
  ];

  const fetchData = async () => {
    if (!apiKey) {
      console.error("API key is missing");
      return;
    }

    let apiUrl = `https://restcountries.com/v2/all`;
    if (region && region !== "All") {
      apiUrl = `https://restcountries.com/v2/region/${region}`;
    }

    try {
      setLoading(true);
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      });

      if (!response.ok) {
        console.log(response.status);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      const countriesArray = Object.values(result);
      setData(countriesArray);
    } catch (error) {
      console.error("Failed to fetch data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterCountries = () => {
    if (!countryName.trim()) {
      return data;
    }

    const regex = new RegExp(countryName, "gi");
    return data.filter((country) => country.name.match(regex));
  };

  useEffect(() => {
    fetchData();
  }, [region]);

  const values = {
    data: filterCountries(),
    loading,
    setData,
    region,
    setRegion,
    filteredContinent,
    countryName,
    setCountryName,
    fetchData,
  };

  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ApiContext, ApiProvider };
