import type { FillMuteIllustrationProps } from "./fillMuteIllustrationTypes";

export function S05({ shapeFill, section5Stroke }: FillMuteIllustrationProps) {
  return (
    <g id="S05">
      <g id="S05_2">
        <g id="Vector_62">
          <path
            d="M1258.71 215.002L1166.71 231.82C1166.24 231.906 1165.89 232.32 1165.89 232.803V460.937C1165.89 461.424 1166.24 461.84 1166.72 461.923L1259.43 477.811"
            fill={shapeFill("section5Pink")}
          />
          <path
            d="M1258.71 215.002L1166.71 231.82C1166.24 231.906 1165.89 232.32 1165.89 232.803V460.937C1165.89 461.424 1166.24 461.84 1166.72 461.923L1259.43 477.811"
            stroke={section5Stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <path
          id="Vector_63"
          d="M1192.02 274.546C1192.02 275.413 1190.99 275.869 1190.35 275.286L1184.13 269.643C1183.71 269.262 1183.05 269.306 1182.69 269.742L1176.9 276.656C1176.3 277.372 1175.13 276.948 1175.13 276.014V231.174C1175.13 230.693 1175.48 230.279 1175.95 230.191L1190.84 227.423C1191.45 227.309 1192.02 227.781 1192.02 228.406V274.546Z"
          fill={shapeFill("section5Red")}
          stroke={section5Stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_64"
          d="M1165.85 460.779C1165.85 461.332 1165.4 461.779 1164.85 461.779H1156.54C1155.99 461.779 1155.54 461.332 1155.54 460.779V236.151C1155.54 235.162 1157.07 234.607 1157.95 235.061C1160.44 236.348 1163.48 235.585 1165.31 232.789C1165.47 232.547 1165.85 232.659 1165.85 232.949V460.779Z"
          fill={shapeFill("section5Muted")}
          stroke={section5Stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g id="S05_1">
        <g id="Vector_65">
          <path
            d="M1259.71 478.254L1395.83 501.798C1396.44 501.903 1397 501.433 1397 500.812V191.201C1397 190.576 1396.43 190.105 1395.82 190.218L1259 215.459"
            fill={shapeFill("section5Pink")}
          />
          <path
            d="M1259.71 478.254L1395.83 501.798C1396.44 501.903 1397 501.433 1397 500.812V191.201C1397 190.576 1396.43 190.105 1395.82 190.218L1259 215.459"
            stroke={section5Stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
  );
}
