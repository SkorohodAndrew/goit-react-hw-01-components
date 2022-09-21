import PropTypes from "prop-types";
import css from "./FriendList.module.css";

export const FriendListData = ({ avatar, name, isOnline }) => {
  return (
    <ul className="item">
      <li className={css.item}>
        <span className={`${css.status} ${css[isOnline]}`}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    </ul>
  );
};

FriendListData.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}.isRequired;
