import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { PieChart } from '@mui/x-charts/PieChart';

const chartData = [
  { id: 0, subject: "Math", marks: 275, color: "#6366f1" },
  { id: 1, subject: "English", marks: 200, color: "#3b82f6" },
  { id: 2, subject: "Physics", marks: 173, color: "#8b5cf6" },
  { id: 3, subject: "Chemistry", marks: 187, color: "#4338ca" },
  { id: 4, subject: "Biology", marks: 90, color: "#06b6d4" }
];

export default function RoundedPieChart() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const isTablet = useMediaQuery("(min-width:1024px) and (max-width:1366px)");

  const isSmallScreen = useMediaQuery('(max-width:640px)');
  const chartHeight = isSmallScreen ? 260 : 300;

  const total = chartData.reduce((sum, s) => sum + s.marks, 0);

  // Transform data for MUI X Charts
  const pieData = chartData.map((item) => ({
    id: item.id,
    value: item.marks,
    label: item.subject,
    color: item.color
  }));

  return (
    <Card
      sx={{
        borderRadius: 4,
        p: 2,
        minHeight: 0,
        overflow: 'hidden',

        background: isDark
          ? "linear-gradient(135deg,#141727 0%,#3a416f 100%)"
          : "#fff",

        display: "flex",
        flexDirection: "column",
        gap: 1
      }}
    >
      {/* HEADER */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Typography
          fontWeight={600}
          sx={{ color: isDark ? "#fff" : "#1c204b" }}
        >
          Subject Marks
        </Typography>

        <Box
          sx={{
            background: "rgba(34,197,94,0.12)",
            px: 1,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            gap: 0.5
          }}
        >
          <TrendingUpIcon sx={{ fontSize: 14, color: "#22c55e" }} />
          <Typography fontSize={12} fontWeight={600} color="#22c55e">
            5.2%
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="caption"
        textAlign="center"
        color={isDark ? "rgba(255,255,255,.7)" : "rgba(28,32,75,.7)"}
      >
        Academic Performance
      </Typography>

      {/* MUI X Charts PieChart - Auto responsive */}
      <div className="w-full min-h-[240px] h-[240px] sm:h-[280px] md:h-[320px]">
        <PieChart
          series={[
            {
              data: pieData,
              innerRadius: 70,
              outerRadius: 100,
              paddingAngle: 4,
              cornerRadius: 0,
              cx: '50%',
              cy: '50%'
            }
          ]}
          height={chartHeight}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          sx={{
            '& .MuiPieArc-root': {
              stroke: 'none'
            },
            '& text': {
              fill: isDark ? '#fff' : '#1c204b',
              fontSize: '12px',
              fontWeight: 500
            }
          }}
          slotProps={{
            legend: { hidden: true }
          }}
        >
          {/* Center label for total */}
          <text
            x="50%"
            y="45%"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: "18px",
              fill: isDark ? "#fff" : "#1c204b",
              fontWeight: 700
            }}
          >
            {total}
          </text>

          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontSize: "12px",
              fill: isDark ? "#cbd5e1" : "#64748b"
            }}
          >
            Total Marks
          </text>
        </PieChart>
      </div>

      {/* LEGEND */}
      <Box
        sx={{
          mt: 1,
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: 0.5
        }}
      >
        {chartData.map((c) => (
          <Box
            key={c.subject}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: 12,
              color: isDark ? "#fff" : "#1c204b"
            }}
          >
            <Box
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: c.color
              }}
            />
            {c.subject}
          </Box>
        ))}
      </Box>

    </Card>
  );
}
