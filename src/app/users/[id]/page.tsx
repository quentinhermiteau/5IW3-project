"use client";

import { use, useEffect, useState } from "react";

export default function UserDetail({ params }) {
  const paramsBis = use(params);
  const [user, setUser] = useState(null);

  const fetchUser = () => {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${paramsBis.id}`)
      .then((res) => res.json())
      .then((json) => setUser(json));
  };

  console.log(user);

  useEffect(() => {
    fetchUser();
  }, []);

  return <div>Page détail utilisateur</div>;
}
