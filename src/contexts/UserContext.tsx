import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../api';

export type User = {
  id: string | number;
  profileId: number;
  name: string;
  lastName: string;
  email: string;
  location: string | null;
  birthDate: string | null;
  avatarUrl?: string;
};

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
};

type UserResponse = {
  data: {
    usuarioId: number;
    nome: string;
    sobrenome: string;
    email: string;
    aniversario: string | null;
    localidade: string | null;

    perfil: {
      perfilId: number;
      amizades: null;
      privado: boolean;
      userId: number;
    };
  };
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
});

const UserProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<ContextUser>(defaultUser);

  const saveUser = ({ data }: UserResponse) => {
    setUser({
      id: data.usuarioId,
      profileId: data.perfil.perfilId,
      name: data.nome,
      lastName: data.sobrenome,
      email: data.email,
      birthDate: data.aniversario,
      location: data.localidade,
    });
  };

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

          saveUser(result);

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

          saveUser(result);

          return result.data;
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
