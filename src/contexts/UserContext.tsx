import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserResponse } from '../@types/apiTypes';
import api from '../api';
import useDataMapper from '../hooks/useDataMapper';

export type User = {
  id: number;
  name: string;
  lastName: string;
  email: string;
  location: string | null;
  birthDate: Date | null;

  profileId: number;
  following: number[];
  followers: number[];
  avatarUrl: string;
};

export type ProfileFields = Pick<User, 'profileId' | 'following' | 'followers' | 'avatarUrl'>;

type ContextUser = undefined | User;

type RegisterParams = {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  location?: string;
  birthDate?: Date | null;
};

type UserContextType = {
  user: ContextUser;
  login: (email: string, password: string) => Promise<ContextUser | string>;
  logout: () => void;
  register: (args: RegisterParams) => Promise<ContextUser | string>;
  updateUser: (userFiels: Partial<User>) => void;
};

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
  register: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  logout: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  updateUser: () => {
    throw new Error('you should only use this context inside the provider!');
  },
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<ContextUser>(defaultUser);
  const { userAPIToUser } = useDataMapper();

  useEffect(() => {
    if (user) {
      localStorage.setItem(USER_STORAGE, JSON.stringify(user));
    } else {
      localStorage.removeItem(USER_STORAGE);
    }
  }, [user]);

  useEffect(() => {
    const fetchLoggedUser = async () => {
      if (user) {
        let result: UserResponse;

        try {
          result = await api.get('/usuario/eu');
          setUser(userAPIToUser(result));
        } catch (error) {
          setUser(undefined);
        }
      }
    };

    fetchLoggedUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,

        async login(email, password) {
          let result;

          try {
            result = await api.post('/account/login', {
              email,
              password,
            });
          } catch (error) {
            return error.message;
          }

          setUser(userAPIToUser(result));

          return result.data;
        },

        async logout() {
          await api.post('/account/logout');
          setUser(undefined);
        },

        async register({ name, lastName, location, birthDate, ...others }) {
          let result;

          try {
            const data: any = {
              nome: name,
              sobrenome: lastName,
              ...others,
            };

            if (location) {
              data.localidade = location;
            }

            if (birthDate) {
              data.aniversario = birthDate;
            }

            result = await api.post('/account/register', data);
          } catch (error) {
            return error.message;
          }

          setUser(userAPIToUser(result));

          return result.data;
        },

        updateUser(userFields) {
          setUser((oldUser) => ({
            ...(oldUser as User),
            ...userFields,
          }));
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
