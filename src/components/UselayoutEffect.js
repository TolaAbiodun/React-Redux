import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";

const UselayoutEffect = () => {
  const baseUrl = "https://jsonplaceholder.typicode.com/comments";
  const [response, setResponse] = useState(" ");
  const [spinner, showSpinner] = useState("Please Wait...");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) =>
        setResponse(response.data[0].name));
    showSpinner('');
  },[]);

//   useLayoutEffect(() => {
//     showSpinner('');
//   }, []);

  return (
    <div>
      <h1>Welcome Page</h1>
      <p>{spinner}</p>
      {!spinner && <p>{response}</p>}
    </div>
  );
};

export default UselayoutEffect;
