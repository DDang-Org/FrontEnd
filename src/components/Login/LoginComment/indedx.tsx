import * as S from './styles';

export const LoginComment = () => {
  return (
    <S.LoginComment>
      <S.LoginCommentText fontSize={28}>건강한 반려생활,</S.LoginCommentText>
      <S.LoginCommentText fontSize={28}>
        <S.LoginCommentText fontSize={28} style={{ color: '#FFED16' }}>
          댕
        </S.LoginCommentText>
        과 함께해요!
      </S.LoginCommentText>
    </S.LoginComment>
  );
};
