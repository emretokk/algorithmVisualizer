import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        className="ml-4 text-green-400"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </>
  );
}

export default App;
