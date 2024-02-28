import axios from "axios";
import { toast } from "react-toastify";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios
    .get(`${BASE_URL}/sales/${id}/notification`)
    .then((response) => toast.success("SMS sent successfully!"))
    .catch((error) => {
      // The line below is a fake success toast for demonstration purposes only, since the Twilio credentials are not set in the environment variables of the website live demo and this would trigger error toast notifications only. It should be deleted before running the code
      toast.success("SMS sent successfully!");

      // The code below must be uncommented in order to reproduce the intended behavior when handling errors from the messaging service

      // // Handle errors or network issues
      // console.error("Error:", error);
      // // You may want to trigger a toast for errors as well
      // toast.error("Something went wrong. Please try again.");
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
