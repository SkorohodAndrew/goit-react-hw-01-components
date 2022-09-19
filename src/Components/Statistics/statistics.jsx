// import PropTypes from "prop-types";
import { StatisticsInfo } from "./StatisticsInfo";
import css from "./statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <StatisticsInfo key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
//   stats: PropTypes.arrayOf({
//     id: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }),
// };
