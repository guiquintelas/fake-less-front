import React, { createContext, useContext, useState } from 'react';
import { ProfileResponse, SingleProfileResponse, UserResponse } from '../@types/apiTypes';
import api from '../api';
import useDataMapper from '../hooks/useDataMapper';
import { User, useUserContext } from './UserContext';

type ProfileContextType = {
  user: User | null;
  loadingFollowBtn: boolean;
  loadingAvatarBtn: boolean;
  fetchUser: (userId: string) => Promise<UserResponse | string>;
  toggleFollow: (profileId: number) => Promise<ProfileResponse | string>;
  changeAvatar: (profileId: number, file: File) => Promise<ProfileResponse | string>;
};

export const ProfileContext = createContext<ProfileContextType>({
  user: null,
  loadingFollowBtn: false,
  loadingAvatarBtn: false,
  fetchUser: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  toggleFollow: () => {
    throw new Error('you should only use this context inside the provider!');
  },
  changeAvatar: () => {
    throw new Error('you should only use this context inside the provider!');
  },
});

const ProfileProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingFollowBtn, setLoadingFollowBtn] = useState(false);
  const [loadingAvatarBtn, setLoadingAvatarBtn] = useState(false);
  const { userAPIToUser, profileAPIToUserFields } = useDataMapper();
  const { user: loggedUser, updateUser } = useUserContext();

  return (
    <ProfileContext.Provider
      value={{
        user,
        loadingFollowBtn,
        loadingAvatarBtn,

        async fetchUser(userId) {
          let result: UserResponse;

          try {
            result = await api.get(`/usuario/${userId}`);
          } catch (error) {
            return 'User not found!';
          }

          setUser(userAPIToUser(result));
          return result;
        },

        async toggleFollow(profileId) {
          let result: ProfileResponse;

          const following = loggedUser?.following.includes(profileId);

          try {
            setLoadingFollowBtn(true);
            result = await api.post(`/perfil/${profileId}/${following ? 'parar-de-seguir' : 'seguir'}`);
          } catch (error) {
            return error;
          } finally {
            setLoadingFollowBtn(false);
          }

          setUser((oldUser) => ({
            ...(oldUser as User),
            ...profileAPIToUserFields(result.data.perfilSeguido),
          }));

          updateUser(profileAPIToUserFields(result.data.perfilLogado));

          return result;
        },

        async changeAvatar(profileId, file) {
          let result: SingleProfileResponse;

          const formData = new FormData();

          formData.append('files', file);

          try {
            setLoadingAvatarBtn(true);
            result = await api.post(`/perfil/${profileId}/foto-perfil`, formData);
          } catch (error) {
            return error;
          } finally {
            setLoadingAvatarBtn(false);
          }

          setUser((oldUser) => ({
            ...(oldUser as User),
            ...profileAPIToUserFields(result.data),
          }));

          updateUser(profileAPIToUserFields(result.data));

          return result;
        },
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;

export function useProfileContext() {
  return useContext(ProfileContext);
}
