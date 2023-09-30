import styled from "@emotion/styled";
import { Open_Sans } from 'next/font/google'

export const open_sans = Open_Sans({
    subsets: ['latin'],
    display: 'swap',
  })
  
export const Container = styled.div`
  font-size: 1.5em;
  font-family: ${open_sans.style.fontFamily};
`;
