import { Box, Typography, styled } from "@mui/material";
import { styled as styles } from "styled-components";

export const ModalStyles = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
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

export const FormWrapper = styles.div`
display: flex; 
gap: 20px;
`;

export const DescriptionWrapper = styles.div`
display: flex;
flex-direction: column;
gap: 15px;
margin-top: 20px;
`;

export const ButtonWrapper = styles.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    padding: 20px;
`;
