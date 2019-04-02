import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      {`${name} , your current face detecting count is...`}
      <div className="white f1 ">{entries}</div>
    </div>
  );
};

export default Rank;
