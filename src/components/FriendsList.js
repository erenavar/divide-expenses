import React from "react";
import initialFriends from "../utils/db.js";

export default function FriendsList() {
  const friends = initialFriends;
  console.log("friends :>> ", friends);
  return (
    <ul>
      {friends.map((item) => (
        <li>{item.id}</li>
      ))}
    </ul>
  );
}
