import React, { useState, useEffect } from "react";
import axios from "axios";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./styles.css";

const SalesCard = () => {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();
  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  useEffect(() => {
    axios.get("http://localhost:8080/sales").then((response) => {
      console.log(response.data);
    });
  }, []);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="show992">#51</td>
              <td className="show576">00/00/0000</td>
              <td>Anakin</td>
              <td className="show992">25</td>
              <td className="show992">10</td>
              <td>R$ 55500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#12</td>
              <td className="show576">00/00/0000</td>
              <td>Anakin</td>
              <td className="show992">25</td>
              <td className="show992">10</td>
              <td>R$ 55500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#22</td>
              <td className="show576">00/00/0000</td>
              <td>Anakin</td>
              <td className="show992">25</td>
              <td className="show992">10</td>
              <td>R$ 55500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="show992">#31</td>
              <td className="show576">00/00/0000</td>
              <td>Anakin</td>
              <td className="show992">25</td>
              <td className="show992">10</td>
              <td>R$ 55500.00</td>
              <td>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesCard;
