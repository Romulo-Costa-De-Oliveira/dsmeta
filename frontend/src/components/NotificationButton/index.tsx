import axios from "axios";
import notIcon from "../../assets/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import SalesCard from "../SalesCard";

import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("success");
  });
}

const NotificationButton = ({ saleId }: Props) => {
  return (
    <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
      <img src={notIcon} alt="Notficar" />
    </div>
  );
};

export default NotificationButton;
