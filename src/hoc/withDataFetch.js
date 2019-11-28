import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_PATH } from "../constants/APIroutes";

export default (managerId, WrappedComponent) => props => {
  const [manager, setManager] = useState({});
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    //Getting manager profile
    axios
      .get(`${BASE_PATH}?id=${managerId}`)
      .then(response => setManager(response.data[0] ? response.data[0] : {}))
      .catch(error =>
        setError(
          "There was an error while fetching manager with id: ",
          managerId
        )
      );

    //Getting employees managed by
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
