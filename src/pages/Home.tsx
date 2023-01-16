import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Control from "../components/Control";

const Home: FC = () => {
  const { list, loading } = useAppSelector((state) => state.countries);
  const [filtredCountries, setFilteredCountries] = useState(list);
  const [errorControl, setErrorControl] = useState(() => "");

  const navigate = useNavigate();

  const handleSearch = (search: string, region: string): void => {
    let data = [...list];

    if (region) {
      data = data.filter((c) => c.region.includes(region));
    }

    if (search) {
      data = data.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredCountries(data);

    if (search && data.length < 1) {
      setErrorControl("Not found country");
    } else {
      setErrorControl("");
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Control onSearch={handleSearch} error={errorControl} />
          <div className="countries-item">
            {filtredCountries.map((country) => (
              <Card
                key={country.name}
                flags={country.flags}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
                onClick={() =>
                  navigate(`/country/${country.name}`, {
                    state: country,
                  })
                }
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
