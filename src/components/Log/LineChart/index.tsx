import Svg, { Path, G, Line, Text, Circle } from 'react-native-svg';
import * as d3 from 'd3';
import * as S from './styles';
import { useState } from 'react';
import { useTheme } from '@emotion/react';

interface DataPoint {
  label: string;
  value: number;
}

interface LineChartProps {
  data: DataPoint[];
}

const calculateLeftMargin = (data: DataPoint[]) => {
  const maxValue = d3.max(data, d => d.value) || 0;
  const digitCount = String(maxValue).length;

  return 30 + digitCount * 6;
};

export const LineChart = ({ data }: LineChartProps) => {
  const [width, setWidth] = useState(0);
  const height = 240;
  const margin = { top: 20, right: 0, bottom: 33, left: calculateLeftMargin(data) };
  const paddingHorizontal = 48;
  const theme = useTheme();

  const xScale = d3
    .scalePoint()
    .domain(data.map(d => d.label))
    .range([margin.left, width - margin.right - paddingHorizontal]);

  const yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, d => d.value) || 0])
    .range([height - margin.bottom, margin.top]);

  const line = d3
    .line<DataPoint>()
    .x(d => xScale(d.label)!)
    .y(d => yScale(d.value));

  return (
    <S.LineChart onLayout={e => setWidth(e.nativeEvent.layout.width)}>
      <S.Title fontSize={20}>올해 월 별 산책기록</S.Title>
      <Svg width={width} height={height}>
        <G>
          {yScale.ticks(5).map((tick, i) => (
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
        <Path d={line(data) || ''} stroke={theme.colors.lighten_1} strokeWidth={2} fill="transparent" />
        {data.map((d, i) => (
          <G key={i}>
            <Circle cx={xScale(d.label)} cy={yScale(d.value)} r={4} fill={theme.colors.default} />
          </G>
        ))}
        <G>
          {data.map((d, i) => (
            <Text
              key={i}
              x={xScale(d.label)!}
              y={height - 10}
              fontSize={11}
              fontFamily="SUIT-Bold"
              fontWeight={700}
              textAnchor="middle"
            >
              {d.label}
            </Text>
          ))}
        </G>
      </Svg>
    </S.LineChart>
  );
};
