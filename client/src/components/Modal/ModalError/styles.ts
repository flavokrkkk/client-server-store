import { Box, Typography, styled } from "@mui/material";

export const ModalContent = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor: "#fff",
  boxShadow: "24",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
  padding: "20px",
});

export const ModalTitle = styled(Typography)({
  textAlign: "center",
  fontWeight: "300",
});
