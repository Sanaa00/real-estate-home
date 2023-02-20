import React from "react";

function UserNumber() {
  const users = [
    { id: 1, num: "2k+", text: "Property sold" },
    { id: 2, num: "5+", text: "experience" },
    { id: 3, num: "7", text: "Awards" },
  ];
  return (
    <div className="flex my-2  justify-between">
      {users.map((user) => {
        return (
          <div key={user.id} className="flex-col flex items-center ">
            <p className="text-xl font-bold">{user.num}</p>
            <p className="text-sm">{user.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserNumber;
