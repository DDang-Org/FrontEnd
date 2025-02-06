import Svg, { Rect, G, Line, Text } from 'react-native-svg';
import * as d3 from 'd3';
import * as S from './styles';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { FamilyWalkRecordsResponse } from '~apis/log/fetchFamilyWalkRecords';
import { FAMILY_ROLE } from '~constants/family-role';

interface BarChartProps {
  data: FamilyWalkRecordsResponse[];
}

const calculateLeftMargin = (data: FamilyWalkRecordsResponse[]) => {
  const maxValue = d3.max(data, d => d.count) || 0;
  const digitCount = String(maxValue).length;

  return 30 + digitCount * 6;
};

export const BarChart = ({ data }: BarChartProps) => {
  const [width, setWidth] = useState(0);
  const height = 240;
  const margin = { top: 20, right: 0, bottom: 30, left: calculateLeftMargin(data) };
  const paddingHorizontal = 48;
  const theme = useTheme();

  const generateUniqueRoundedTicks = (maxValue: number, numTicks: number) => {
    const ticks: number[] = [];
    const step = Math.max(1, Math.round(maxValue / (numTicks - 1)));

    for (let i = 0; i < numTicks; i++) {
      const tick = i * step;
      if (tick <= maxValue && !ticks.includes(tick)) {
        ticks.push(tick);
      }
    }
    return ticks;
  };

  const maxCount = d3.max(data, d => d.count) || 0;
  const yTicks = generateUniqueRoundedTicks(maxCount, 5);

  const xScale = d3
    .scaleBand()
    .domain(data.map(d => `${d.memberId}`))
    .range([margin.left, width - margin.right - paddingHorizontal])
    .padding(0.2);

  const yScale = d3
    .scaleLinear()
    .domain([0, maxCount])
    .range([height - margin.bottom, margin.top]);

  return (
    <S.BarChart onLayout={e => setWidth(e.nativeEvent.layout.width)}>
      <S.Title fontSize={20}>올해 가족별 산책 횟수</S.Title>
      <Svg width={width} height={height}>
        <G>
          {yTicks.map((tick, i) => (
            <G key={i}>
              <Text
                x={margin.left - 16}
                y={yScale(tick)}
                fontSize={11}
                fontWeight={700}
                fontFamily="SUIT-Bold"
                textAnchor="end"
                alignmentBaseline="middle"
                fill={theme.colors.font_1}
              >
                {`${tick}회`}
              </Text>
              <Line
                x1={margin.left}
                y1={yScale(tick)}
                x2={width - margin.right - paddingHorizontal}
                y2={yScale(tick)}
                stroke={theme.colors.gc_2}
                strokeWidth={0.5}
              />
            </G>
          ))}
        </G>

        {data.map((d, i) => (
          <Rect
            key={d.memberId}
            x={xScale(`${d.memberId}`)! + (xScale.bandwidth() - Math.min(xScale.bandwidth() * 0.4, 25)) / 2}
            y={yScale(d.count)}
            width={Math.min(xScale.bandwidth() * 0.4, 25)}
            height={height - margin.bottom - yScale(d.count)}
            fill={i === 0 ? theme.colors.default : theme.colors.lighten_1}
          />
        ))}

        <G>
          {data.map(d => (
            <G key={`label-${d.memberId}`}>
              <Text
                x={xScale(`${d.memberId}`)! + xScale.bandwidth() / 2}
                y={height - 15}
                fontSize={11}
                fontFamily="SUIT-Bold"
                fontWeight={700}
                textAnchor="middle"
              >
                {d.memberName}
              </Text>
              <Text
                x={xScale(`${d.memberId}`)! + xScale.bandwidth() / 2}
                y={height - 2}
                fontSize={10}
                fontFamily="SUIT-Regular"
                fontWeight={400}
                textAnchor="middle"
              >
                {FAMILY_ROLE[d.familyRole]}
              </Text>
            </G>
          ))}
        </G>
      </Svg>
    </S.BarChart>
  );
};
