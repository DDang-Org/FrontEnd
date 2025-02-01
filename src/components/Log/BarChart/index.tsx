import * as S from './styles';

interface BarChartProps {}

export const BarChart = ({}: BarChartProps) => {
  return (
    <S.BarChart>
      <S.Title fontSize={20}>올해 가족별 산책 횟수</S.Title>
    </S.BarChart>
  );
};
