import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";

function Card() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  return (
    <div className="card">
      <h2>Sales</h2>
      <div>
        <div className="form-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="form-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="sales-table">
          <thead>
            <tr>
              <th className="table-lg-size">ID</th>
              <th className="table-md-size">Date</th>
              <th>Sales Consultant</th>
              <th className="table-lg-size">Visits</th>
              <th className="table-lg-size">Sales</th>
              <th>Total</th>
              <th>Notify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-lg-size">#123</td>
              <td className="table-md-size">08/07/2022</td>
              <td>Nome</td>
              <td className="table-lg-size">15</td>
              <td className="table-lg-size">10</td>
              <td>$ 55300.00</td>
              <td>
                <div className="btn-notify-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-lg-size">#123</td>
              <td className="table-md-size">08/07/2022</td>
              <td>Nome</td>
              <td className="table-lg-size">15</td>
              <td className="table-lg-size">10</td>
              <td>$ 55300.00</td>
              <td>
                <div className="btn-notify-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
            <tr>
              <td className="table-lg-size">#123</td>
              <td className="table-md-size">08/07/2022</td>
              <td>Nome</td>
              <td className="table-lg-size">15</td>
              <td className="table-lg-size">10</td>
              <td>$ 55300.00</td>
              <td>
                <div className="btn-notify-container">
                  <NotificationButton />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
