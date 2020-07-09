import styled from "styled-components";

// SL - Server list
// SN - Server name 
// CI - Channel info
// CL - Channel list
// CD - Channel Data
// UI - User Infor


export const Grid = styled.div`
display: grid;

grid-template-columns: 71px 240px auto 240px;
grid-template-rows: 46px auto 52px;

grid-template-areas: 
  'SL SN CI CI'
  'SL CL CD UL'
  'SL UI CD UL';

  height: 100vh;
`;