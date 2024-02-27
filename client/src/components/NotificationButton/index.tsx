import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios.get(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    if (response.status === 200) {
      toast.success("SMS sent successfully!");
    } else if (response.status === 500) {
      toast.error("Something went wrong. Please try again.");
    }
    // Add more conditions if needed for other status codes
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <div className="btn-notify" onClick={() => handleClick(saleId)}>
      <img src={icon} alt="Notify" />
    </div>
  );
}

export default NotificationButton;
