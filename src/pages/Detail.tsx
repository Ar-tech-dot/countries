import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useAppSelector from "../hooks/useAppSelector";
import { Country } from "@/store/slices/countriesSlice";
import { IoArrowBack } from "react-icons/io5";

const Detail: FC = () => {
  const { state }: { state: Country } = useLocation();
  const { list } = useAppSelector((state) => state.countries);

  const navigate = useNavigate();

  const borderCodeArray = state.borders || [];

  const borders = list.filter((cointry) =>
    borderCodeArray.includes(cointry.alpha3Code)
  );

  return (
    <div className="detail">
      <button className="detail__button" onClick={() => navigate(-1)}>
        <IoArrowBack />
        Go back
      </button>
      <section className="detail__card-info">
        <img className="detail__flag" src={state.flag} alt={state.name} />
        <div className="detail__discription">
          <div className="detail__discription-wrapper">
            <h1 className="detail__title">{state.name}</h1>
            <div className="detail__wrapper-list-items">
              <ul className="detail__list-items">
                <li className="detail__item">
                  <span className="detail__item-title">Native Name:</span>
                  <span className="detail__item-value">{state.nativeName}</span>
                </li>
                <li className="detail__item">
                  <span className="detail__item-title">Population:</span>
                  <span>{state.population.toLocaleString()}</span>
                </li>
                <li className="detail__item">
                  <span className="detail__item-title">Region:</span>
                  <span>{state.region}</span>
                </li>
                <li className="detail__item">
                  <span className="detail__item-title">Sub region:</span>
                  <span>{state.subregion}</span>
                </li>
                <li className="detail__item">
                  <span className="detail__item-title">Capital:</span>
                  <span>{state.capital}</span>
                </li>
              </ul>
              <ul className="detail__list-items">
                <li className="detail__item">
                  <span className="detail__item-title">Top Level Domain:</span>
                  {state.topLevelDomain.join(", ")}
                </li>
                <li className="detail__item">
                  <span className="detail__item-title">Currencies:</span>
                  {state.currencies?.map((c) => c.name).join(", ")}
                </li>
                <li className="detail__item">
                  <span className="detail__item-title">Languages:</span>
                  {state.languages?.map((l) => l.name).join(", ")}
                </li>
              </ul>
            </div>
            <div className="detail__borders">
              <span className="detail__borders-title">Border Countries:</span>
              <div className="detail__wrapper-border-items">
                {borders.length ? (
                  borders.map((b) => (
                    <span
                      key={b.name}
                      className="detail__border"
                      onClick={() =>
                        navigate(`/country/${b.name}`, {
                          state: b,
                        })
                      }
                    >
                      {b.name}
                    </span>
                  ))
                ) : (
                  <span>There is no border countries</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Detail;
