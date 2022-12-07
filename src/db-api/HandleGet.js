import { useState } from "react";
const HandleGet = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  function handleGet() {
    // fatchdata();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3000/employees", requestOptions)
      // .then((response) => response.text())

      // .then((result) => console.log(result))
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
    setId("");
  }
  return handleGet;
};
export default HandleGet;
