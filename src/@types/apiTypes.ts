export type AmizadeAPI = {
  amizadeId: number;
  perfilId: number;
  perfilSeguidoId: number;
};

export type PerfilAPI = {
  perfilId: number;
  privado: boolean;
  userId: number;
  imagemPerfil: string | null;
  seguindo: AmizadeAPI[] | null;
  seguidores: AmizadeAPI[] | null;
};

export type UserAPI = {
  usuarioId: number;
  nome: string;
  sobrenome: string;
  email: string;
  aniversario: string | null;
  localidade: string | null;

  perfil: PerfilAPI;
};

export type UserResponse = {
  data: UserAPI;
};

export type ProfileResponse = {
  data: {
    perfilSeguido: PerfilAPI;
    perfilLogado: PerfilAPI;
  };
};

export type SingleProfileResponse = {
  data: PerfilAPI;
};
