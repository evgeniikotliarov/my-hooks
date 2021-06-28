import React from "react";
import {useHistory} from "react-router-dom"

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return(
    <React.Fragment>
      <h1>Info Page</h1>
      <button className={"btn"} onClick={() => history.push("/")}>Return Todos Page</button>
    </React.Fragment>
  )
}