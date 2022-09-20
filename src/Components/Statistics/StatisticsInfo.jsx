import PropTypes from "prop-types";
import css from "./statistics.module.css";

export const StatisticsInfo = ({ label, percentage }) => {
  return (
    <li className={css.item}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
};

StatisticsInfo.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}.isRequired;
