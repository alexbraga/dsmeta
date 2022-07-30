import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "./components/Card";
import Header from "./components/Header/index";

function App() {
  return (
    <>
      <ToastContainer autoClose={5000} />
      <Header />
      <main>
        <section id="sales">
          <div className="container">
            <Card />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
