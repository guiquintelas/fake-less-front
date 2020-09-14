import React, { createContext, useState, useContext, useEffect } from 'react';

type User =
  | undefined
  | {
      email: string;
      password: string;
      name?: string;
      lastName?: string;
    };

type UserContextType = {
  user: User;
  login: (email: string, password: string) => User | string;
  logout: () => void;
  register: (email: string, password: string) => User | string;
  getUserByEmail: (email: string) => User | undefined;
};

const defaultUsers: User[] = [
  { email: 'guiquintelas@gmail.com', password: '123', name: 'Guilherme', lastName: 'Quintelas' },
  { email: 'fulano@gmail.com', password: '123' },
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
    throw new Error('you should only use this context inside the provider!');
  },
  getUserByEmail: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  register: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  logout: () => {
    throw new Error('you should only use this context inside the provider!');
  },
});

const UserProvider: React.FC = ({ children }) => {
  const [users, setUsers] = useState<User[]>(defaultUsers);
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

        login(email, password) {
          const loggedUser = users.filter((el) => el?.email === email && el.password === password)[0];

          if (!loggedUser) {
            return 'Invalid credentials!';
          }

          setUser(loggedUser);
          return loggedUser;
        },

        logout() {
          setUser(undefined);
        },

        register(email, password) {
          const userAlreadyExists = users.filter((el) => el?.email === email)[0];

          if (userAlreadyExists) {
            return 'User already exists!';
          }

          const newUser = {
            email,
            password,
          };

          setUsers((oldUsers) => [...oldUsers, newUser]);

          return newUser;
        },

        getUserByEmail(email) {
          return users.filter((el) => el?.email === email)[0];
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
