import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Porsche from "./images/porsche.jpg";
import Audi from "./images/audi.jpg";
import Mercedes from "./images/mercedes.jpg";
import Maserati from "./images/maserati.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Dream Garage</p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Porsche}
                title="Porsche"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut sapiente? Maiores consectetur recusandae sed sit. Nobis corporis maxime eaque facilis quidem? 
              Rerum harum beatae accusamus consequatur neque quia recusandae."
              />
            </div>
            <div className="column">
              <Course
                image={Audi}
                title="Audi"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut sapiente? Maiores consectetur recusandae sed sit. Nobis corporis maxime eaque facilis quidem? 
              Rerum harum beatae accusamus consequatur neque quia recusandae."
              />
            </div>
            <div className="column">
              <Course
                image={Mercedes}
                title="Mercedes"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut sapiente? Maiores consectetur recusandae sed sit. Nobis corporis maxime eaque facilis quidem? 
              Rerum harum beatae accusamus consequatur neque quia recusandae."
              />
            </div>
            <div className="column">
              <Course
                image={Maserati}
                title="Maserati"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ut sapiente? Maiores consectetur recusandae sed sit. Nobis corporis maxime eaque facilis quidem? 
              Rerum harum beatae accusamus consequatur neque quia recusandae."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
