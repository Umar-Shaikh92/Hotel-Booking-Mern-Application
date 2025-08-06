import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Box, TextField } from '@mui/material';
import dayjs from 'dayjs';

export function BasicDateRangePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
      sx={{backgroundColor: '#f0f4ff',
        borderRadius: 'none'
      }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField {...startProps} label="Start date" />
            <TextField {...endProps} label="End date" />
          </Box>
        )}
      />
    </LocalizationProvider>
  );
}






// Start & End Date Individual Fields**********
// import * as React from 'react';
// import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TextField, Box } from '@mui/material';
// import dayjs from 'dayjs';

// export function BasicDateRangePicker() {
//   const [startDate, setStartDate] = React.useState(null);
//   const [endDate, setEndDate] = React.useState(null);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <Box sx={{ display: 'flex', gap: 2 }}>
//         <DatePicker
//           label="Start Date"
//           value={startDate}
//           onChange={(newValue) => setStartDate(newValue)}
//           renderInput={(params) => <TextField {...params} />}
//         />
//         <DatePicker
//           label="End Date"
//           value={endDate}
//           onChange={(newValue) => setEndDate(newValue)}
//           renderInput={(params) => <TextField {...params} />}
//         />
//       </Box>
//     </LocalizationProvider>
//   );
// }
