import React, {useEffect, useRef, useState} from 'react';

function App() {
  // const [renderCount, setRenderCount] = useState(1);
  const [value, setValue] = useState("init");
  const renderCount = useRef(1);
  const inputRef = useRef(null);
  const prevRef = useRef("");

  useEffect(() => {
    // setRenderCount(prevState => prevState + 1)
    renderCount.current++;
    // @ts-ignore
    console.log(inputRef.current.value, "inputRef ");
  })

  useEffect(() => {
    prevRef.current = value;
  }, [value])

  // @ts-ignore
  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Render: {renderCount.current}</h1>
      <h2>Prev state: {prevRef.current}</h2>
      <input ref={inputRef} type="text" onChange={event => setValue(event.target.value)} value={value}/>
      {/* eslint-disable-next-line no-restricted-globals */}
      <button className="btn btn-success" onClick={focus}>Btn</button>
    </div>
  );
}

export default App;
