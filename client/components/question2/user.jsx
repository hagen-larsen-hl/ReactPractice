import { useState, useEffect } from "react";
import { Button } from "../common/button";

export const User = ({ user }) => {
  const [color, setColor] = useState({color: "black"});

  useEffect(async () => {
    if (user.isAdmin) {
      setColor({color: "green"});
    }
  }, []);

  return (
    <div className="flex border-2 rounded m-4 p-4">
      <div className="">
        <strong style={ color }>
          Name: {user.name}
        </strong>
        <div>
          <strong style={ color }>Email: {user.email}</strong>
        </div>
      </div>
    </div>
  );
};
