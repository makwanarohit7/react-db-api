import { useState } from "react";
// import HandleGet from "./HandleGet";
function App() {
  const [id, setId] = useState("");
  const [designation, setDesignation] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [data, setData] = useState([]);

  // console.log(state);
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
  function handlePost() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      EmpID: id,
      Name: name,
      Designation: designation,
      City: city,
      ContactNo: number,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    return fetch("http://localhost:3000/employees", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  function handleDelete() {
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
    };

    fetch(`http://localhost:3000/employees/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  function handleUpdate() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      EmpID: id,
      Name: name,
      Designation: designation,
      City: city,
      ContactNo: number,
    });

    var requestOptions = {
      method: "PUT",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3000/employees/", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }
  // console.log(data);
  return (
    <div>
      <p>This is DB App in React </p>
      <div>
        <label>
          Enter Employee Id
          <input
            type="number"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee Name
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee Designation
          <input
            type="text"
            onChange={(e) => {
              setDesignation(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee City
          <input
            type="text"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Enter Employee ContactNo
          <input
            type="number"
            onChange={(e) => {
              setNumber(e.target.value);
            }}
          />
        </label>
        <br />
      </div>
      <button type="submit" onClick={handleGet}>
        GET
      </button>
      <button type="submit" onClick={handlePost}>
        POST
      </button>
      <button type="submit" onClick={handleDelete}>
        DELETE
      </button>
      <button type="submit" onClick={handleUpdate}>
        UPDATE
      </button>
      <div>
        <p>
          <b>Data Come From DataBase : </b>
        </p>
        <table border={1}>
          <th>Id</th>
          <th>Name</th>
          <th>Designation</th>
          <th>City</th>
          <th>ContactNo</th>
          {data.map((item) => {
            return (
              <tr>
                <td>{item.Id}</td>
                <td>{item.Name}</td>
                <td>{item.Designation}</td>
                <td>{item.City}</td>
                <td>{item.ContactNo}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default App;
