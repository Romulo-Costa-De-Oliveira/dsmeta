import notIcon from "../../assets/notification-icon.svg";

import './styles.css'

const NotificationButton = () => {
  return (
    <div className="dsmeta-red-btn">
      <img src={notIcon} alt="Notficar" />
    </div>
  );
};

export default NotificationButton;
