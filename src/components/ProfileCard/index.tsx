import * as S from "./styles";

export const ProfileCard = () => {
  return (
    <S.Container>
      <S.ImageWraper>
        <S.Image src="./perfil.jpeg" alt="Profile image" />
      </S.ImageWraper>
      <S.Title>Evilis Glenio</S.Title>
      <S.Description>Web Developer</S.Description>
    </S.Container>
  );
};
