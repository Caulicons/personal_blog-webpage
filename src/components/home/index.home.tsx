import { useState } from "react";
import duckLogo from "/duck.ico";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <a target="_blank">
          <img src={duckLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>My Blog, Quack Quack !</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Home;
