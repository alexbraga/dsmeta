import Card from "./components/Card";
import Header from "./components/Header/index";

function App() {
  return (
    <>
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
