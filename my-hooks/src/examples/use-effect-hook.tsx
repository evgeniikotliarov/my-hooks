import React, {useEffect, useState} from 'react';

function App() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos, setPos] = useState({
    x: 0, y: 0
  })

  // useEffect(() => {
  //   console.log("useEffect")
  // })

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, [type])

  const mouseEventHandler = (event: any) => {
    setPos({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    console.log("componentDidMount");

    window.addEventListener("mousemove", mouseEventHandler)
    return () => {
      window.removeEventListener("mousemove", mouseEventHandler)
    }
  }, [])

  return (
    <div>
      <h1>Ресурс: {type}</h1>

  <button onClick={() => setType("users")}>Пользователи</button>
  <button onClick={() => setType("todos")}>Todo</button>
  <button onClick={() => setType("posts")}>Посты</button>

  {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
  <pre>{JSON.stringify(pos, null, 2)}</pre>
  </div>
);
}

export default App;
