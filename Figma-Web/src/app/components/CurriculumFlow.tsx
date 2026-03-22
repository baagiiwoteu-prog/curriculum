import React from "react";

interface Subject {
  id: string;
  label: string;
  color: string;
  y: number;
}

interface Flow {
  from: string;
  to: string;
  color: string;
  thickness: number;
  opacity?: number;
  dashed?: boolean;
}

interface CurriculumFlowProps {
  onSubjectClick?: (subjectId: string, label: string, color: string) => void;
}

export function CurriculumFlow({ onSubjectClick }: CurriculumFlowProps) {
  // Define subjects for each stage with new confident palette
  const stage1: Subject[] = [
    {
      id: "s1-social",
      label: "1. Нийгэм-сэтгэл хөдлөл",
      color: "#7b5d99",
      y: 100,
    },
    {
      id: "s1-movement",
      label: "2. Хөдөлгөөн, эрүүл мэнд",
      color: "#2d7d8b",
      y: 200,
    },
    {
      id: "s1-language",
      label: "3. Хэл яриа",
      color: "#2563ab",
      y: 300,
    },
    {
      id: "s1-environment",
      label: "4. Байгаль, нийгмийн орчин",
      color: "#2e6b4e",
      y: 420,
    },
    {
      id: "s1-math",
      label: "5. Математик",
      color: "#b8763a",
      y: 560,
    },
    {
      id: "s1-art",
      label: "6. Зураг, урлал",
      color: "#a6555a",
      y: 660,
    },
    {
      id: "s1-music",
      label: "7. Хөгжим",
      color: "#a6555a",
      y: 760,
    },
  ];

  const stage2: Subject[] = [
    {
      id: "s2-mongolian",
      label: "1. Монгол хэл",
      color: "#2563ab",
      y: 100,
    },
    {
      id: "s2-math",
      label: "2. Математик",
      color: "#b8763a",
      y: 200,
    },
    {
      id: "s2-science",
      label: "3. Байгаль шинжлэл",
      color: "#2e6b4e",
      y: 300,
    },
    {
      id: "s2-social-science",
      label: "4. Нийгмийн ухаан",
      color: "#7b5d99",
      y: 400,
    },
    {
      id: "s2-art",
      label: "5. Дүрслэх урлаг, дизайн",
      color: "#a6555a",
      y: 500,
    },
    {
      id: "s2-music",
      label: "6. Хөгжим",
      color: "#a6555a",
      y: 580,
    },
    {
      id: "s2-physical",
      label: "7. Биеийн тамир",
      color: "#2d7d8b",
      y: 660,
    },
    {
      id: "s2-health",
      label: "8. Эрүүл мэнд",
      color: "#2d7d8b",
      y: 730,
    },
    {
      id: "s2-computer",
      label: "9. Компьютерын ухаан",
      color: "#4a5968",
      y: 800,
    },
    {
      id: "s2-tuva",
      label: "10. Тува хэл",
      color: "#8b6e3f",
      y: 870,
    },
    {
      id: "s2-kazakh",
      label: "11. Казах хэл",
      color: "#8b6e3f",
      y: 930,
    },
    {
      id: "s2-life-orientation",
      label: "12. Нийгэм ахуйн баримжаа",
      color: "#7b5d99",
      y: 990,
    },
  ];

  const stage3: Subject[] = [
    {
      id: "s3-mongolian",
      label: "1. Монгол хэл",
      color: "#2563ab",
      y: 80,
    },
    {
      id: "s3-mongolian-script",
      label: "2. Монгол бичиг",
      color: "#2563ab",
      y: 140,
    },
    {
      id: "s3-literature",
      label: "3. Уран зохиол",
      color: "#2563ab",
      y: 200,
    },
    {
      id: "s3-math",
      label: "4. Математик",
      color: "#b8763a",
      y: 270,
    },
    {
      id: "s3-biology",
      label: "5. Биологи",
      color: "#2e6b4e",
      y: 350,
    },
    {
      id: "s3-physics",
      label: "6. Физик",
      color: "#2e6b4e",
      y: 410,
    },
    {
      id: "s3-chemistry",
      label: "7. Хими",
      color: "#2e6b4e",
      y: 470,
    },
    {
      id: "s3-geography",
      label: "8. Газарзүй",
      color: "#2e6b4e",
      y: 530,
    },
    {
      id: "s3-society",
      label: "9. Нийгэм",
      color: "#7b5d99",
      y: 600,
    },
    {
      id: "s3-history",
      label: "10. Түүх",
      color: "#7b5d99",
      y: 660,
    },
    {
      id: "s3-visual-art",
      label: "11. Дүрслэх урлаг",
      color: "#a6555a",
      y: 730,
    },
    {
      id: "s3-music",
      label: "12. Хөгжим",
      color: "#a6555a",
      y: 790,
    },
    {
      id: "s3-design",
      label: "13. Дизайн технологи",
      color: "#a6555a",
      y: 850,
    },
    {
      id: "s3-computer",
      label: "14. Компьютерын ухаан",
      color: "#4a5968",
      y: 920,
    },
    {
      id: "s3-physical",
      label: "15. Биеийн тамир",
      color: "#2d7d8b",
      y: 990,
    },
    {
      id: "s3-health",
      label: "16. Эрүүл мэнд",
      color: "#2d7d8b",
      y: 1050,
    },
    {
      id: "s3-kazakh",
      label: "17. Казах хэл",
      color: "#8b6e3f",
      y: 1110,
    },
    {
      id: "s3-tuva",
      label: "18. Тува хэл",
      color: "#8b6e3f",
      y: 1160,
    },
  ];

  // Define flows between stages
  const flows: Flow[] = [
    // Language flow
    {
      from: "s1-language",
      to: "s2-mongolian",
      color: "#2563ab",
      thickness: 10,
    },
    {
      from: "s2-mongolian",
      to: "s3-mongolian",
      color: "#2563ab",
      thickness: 5,
    },
    {
      from: "s2-mongolian",
      to: "s3-mongolian-script",
      color: "#2563ab",
      thickness: 5,
    },
    {
      from: "s2-mongolian",
      to: "s3-literature",
      color: "#2563ab",
      thickness: 5,
    },

    // Math flow
    {
      from: "s1-math",
      to: "s2-math",
      color: "#b8763a",
      thickness: 10,
    },
    {
      from: "s2-math",
      to: "s3-math",
      color: "#b8763a",
      thickness: 10,
    },

    // Science flow
    {
      from: "s1-environment",
      to: "s2-science",
      color: "#2e6b4e",
      thickness: 10,
    },
    {
      from: "s2-science",
      to: "s3-biology",
      color: "#2e6b4e",
      thickness: 4,
    },
    {
      from: "s2-science",
      to: "s3-physics",
      color: "#2e6b4e",
      thickness: 4,
    },
    {
      from: "s2-science",
      to: "s3-chemistry",
      color: "#2e6b4e",
      thickness: 4,
    },
    {
      from: "s2-science",
      to: "s3-geography",
      color: "#2e6b4e",
      thickness: 4,
    },

    // Society flow
    {
      from: "s1-environment",
      to: "s2-social-science",
      color: "#7b5d99",
      thickness: 5,
    },
    {
      from: "s1-environment",
      to: "s2-life-orientation",
      color: "#7b5d99",
      thickness: 4,
      opacity: 0.6,
    },
    {
      from: "s1-social",
      to: "s2-health",
      color: "#7b5d99",
      thickness: 4,
      opacity: 0.5,
    },
    {
      from: "s1-social",
      to: "s2-life-orientation",
      color: "#7b5d99",
      thickness: 4,
      opacity: 0.5,
    },
    {
      from: "s1-social",
      to: "s2-social-science",
      color: "#7b5d99",
      thickness: 3,
      opacity: 0.35,
      dashed: true,
    },
    {
      from: "s2-social-science",
      to: "s3-society",
      color: "#7b5d99",
      thickness: 5,
    },
    {
      from: "s2-social-science",
      to: "s3-history",
      color: "#7b5d99",
      thickness: 5,
    },
    {
      from: "s2-life-orientation",
      to: "s3-society",
      color: "#7b5d99",
      thickness: 3,
      opacity: 0.5,
      dashed: true,
    },
    {
      from: "s2-life-orientation",
      to: "s3-health",
      color: "#7b5d99",
      thickness: 2,
      opacity: 0.45,
      dashed: true,
    },

    // Arts flow
    {
      from: "s1-art",
      to: "s2-art",
      color: "#a6555a",
      thickness: 8,
    },
    {
      from: "s2-art",
      to: "s3-visual-art",
      color: "#a6555a",
      thickness: 5,
    },
    {
      from: "s2-art",
      to: "s3-design",
      color: "#a6555a",
      thickness: 5,
    },

    // Music flow
    {
      from: "s1-music",
      to: "s2-music",
      color: "#a6555a",
      thickness: 6,
    },
    {
      from: "s2-music",
      to: "s3-music",
      color: "#a6555a",
      thickness: 6,
    },

    // Physical/health flow
    {
      from: "s1-movement",
      to: "s2-physical",
      color: "#2d7d8b",
      thickness: 6,
    },
    {
      from: "s1-movement",
      to: "s2-health",
      color: "#2d7d8b",
      thickness: 6,
    },
    {
      from: "s2-physical",
      to: "s3-physical",
      color: "#2d7d8b",
      thickness: 6,
    },
    {
      from: "s2-health",
      to: "s3-health",
      color: "#2d7d8b",
      thickness: 6,
    },

    // Digital flow
    {
      from: "s2-computer",
      to: "s3-computer",
      color: "#4a5968",
      thickness: 6,
    },

    // Language minorities
    {
      from: "s2-tuva",
      to: "s3-tuva",
      color: "#8b6e3f",
      thickness: 5,
    },
    {
      from: "s2-kazakh",
      to: "s3-kazakh",
      color: "#8b6e3f",
      thickness: 5,
    },
  ];

  // Calculate positions
  const stageWidth = 300;
  const nodeWidth = 180;
  const nodeHeight = 32;

  const stage1X = 80;
  const stage2X = stage1X + stageWidth + 100;
  const stage3X = stage2X + stageWidth + 100;

  // Helper function to create Sankey-like curved path
  const createFlowPath = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    thickness1: number,
    thickness2: number,
  ) => {
    const controlX1 = x1 + (x2 - x1) * 0.5;
    const controlX2 = x2 - (x2 - x1) * 0.5;

    const halfThick1 = thickness1 / 2;
    const halfThick2 = thickness2 / 2;

    const topPath = `
      M ${x1 + nodeWidth} ${y1 - halfThick1}
      C ${controlX1} ${y1 - halfThick1}, ${controlX2} ${y2 - halfThick2}, ${x2} ${y2 - halfThick2}
    `;

    const bottomPath = `
      L ${x2} ${y2 + halfThick2}
      C ${controlX2} ${y2 + halfThick2}, ${controlX1} ${y1 + halfThick1}, ${x1 + nodeWidth} ${y1 + halfThick1}
      Z
    `;

    return topPath + bottomPath;
  };

  // Get position helper
  const getSubjectPosition = (
    id: string,
    subjects: Subject[],
  ): { x: number; y: number; color: string } | null => {
    const subject = subjects.find((s) => s.id === id);
    if (!subject) return null;

    let x = stage1X;
    if (id.startsWith("s2-")) x = stage2X;
    if (id.startsWith("s3-")) x = stage3X;

    return { x, y: subject.y, color: subject.color };
  };

  return (
    <div className="w-full h-full bg-white overflow-auto">
      <div className="min-w-[1400px] min-h-[1300px] p-12">
        {/* Title */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Curriculum Subject Progression Across Education
            Levels
          </h1>
          <p className="text-lg text-gray-600 font-medium">
            From integrated early domains to differentiated
            lower secondary subjects
          </p>
        </div>

        {/* SVG Canvas */}
        <svg width="1300" height="1250" className="mx-auto">
          {/* Stage headers */}
          <g>
            <text
              x={stage1X}
              y="30"
              className="text-base font-bold fill-gray-900"
            >
              Surguuliin Umnuh Bolovsrol
            </text>
            <text
              x={stage1X}
              y="50"
              className="text-xs font-medium fill-gray-600"
            >
              Integrated developmental domains
            </text>

            <text
              x={stage2X}
              y="30"
              className="text-base font-bold fill-gray-900"
            >
              Baga Bolovsrol
            </text>
            <text
              x={stage2X}
              y="50"
              className="text-xs font-medium fill-gray-600"
            >
              Formalizing foundational subjects
            </text>

            <text
              x={stage3X}
              y="30"
              className="text-base font-bold fill-gray-900"
            >
              Suuri Bolovsrol
            </text>
            <text
              x={stage3X}
              y="50"
              className="text-xs font-medium fill-gray-600"
            >
              Differentiated disciplinary subjects
            </text>
          </g>

          {/* Draw flows first (behind nodes) */}
          <g>
            {flows.map((flow, idx) => {
              const fromPos = getSubjectPosition(flow.from, [
                ...stage1,
                ...stage2,
                ...stage3,
              ]);
              const toPos = getSubjectPosition(flow.to, [
                ...stage1,
                ...stage2,
                ...stage3,
              ]);

              if (!fromPos || !toPos) return null;

              const path = createFlowPath(
                fromPos.x,
                fromPos.y + nodeHeight / 2,
                toPos.x,
                toPos.y + nodeHeight / 2,
                flow.thickness,
                flow.thickness,
              );

              return (
                <path
                  key={idx}
                  d={path}
                  fill={flow.color}
                  opacity={flow.opacity || 0.75}
                  strokeDasharray={
                    flow.dashed ? "5 5" : undefined
                  }
                  className="transition-opacity hover:opacity-95"
                />
              );
            })}
          </g>

          {/* Draw nodes */}
          <g>
            {/* Stage 1 nodes */}
            {stage1.map((subject) => (
              <g key={subject.id}>
                <rect
                  x={stage1X}
                  y={subject.y}
                  width={nodeWidth}
                  height={nodeHeight}
                  rx="4"
                  fill="white"
                  stroke={subject.color}
                  strokeWidth="2.5"
                  className="transition-all hover:fill-gray-50"
                />
                <text
                  x={stage1X + nodeWidth / 2}
                  y={subject.y + nodeHeight / 2 + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-gray-800"
                >
                  {subject.label}
                </text>
              </g>
            ))}

            {/* Stage 2 nodes */}
            {stage2.map((subject) => (
              <g key={subject.id}>
                <rect
                  x={stage2X}
                  y={subject.y}
                  width={nodeWidth}
                  height={nodeHeight}
                  rx="4"
                  fill="white"
                  stroke={subject.color}
                  strokeWidth="2.5"
                  className="transition-all hover:fill-gray-50"
                />
                <text
                  x={stage2X + nodeWidth / 2}
                  y={subject.y + nodeHeight / 2 + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-gray-800"
                >
                  {subject.label}
                </text>
              </g>
            ))}

            {/* Stage 3 nodes (clickable) */}
            {stage3.map((subject) => (
              <g
                key={subject.id}
                onClick={() => onSubjectClick?.(subject.id, subject.label, subject.color)}
                className="cursor-pointer"
              >
                <rect
                  x={stage3X}
                  y={subject.y}
                  width={nodeWidth}
                  height={nodeHeight}
                  rx="4"
                  fill="white"
                  stroke={subject.color}
                  strokeWidth="2.5"
                  className="transition-all hover:fill-gray-50"
                />
                <text
                  x={stage3X + nodeWidth / 2}
                  y={subject.y + nodeHeight / 2 + 1}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="text-xs font-semibold fill-gray-800 pointer-events-none"
                >
                  {subject.label}
                </text>
                {/* Click indicator icon */}
                <g opacity="0.4" className="transition-opacity">
                  <rect
                    x={stage3X + nodeWidth - 22}
                    y={subject.y + 8}
                    width="16"
                    height="16"
                    rx="3"
                    fill={subject.color}
                    opacity="0.15"
                  />
                  <text
                    x={stage3X + nodeWidth - 14}
                    y={subject.y + 20}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[8px] fill-gray-500"
                  >
                    {">>"}
                  </text>
                </g>
              </g>
            ))}
          </g>

          {/* Annotations */}
          <g className="text-[10px] italic font-medium fill-gray-500">
            <text
              x={stage1X + stageWidth + 30}
              y={160}
              textAnchor="middle"
            >
              expands
            </text>
            <text
              x={stage2X + stageWidth + 30}
              y={140}
              textAnchor="middle"
            >
              differentiates
            </text>
            <text
              x={stage2X + stageWidth + 30}
              y={450}
              textAnchor="middle"
            >
              splits
            </text>
            <text
              x={stage1X + stageWidth + 30}
              y={450}
              textAnchor="middle"
            >
              distributed
            </text>
            <text
              x={stage1X + stageWidth + 30}
              y={465}
              textAnchor="middle"
            >
              continuity
            </text>
          </g>
        </svg>

      </div>
    </div>
  );
}