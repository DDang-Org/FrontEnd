import { useAccumulatedWalkInfo } from '~apis/dog/useAccumulatedWalkInfo';
import { StatContainer } from '~components/Common/StatContainer';

export const WalkInfo = ({ dogId }: { dogId: number }) => {
  const { walkCount, countWalksWithMember, totalDistance } = useAccumulatedWalkInfo({ dogId });
  return (
    <StatContainer>
      <StatContainer.Item>
        <StatContainer.Value value={walkCount + '회'} />
        <StatContainer.Label label="누적 산책 횟수" />
      </StatContainer.Item>
      <StatContainer.Item>
        <StatContainer.Value value={totalDistance + 'km'} />
        <StatContainer.Label label="총 산책 거리" />
      </StatContainer.Item>
      <StatContainer.Item>
        <StatContainer.Value value={countWalksWithMember + '회'} />
        <StatContainer.Label label="강번따 횟수" />
      </StatContainer.Item>
    </StatContainer>
  );
};
