import React, { FC } from "react";
import { Country } from "@/store/slices/countriesSlice";

interface CardProps {
  onClick: () => void;
  flags: { svg: string; png: string };
  name: string;
  population: number;
  region: string;
  capital: string;
}

const Card: FC<CardProps> = ({
  flags,
  population,
  region,
  name,
  capital,
  onClick,
}) => (
  <article className="card" onClick={onClick}>
    <img src={flags?.png} alt="flag" />
    <div className="card__wrapper-discription">
      <h3 className="card__title">{name}</h3>
      <ul className="card__info">
        <li className="card__info-item">
          <span className="card__field">Population:</span>
          <span>{population.toLocaleString()}</span>
        </li>
        <li className="card__info-item">
          <span className="card__field">Region:</span>
          <span>{region}</span>
        </li>
        <li className="card__info-item">
          <span className="card__field">Capital:</span>
          <span>{capital}</span>
        </li>
      </ul>
    </div>
  </article>
);
export default Card;
