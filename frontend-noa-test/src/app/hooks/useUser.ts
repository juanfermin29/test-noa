'use client';
import { useEffect, useState } from 'react';
import { USERS } from '../config/constants/users.constants';

export const useUser = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!!storedUser) {
      setUser(storedUser);
      if (typeof window !== 'undefined') {
        localStorage.setItem("user", storedUser);
      }
    } else {
      setUser(USERS[0]);
      if (typeof window !== 'undefined') {
        localStorage.setItem("user", USERS[0]);
      }
    }
  }, []);

  return { user };
}