import CountryCard from "../CountryCard/CountryCard";
import { CountriesWrapper } from "./styles/CountriesGrid.styles";

interface CountriesGridProps {
  countriesData: [];
}

const CountriesGrid = (props: CountriesGridProps) => {
  console.log(props.countriesData);
  return (
    <CountriesWrapper>
      {props.countriesData.map((country) => (
        <CountryCard country={country} />
      ))}
    </CountriesWrapper>
  );
};

export default CountriesGrid;
