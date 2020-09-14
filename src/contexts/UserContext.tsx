import React, { createContext, useState, useContext, useEffect } from 'react';

export type User = {
  avatarUrl: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
};

type ContextUser = undefined | User;

type UserContextType = {
  user: ContextUser;
  login: (email: string, password: string) => ContextUser | string;
  logout: () => void;
  register: (email: string, password: string) => ContextUser | string;
  getUserByEmail: (email: string) => ContextUser | undefined;
};

const defaultUsers: ContextUser[] = [
  {
    email: 'guiquintelas@gmail.com',
    password: '123',
    name: 'Guilherme',
    lastName: 'Quintelas',
    avatarUrl: 'https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4',
  },
  { email: 'fulano@gmail.com', password: '123', name: 'Fulano', lastName: 'Ciclano', avatarUrl: '' },
];

const USER_STORAGE = 'user';

const loadedJsonUserData = localStorage.getItem(USER_STORAGE);
let defaultUser: ContextUser;

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
  const [users, setUsers] = useState<ContextUser[]>(defaultUsers);
  const [user, setUser] = useState<ContextUser>(defaultUser);

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
            name: '',
            lastName: '',
            avatarUrl: '',
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
