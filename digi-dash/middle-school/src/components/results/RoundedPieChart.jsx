import { useState } from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { PieChart } from "@mui/x-charts/PieChart";

const chartData = [
  { id: 0, label: "Math", value: 275, color: "#6366f1" },
  { id: 1, label: "English", value: 200, color: "#3b82f6" },
  { id: 2, label: "Physics", value: 173, color: "#8b5cf6" },
  { id: 3, label: "Chemistry", value: 187, color: "#4338ca" },
  { id: 4, label: "Biology", value: 90, color: "#06b6d4" }
];

export default function RoundedPieChart() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const isTablet = useMediaQuery("(min-width:1024px) and (max-width:1366px)");
  const isMobile = useMediaQuery("(max-width:768px)");

  const total = chartData.reduce((sum, s) => sum + s.value, 0);

  return (
    <Card
      sx={{
        borderRadius: 4,
        p: 2,

        /* ✅ guarantee the card never collapses */
        minHeight: isTablet ? 360 : isMobile ? 400 : 420,

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

      {/* ✅ FIXED HEIGHT BOX (prevents collapse on all devices) */}
      <Box
        sx={{
          width: "100%",
          height: isTablet ? 250 : isMobile ? 280 : 300,
          minHeight: isTablet ? 250 : isMobile ? 280 : 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <PieChart
          series={[
            {
              data: chartData,
              innerRadius: isMobile ? 50 : isTablet ? 60 : 70,
              outerRadius: isMobile ? 80 : isTablet ? 90 : 100,
              paddingAngle: 2,
              cornerRadius: 4,
              cx: "50%",
              cy: "50%",
            },
          ]}
          colors={chartData.map(d => d.color)}
          height={isTablet ? 250 : isMobile ? 280 : 300}
          margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
          slotProps={{
            legend: { hidden: true },
          }}
          sx={{
            "& .MuiChartsLegend-root": {
              display: "none",
            },
          }}
        >
          {/* Center text showing total */}
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
      </Box>

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
            key={c.id}
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
            {c.label}
          </Box>
        ))}
      </Box>

    </Card>
  );
}
