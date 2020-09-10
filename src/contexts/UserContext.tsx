import React, { createContext, useState, useContext, useEffect } from 'react';

type User =
  | undefined
  | {
      username: string;
      password: string;
    };

type UserContextType = {
  user: User;
  login: (username: string, password: string) => User | string;
  logout: () => void;
  getUserByUsername: (username: string) => User | undefined;
};

const defaultUsers: User[] = [
  { username: 'guiquintelas', password: '123' },
  { username: 'fulano', password: '123' },
];

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
  login: () => {
    throw new Error('state not initialized');
  },
  getUserByUsername: () => {
    throw new Error('state not initialized');
  },
  logout: () => {
    throw new Error('state not initialized');
  },
});

const UserProvider: React.FC = ({ children }) => {
  const [users] = useState<User[]>([]);
  const [user, setUser] = useState<User>(defaultUser);

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,

        login(username, password) {
          const loggedUser = users.filter((el) => el?.username === username && el.password === password)[0];

          if (!loggedUser) {
            return 'Invalid credentials!';
          }

          setUser(loggedUser);
          return loggedUser;
        },

        logout() {
          setUser(undefined);
        },
        getUserByUsername(username) {
          return users.filter((el) => el?.username === username)[0];
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useUserContext() {
  return useContext(UserContext);
}
