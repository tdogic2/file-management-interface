import { ProgressBarType, SemiCircleType } from "@/types";

function SemiCircle({
  percentage,
  width,
  height,
  radius,
  gradientColors,
}: SemiCircleType) {
  const circumference = Math.PI * radius;
  const clampedPercentage = Math.min(100, Math.max(0, percentage));
  const strokePercentage = (clampedPercentage * circumference) / 100;

  const x = width / 2;
  /* 
    Number 5 is due to strokeWidth={10} and strokeLinecap="round" (10 / 2).
    Number 17 is due to the height of the text fontSize={14}, y={startY + 8}, strokeWidth={10} and strokeLinecap="round" (8 - 10 / 2 + 14).
  */
  const y = height - 5 - 17;

  const startX = x - radius * Math.cos((Math.PI / 180) * 0);
  const startY = y - radius * Math.sin((Math.PI / 180) * 0);
  const endX = x - radius * Math.cos((Math.PI / 180) * 180);
  const endY = y - radius * Math.sin((Math.PI / 180) * 180);

  const numColors = gradientColors.length;
  const gradientStops = gradientColors.map((color, index) => (
    <stop
      key={index}
      offset={`${(index * 100) / (numColors - 1)}%`}
      stopColor={color}
    />
  ));

  return (
    <>
      <defs>
        <linearGradient
          id={`gradient-${clampedPercentage}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          {gradientStops}
        </linearGradient>
      </defs>
      <path
        d={`M ${startX} ${startY} A ${radius} ${radius} 0 0 1 ${endX} ${endY}`}
        fill="transparent"
        stroke={`url(#gradient-${clampedPercentage})`}
        strokeWidth={10}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - strokePercentage}
        strokeLinecap="round"
      />
      <text
        x={startX}
        y={startY + 8}
        fill="#71717a"
        dominantBaseline="hanging"
        textAnchor="middle"
        fontSize={14}
      >
        0%
      </text>
      <text
        x={endX}
        y={endY + 8}
        fill="#71717a"
        dominantBaseline="hanging"
        textAnchor="middle"
        fontSize={14}
      >
        100%
      </text>
    </>
  );
}

export default function ProgressBar({
  percentage,
  width,
  height,
  radius,
}: ProgressBarType) {
  const gradientColors = [
    "lightgreen",
    "royalblue",
    "mediumpurple",
    "hotpink",
    "crimson",
  ];

  return (
    /*
      It draws the semicircles at the bottom of the svg. 
      Increasing the height won't change that.
    */
    <svg width={width} height={height}>
      <g>
        {percentage < 100 && (
          <SemiCircle
            percentage={100}
            width={width}
            height={height}
            radius={radius}
            gradientColors={["#212129", "#212129"]}
          />
        )}
        <SemiCircle
          percentage={percentage}
          width={width}
          height={height}
          radius={radius}
          gradientColors={gradientColors}
        />
      </g>
    </svg>
  );
}
