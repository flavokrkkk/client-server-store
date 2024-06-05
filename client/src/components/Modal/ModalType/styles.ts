import { Box, Typography, styled } from "@mui/material";
import { styled as styles } from "styled-components";

export const ModalStyles = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  backgroundColor: "#fff",
  boxShadow: "24px",
  padding: "50px",
});

export const ModalTitle = styled(Typography)({
  textAlign: "center",
  marginBottom: "30px",
  fontWeight: "300",
});

export const Hr = styles.hr`
    margin-top: 10px;
`;

export const ModalBody = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "30px",
});
