import BreakdownChart from "@/components/BreakdownChart";
import Header from "@/components/Header";
import { Box } from "@mui/material";

function Breakdown() {
  return (
    <Box height="100%" maxHeight="85vh" m="1.5rem 2.5rem">
      <Header title="Breakdown" subtitle="Chart for breakdown of Sales" />
      <Box mt="40px" height="72vh">
        <BreakdownChart />
      </Box>
    </Box>
  );
}

export default Breakdown;
