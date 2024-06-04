import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function FetchData() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    (async () => {
    
try{
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setRecords(res.data);
        console.log(res.data);
      })
    }catch(err) {
        console.log(err);
    }
    }) ()
  }, []);

  return (
    <div>
      <table className=" table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 pt-32 text-start">ID</th>
            <th className="px-4 pt-32 text-start">Name</th>
            <th className="px-4 pt-32 text-start">Username</th>
            <th className="px-4 pt-32 text-start">Email</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td className=" px-4 py-2 text-start"> {r.id} </td>
              <td className=" px-4 py-2 text-start"> {r.name} </td>
              <td className=" px-4 py-2 text-start"> {r.username} </td>
              <td className=" px-4 py-2 text-start"> {r.email} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
