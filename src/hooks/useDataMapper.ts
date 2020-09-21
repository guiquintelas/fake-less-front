import { ProfileResponse, UserResponse } from '../@types/apiTypes';
import { ProfileFields, User } from '../contexts/UserContext';

export default function useDataMapper() {
  return {
    userAPIToUser({ data }: UserResponse): User {
      return {
        id: data.usuarioId,
        name: data.nome,
        lastName: data.sobrenome,
        email: data.email,
        birthDate: data.aniversario ? new Date(data.aniversario) : null,
        location: data.localidade,
        profileId: data.perfil.perfilId,
        following: data.perfil.seguindo?.map((el) => el.perfilId) ?? [],
        followers: data.perfil.seguidores?.map((el) => el.perfilId) ?? [],
      };
    },

    profileAPIToUserFields({ data }: ProfileResponse): ProfileFields {
      return {
        profileId: data.perfilId,
        following: data.seguindo?.map((el) => el.perfilId) ?? [],
        followers: data.seguidores?.map((el) => el.perfilId) ?? [],
      };
    },
  };
}
