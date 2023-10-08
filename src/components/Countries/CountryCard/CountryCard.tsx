import { CardContent, CardWrapper } from "./styles/CountryCard.styles";

interface CountryCardProps {
  country: [];
}

const CountryCard = (props: CountryCardProps) => {
  return (
    <CardWrapper>
      <div>
        <img className="card-img" src={props.country.flags.png} alt="flags" />
      </div>
      <CardContent>
        <h2>{props.country.name.common}</h2>
        <p>Population: {props.country.population}</p>
        <p>Region: {props.country.region}</p>
        <p>Capital: {props.country.capital}</p>
      </CardContent>
    </CardWrapper>
  );
};

export default CountryCard;
