import PopOverDialog from "./PopOverDialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const CountryCard = ({
  name,
  flag,
  population,
  region,
  capital,
  nativeName,
  subregion,
  topLevelDomain,
  languages,
  currencies,
  borders,
}) => {
  return (
    <Card className="p-5 my-10">
      <CardHeader className="flex flex-col gap-5">
        <img
          className="w-full h-[150px] object-contain"
          src={flag}
          alt={name}
        />
        <CardTitle className="font-bold text-[1.5rem]">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <p className="font-bold">
            Population:{" "}
            <span className="font-light">
              {population.toLocaleString("en-US")}
            </span>
          </p>
          <p className="font-bold">
            Continent: <span className="font-light"> {region}</span>
          </p>
          <p className="font-bold">
            Capital: <span className="font-light">{capital}</span>
          </p>
        </div>
      </CardContent>
      <PopOverDialog
        name={name}
        flag={flag}
        population={population}
        region={region}
        capital={capital}
        nativeName={nativeName}
        subregion={subregion}
        topLevelDomain={topLevelDomain} //array
        languages={languages} //array
        currencies={currencies} //array
        borders={borders} //array
      />
    </Card>
  );
};

export default CountryCard;
