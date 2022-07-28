import "./styles.css";
import NotificationButton from "../NotificationButton";

function Card() {
  return (
    <div className="card">
      <h2>Sales</h2>
      <div>
        <div className="form-container">
          <input className="form-control" type="date" name="" id="" />
        </div>
        <div className="form-container">
          <input className="form-control" type="date" name="" id="" />
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
