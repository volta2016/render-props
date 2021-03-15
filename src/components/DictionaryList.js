import React from "react";

const List = ({ data }) => {
  return (
    <ul>
      {Object.entries(data).map(([key, description]) => (
        <li key={key}>
          <strong>{key}: </strong>
          {description}
        </li>
      ))}
    </ul>
  );
};

export default List;
