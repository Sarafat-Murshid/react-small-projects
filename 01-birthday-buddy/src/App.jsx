import data from "./data";
import { useState } from "react";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} People Have Birthday's Today</h3>
          <List people={people}></List>
          <button className="btn btn-block" onClick={() => setPeople([])}>
            Clear All
          </button>
        </section>
      </main>
    </>
  );
};
export default App;
