import React, {useState} from 'react';

function initialState() {
  return Math.trunc(Math.random() * 150)
}

function App() {
  const [counter, setCounter] = useState(() => {
    return initialState();
  })

  function increment() {
    setCounter(prev => prev + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }

  const [state, setState] = useState({
    title: "Counter",
    date: Date.now()
  })

  function updateTitle() {
    setState(prevState => {
      return {
        ...prevState,
        title: "New counter"
      }
    })
  }

  const {title} = state;
  return (
    <div>
      <div className={"container"}>
        <h1>{title}: {counter}</h1>
        <button onClick={increment} className="btn btn-primary">Добавить</button>
        <button onClick={decrement} className="btn btn-danger">Убрать</button>
        <button onClick={updateTitle} className="btn btn-default">Изменить</button>

        <pre>{JSON.stringify(state, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
