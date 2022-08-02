import logo from './logo.svg';
import './App.css';
import { getQueriesForElement } from '@testing-library/react';
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { Addcolor } from './Addcolor';
import { Shopping } from './Shopping';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
function App() {
  const navigate=useNavigate();
  let things = [
    {name:"Casio Men's 10-Year Battery Japanese Quartz Watch with Resin Strap, Black, 21 (Model: AE-1200WH-5AVCF), Black, Quartz Watch",code:"xxyyzz890",img:"https://m.media-amazon.com/images/I/61c3hE0YD4L._AC_SL1102_.jpg",rate:599}, 
  {name:"Casio Men's Quartz Watch with Resin Strap, Black, 17 (Model: W-800H-1BVCF), Black, Adult, Standard",code:"xxyyzz678",img:"https://m.media-amazon.com/images/I/81tJbphbh0L._AC_SY741_.jpg",rate:699}, 
  {name:"Invicta Men's Pro Diver Quartz Watch with Stainless Steel Strap, Silver, 20 (Model: 43545)",code:"xxyyzz345",img:"https://m.media-amazon.com/images/I/61BLkxNq0dL._AC_SX679_.jpg",rate:399},
   {name:"Timex X Stranger Things Watch, Stranger Things Atlantis, Chronograph",code:"xxyyzz431",img:"https://m.media-amazon.com/images/I/61+LK3GpkhL._AC_SY741_.jpg",rate:799}];
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={()=>navigate("/addcolor")}>ADD COLOUR</Button>
          <Button color="inherit" onClick={()=>navigate("/shopping")}>SHOPPING</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <Routes>
        <Route path="/addcolor" element={<Addcolor />} />
        <Route path="/shopping" element={<Shopping items={things}/>} />
      </Routes>
    </div>
  );
}
export default App;
