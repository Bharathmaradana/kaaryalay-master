import React from 'react'

function Recruitdetails(props) {
    const details = [
      {
        id: 1,
        name: "John Doe",
        role: "developer",
        candidates: "4 candidates",
      },
      {
        id: 2,
        name: "VicWayne",
        role: "developer",
        candidates: "4 candidates",
      },
      {
        id: 3,
        name: "Jane Doe",
        role: "developer",
        candidates: "4 candidates",
      },
      {
        id: 3,
        name: "Jane Doe",
        role: "developer",
        candidates: "4 candidates",
      },
    ];
  return (
    <div >
      {details.map((user) => (
        <div className="details">
          {user.name}
      <p className="details-1">{user.role}</p>
          <p className="details-2">{user.candidates}</p>
        </div>
      ))}
    </div>
  );
}

export default Recruitdetails