import React, { Component } from "react";

const NamesList = ({ names }) => {
  return (
    <div className="namesList">
      <ul>
        {names.map((name) => <li>{name}</li>)}
      </ul>
    </div>
  );
};

export default NamesList;
