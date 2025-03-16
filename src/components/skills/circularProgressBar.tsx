import { CircularProgress } from "@nextui-org/react";
import styled from "styled-components";

const ProgressSection: any = styled.div`
  .stroke-current {
    stroke: ${(props: any) => props.color};
  }
  svg {
    width: ${(props: any) => props.width}px;
    height: ${(props: any) => props.height}px;

    stroke-width: ${(props: any) => props.strokeWidth};
  }
  span {
    font-size: ${(props: any) => props.fontSize}px;
  }
`;

const CircularProgressBar = ({
  percentage,
  width,
  height,
  color,
  fontSize,
  strokeWidth,
}: {
  percentage: number;
  height?: number;
  color?: string;
  fontSize?: number;
  width?: number;
  strokeWidth?: number;
}) => {
  return (
    <ProgressSection
      width={width || 200}
      height={height || 200}
      color={color || ""}
      fontSize={fontSize || 30}
      strokeWidth={strokeWidth || 5}
    >
      <CircularProgress
        aria-label="Loading..."
        size="lg"
        value={percentage}
        showValueLabel={true}
      />
    </ProgressSection>
  );
};
export default CircularProgressBar;
