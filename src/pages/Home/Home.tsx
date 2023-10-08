import { useEffect, useState } from "react";
import CountriesGrid from "../../components/Countries/CountriesGrid/CountriesGrid.tsx";
import InputField from "../../components/InputComponent/InputField/InputField.tsx";

const Home = () => {
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("all");
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountriesData, setFilteredCountriesData] = useState([]);

  console.log(value, "typing");
  console.log(selectValue, "selected!");
  console.log(countriesData, "new data");

  useEffect(() => {
    if (selectValue === "all") {
      fetch(`https://restcountries.com/v3.1/all
      `)
        .then((res) => res.json())
        .then((countries) => {
          return (
            setCountriesData(countries), setFilteredCountriesData(countries)
          );
        })
        .catch((err) => console.log("Error:", err.message));
    } else {
      fetch(`https://restcountries.com/v3.1/region/${selectValue}`, {
        method: "POST",
        body: event.target,
      })
        .then((res) => res.json())
        .then((countries) => {
          return (
            setCountriesData(countries), setFilteredCountriesData(countries)
          );
        })
        .catch((err) => console.log("Error:", err.message));
    }
  }, [selectValue]);

  const inputChangeHandler = (e: any) => {
    e.preventDefault();
    setValue(e.target.value);
    const filteredData = filteredCountriesData.filter((data) =>
      data?.name?.common?.toLowerCase()?.includes(e.target.value.toLowerCase())
    );
    setCountriesData(filteredData);
  };

  const selectChangeHandler = (e: any) => {
    setSelectValue(e.target.value);
  };

  return (
    <section>
      <form>
        <InputField
          inputChangeHandler={inputChangeHandler}
          selectChangeHandler={selectChangeHandler}
        />
      </form>
      <CountriesGrid countriesData={countriesData} />
    </section>
  );
};

export default Home;
