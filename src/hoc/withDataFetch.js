import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

export default (managerId, WrappedComponent) => props => {
  const [manager, setManager] = useState({});
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    //Getting manager profile
    console.log("Fetching manager with id: ", managerId);
    axios
      .get(`${BASE_PATH}?id=${managerId}`)
      .then(response => setManager(response.data))
      .catch(error =>
        setError(
          "There was an error while fetching manager with id: ",
          managerId
        )
      );

    //Getting employees managed by
    console.log("Fetching employees with id: ", managerId);
    axios
      .get(`${BASE_PATH}?manager=${managerId}`)
      .then(response => setEmployees(response.data))
      .catch(error =>
        setError(
          "There was an error while fetching employees with id: ",
          managerId
        )
      );
  }, []);

  return (
    <WrappedComponent
      managerId={managerId}
      manager={manager}
      employees={employees}
      {...props}
    />
  );
};
