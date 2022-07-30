import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { Sale } from "../../models/sale";

function Card() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    const minDateISO = minDate.toISOString().slice(0, 10);
    const maxDateISO = maxDate.toISOString().slice(0, 10);

    axios.get(`${BASE_URL}/sales?minDate=${minDateISO}&maxDate=${maxDateISO}`).then((response) => {
      setSales(response.data.content);
    });
  }, [minDate, maxDate]);

  return (
    <div className="card">
      <h2>Sales</h2>
      <div>
        <div className="form-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="form-control"
          />
        </div>
        <div className="form-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="form-control"
          />
        </div>
      </div>

      <div>
        <table className="sales-table">
          <thead>
            <tr>
              <th className="table-lg-size">ID</th>
              <th className="table-md-size">Date</th>
              <th>Seller</th>
              <th className="table-lg-size">Visits</th>
              <th className="table-lg-size">Sales</th>
              <th>Total</th>
              <th>Notify</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td className="table-lg-size">{sale.id}</td>
                <td className="table-md-size">
                  {new Date(sale.date).toLocaleDateString()}
                </td>
                <td>{sale.sellerName}</td>
                <td className="table-lg-size">{sale.visited}</td>
                <td className="table-lg-size">{sale.deals}</td>
                <td>$ {sale.amount.toFixed(2)}</td>
                <td>
                  <div className="btn-notify-container">
                    <NotificationButton />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
