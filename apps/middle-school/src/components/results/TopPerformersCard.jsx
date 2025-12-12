/**
 * Card highlighting top performers with gradient visuals.
 */
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

import avatar1 from "../../assets/images/avatar1.png";
import avatar2 from "../../assets/images/avatar2.png";
import avatar3 from "../../assets/images/avatar3.png";

const performers = [
  {
    name: "test 1",
    achievement: "test 1",
    score: "test 1",
    avatar: avatar1,
  },
  {
    name: "test 2",
    achievement: "test 2",
    score: "test 2",
    avatar: avatar2,
  },
  {
    name: "test 3",
    achievement: "test 3",
    score: "test 3",
    avatar: avatar3,
  },
];

function TopPerformersCard() {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Card
      sx={{
        width: "100%",
        minHeight: { xs: "auto", lg: "350px", xl: "350px" },
        height: { xs: "auto", lg: "350px", xl: "350px" },
        borderRadius: "20px",
        padding: { xs: "24px", lg: "16px", xl: "24px" },
        background: isDarkMode 
          ? "linear-gradient(135deg, #141727 0%, #3a416f 100%)"
          : "#ffffff",
        boxShadow: isDarkMode 
          ? "0 20px 45px rgba(10, 15, 70, 0.55)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        border: isDarkMode ? "none" : "none",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h6"
        sx={{ 
          color: isDarkMode ? "#fff" : "#1c204b", 
          fontWeight: 600, 
          textTransform: "capitalize", 
          fontFamily: "Poppins, sans-serif",
          marginBottom: { xs: 0, lg: 0 },
          fontSize: { lg: "1rem", xl: "1.25rem" }
        }}
      >
        Top Performers
      </Typography>

      <Box display="flex" flexDirection="column" gap={1.5} sx={{ flex: 1, overflow: "hidden" }}>
        {performers.map((performer) => (
          <Box
            key={performer.name}
            display="flex"
            alignItems="center"
            gap={2}
            p={1.5}
            sx={{
              borderRadius: "16px",
              background: isDarkMode ? "rgba(255, 255, 255, 0.07)" : "rgba(99, 102, 241, 0.05)",
              border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(99, 102, 241, 0.1)",
              backdropFilter: isDarkMode ? "blur(10px)" : "none",
              transition: "transform 0.15s ease",
              flexShrink: 0,
              "&:hover": {
                transform: "translateY(-3px)",
              },
            }}
          >
            <Avatar src={performer.avatar} alt={performer.name} sx={{ width: { lg: 32, xl: 40 }, height: { lg: 32, xl: 40 } }} />
            <Box flex={1} sx={{ minWidth: 0 }}>
              <Typography variant="subtitle2" sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 600, fontFamily: "Poppins, sans-serif", fontSize: { lg: "0.75rem", xl: "0.875rem" } }}>
                {performer.name}
              </Typography>
              <Typography variant="caption" sx={{ color: isDarkMode ? "rgba(255,255,255,0.7)" : "rgba(28,32,75,0.7)", fontFamily: "Poppins, sans-serif", fontSize: { lg: "0.7rem", xl: "0.75rem" } }}>
                {performer.achievement}
              </Typography>
            </Box>
            <Box textAlign="right" sx={{ flexShrink: 0 }}>
              <Typography sx={{ color: isDarkMode ? "#fff" : "#1c204b", fontWeight: 700, fontSize: { lg: "0.75rem", xl: "0.875rem" }, fontFamily: "Poppins, sans-serif" }}>
                {performer.score}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default TopPerformersCard;

