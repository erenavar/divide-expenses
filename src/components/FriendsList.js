import React from "react";
import initialFriends from "../utils/db.js";
import Button from "./Button.js";

export default function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((item) => (
        <li key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          {item.balance < 0 && (
            <p className="red">
              You owe {item.name} {Math.abs(item.balance)}
            </p>
          )}
          {item.balance > 0 && (
            <p className="green">
              {item.name} owes you {item.balance}
            </p>
          )}
          {item.balance === 0 && <p>You and {item.name} are even</p>}
          <Button>Select</Button>
        </li>
      ))}
    </ul>
  );
}
