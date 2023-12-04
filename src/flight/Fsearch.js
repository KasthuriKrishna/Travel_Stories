import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { DateField } from '@mui/x-date-pickers/DateField';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/base';
import './Fsearch.css';
const SearchForm = ({ onSearch }) => {
  const [isShown, setIsShown] = useState(false);
  const handleSearch = () => {
    // Perform search logic
    setIsShown(current => !current);
  };

  return (
    <>
    <div className='xxx'>
    <table>
    <tbody>
    <tr>
    <td><Avatar className='img1'
    alt="Remy Sharp"
    src="https://static.vecteezy.com/system/resources/previews/008/215/493/original/plane-aircraft-line-pop-art-potrait-logo-colorful-design-with-dark-background-abstract-illustration-isolated-black-background-for-t-shirt-poster-clothing-merch-apparel-badge-design-vector.jpg"
    sx={{ width: 80, height: 80 }}
  />
    </td>
    <td><h1 className='align' ><a href='./Home' style={{textDecoration:'none',color:'black'}}>Travel_Stories </a>> Online Ticket Bookings</h1></td></tr></tbody></table>
    <div style={{textAlign:'center'}}>
    <h3>One-Way</h3>
      <h5>FROM</h5>
      <input style={{width:300,height:50}}
        type="text"
        placeholder="Origin"
        //value={origin}
        //onChange={(e) => setOrigin(e.target.value)}
      />
      <h5>TO</h5>
      <input style={{width:300,height:50}}
        type="text"
        placeholder="Destination"
        //value={destination}
        //onChange={(e) => setDestination(e.target.value)}
      />
      <h5>DEPARTURE</h5>
      <input style={{width:300,height:50}}
        type="date"
        placeholder="Departure"
        //value={date}
        //onChange={(e) => setDate(e.target.value)}
      />
      <h5>RETURN(OPTIONAL)</h5>
      <input style={{width:300,height:50}}
        type="date"
        placeholder="Departure"
       // value={date}
        //onChange={(e) => setDate(e.target.value)}
      />
      <h5></h5>
      <button style={{width:150,height:50}} onClick={handleSearch}>Search</button>
      
      {isShown && (
        <div className='sres'>
          <h3>Search Results</h3>
        </div>
      )}
      <div className='result'>
      {isShown && <Boxed />}
      </div>
      </div>
    </div>
    </>
  );
};
function Boxed() {
  const navigate=useNavigate();
    const handlebook=()=>{
        navigate('/Checkout');
    }
  return (
    <>
    <div>

    <div>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 900,
        height: 128,
      },
    }}
    >
    <Paper elevation={3}>
    <table>
    <tbody>
    <tr>
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="data:image/png;base64,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"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>Air India<br/>
    6E 5355, 6E 194</h5></td>
    <td><h5 className='txt'>22:45<br/>
    Coimbatore</h5></td>
    <td><h5 className='txt'>08 h 50 m<br/>
    1 stop via Bengaluru</h5></td>
    <td><h5 className='txt'>07:35<br/>
    Goa - Dabolim Airport</h5></td>
    <td><h5 className='txt'>₹ 7,286<br/>
    per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
    </tr>
    </tbody>
    </table>
    </Paper>
    </Box>
    </div>
    <div>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 900,
        height: 128,
      },
    }}
    >
    <Paper elevation={3}>

    <table>
    <tbody>
    <tr>
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="https://seeklogo.com/images/V/vistara-logo-C07710BC2B-seeklogo.com.png"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>Vistara<br/>
    AI 539, AI 605</h5></td>
    <td><h5 className='txt'>15:10<br/>
    Coimbatore</h5></td>
    <td><h5 className='txt'>25 h 15 m<br/>
    1 stop via Chennai&nbsp;</h5></td>
    <td><h5 className='txt'>16:25<br/>
    Goa - Dabolim Airport</h5></td>
    <td><h5 className='txt'>₹ 49,885<br/>
    &nbsp;&nbsp;{'\t'}per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
    </tr>
    </tbody>
    </table>
    </Paper>
    </Box>
    </div>
    <div>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 900,
        height: 128,
      },
    }}
    >
    <Paper elevation={3}>

    <table>
    <tbody>
    <tr>
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/2048px-AirAsia_New_Logo.svg.png"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>Air Asia<br/>
    UK 532, UK 557</h5></td>
    <td><h5 className='txt'>15:20<br/>
    Coimbatore</h5></td>
    <td><h5 className='txt'>02 h 40 m<br/>
    1 stop via New Delhi</h5></td>
    <td><h5 className='txt'>07:35<br/>
    Goa - Dabolim Airport</h5></td>
    <td><h5 className='txt'>₹ 18,286<br/>
    per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
    </tr>
    </tbody>
    </table>
    </Paper>
    </Box>
    </div>
    <div>
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 900,
        height: 128,
      },
    }}
    >
    <Paper elevation={3}>

    <table>
    <tbody>
    <tr>
    <td>
    <Avatar className='img'
  alt="Remy Sharp"
  src="data:image/png;base64,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"
  sx={{ width: 60, height: 60 }}
/>
    </td>
    <td ><h5 className='txt'>Indigo<br/>
    6E 5355, 6E 194</h5></td>
    <td><h5 className='txt'>22:45<br/>
    Coimbatore</h5></td>
    <td><h5 className='txt'>08 h 50 m<br/>
    1 stop via Bengaluru</h5></td>
    <td><h5 className='txt'>07:35<br/>
    Goa - Dabolim Airport</h5></td>
    <td><h5 className='txt'>₹ 7,286<br/>
    per adult</h5></td>
    <td><Button onClick={handlebook}>Book Now</Button></td>
    </tr>
    </tbody>
    </table>
    </Paper>
    </Box>
    </div>
    </div>
    </>
  );
}
export default SearchForm;