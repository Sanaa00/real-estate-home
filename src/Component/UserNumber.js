import React from "react";

function UserNumber() {
  const users = [
    { num: "2k+", text: "Property sold" },
    {
      num: "5+",
      text: "experience",
    },
    {
      num: "7",
      text: "Awards",
    },
  ];
  return (
    <div className="flex my-5 justify-between">
      {users.map((user) => {
        return (
          <div className="flex-col flex items-center ">
            <p className="text-xl font-bold">{user.num}</p>
            <p className="text-sm">{user.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default UserNumber;
