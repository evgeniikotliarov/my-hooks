import React, {useEffect, useMemo, useRef, useState} from 'react';

function complexCompute(number: number) {
  let i = 0;
  while (i < 1000000000) i++;
  return number*2;
}

function App() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number]);

  const styles = useMemo(() => ({
    color: colored ? "blue" : "red"
  }), [colored])

  useEffect(() => {
    console.log("styles change");
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Total: {computed}</h1>
      <button className="btn btn-success" onClick={() => setNumber(prevState => prevState + 1)}>Add</button>
      <button className="btn btn-danger" onClick={() => setNumber(prevState => prevState - 1)}>Remove</button>
      <button className="btn btn-warning" onClick={() => setColored(prevState => !prevState)}>Change</button>
    </div>
  );
}

export default App;
