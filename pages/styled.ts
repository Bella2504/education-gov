import styled from "@emotion/styled";
import { Open_Sans } from 'next/font/google'

export const open_sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  })
  
export const Container = styled.div`
  font-family: ${open_sans.style.fontFamily};

  .MuiBox-root {
    border: none;
  }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    padding: 10px 5%;
`;
