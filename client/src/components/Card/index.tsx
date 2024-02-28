import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import NotificationButton from "../NotificationButton";
import DatePicker from "react-datepicker";
import axios from "axios";
import { BASE_URL } from "../../utils/request";
import { SaleData } from "../../models/saleData";
import Pagination from "../Pagination";
import { TailSpin } from "react-loader-spinner";

function Card() {
  const min = new Date("2021-06-27");
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);
  const [currentPage, setCurrentPage] = useState(0);

  const [data, setData] = useState<SaleData>({
    content: [],
    totalElements: 0,
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        if (minDate != null && maxDate != null) {
          const minDateISO = minDate.toISOString().slice(0, 10);
          const maxDateISO = maxDate.toISOString().slice(0, 10);

          const response = await axios.get(
            `${BASE_URL}/sales?minDate=${minDateISO}&maxDate=${maxDateISO}&page=${currentPage}`
          );

          setData(response.data);
        }
      } catch (error) {
        console.error("Error fetching sales data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [minDate, maxDate, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="card">
      <h2>Sales</h2>
      <div>
        <p className="form-label">From:</p>
        <div className="form-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="form-control"
          />
        </div>
        <p className="form-label">To:</p>
        <div className="form-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="form-control"
          />
        </div>
      </div>

      <div>
        <br />
        <Pagination
          currentPage={currentPage}
          totalCount={data.totalElements}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
        <br />
        {loading ? (
          <TailSpin
            visible={true}
            height="30"
            width="30"
            color="#9aaabe"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass="loader-container"
          />
        ) : (
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
              {data.content.map((sale) => (
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
                      <NotificationButton saleId={sale.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <br />

        <Pagination
          currentPage={currentPage}
          totalCount={data.totalElements}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Card;
