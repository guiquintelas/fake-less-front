import React, { createContext, useState, useContext, useEffect } from 'react';

type User =
  | undefined
  | {
      username: string;
      password: string;
    };

type UserContextType = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

const USER_STORAGE = 'user';

const loadedJsonUserData = localStorage.getItem(USER_STORAGE);
let defaultUser: User;

try {
  defaultUser = loadedJsonUserData ? JSON.parse(loadedJsonUserData) : undefined;
} catch (_) {
  // if json is corrupted
  defaultUser = undefined;
}

export const UserContext = createContext<UserContextType>({
  user: defaultUser,
  setUser: () => {
    throw new Error('state not initialized');
  },
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE);
    }
  }, [user]);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserProvider;

export function useUserContext() {
  return useContext(UserContext);
}
