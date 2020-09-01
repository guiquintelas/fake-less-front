import React, {
  createContext, useState, useContext,
} from 'react';

type User = {
    username: string,
    password: string,
}

type UserContextType = {
  user?: User,
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>,
}

export const UserContext = createContext<UserContextType>({
  setUser: () => {
    throw new Error('state do provider ainda nao iniciado!');
  },
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>();
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

export function useUserContext() {
  return useContext(UserContext);
}
