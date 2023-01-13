import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import DataTable from "./components/Table";
import data from "./MOCK_DATA.json";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SearchIcon from "@mui/icons-material/Search";
import NoteAltIcon from "@mui/icons-material/NoteAlt";


function App() {
  const [status, setStatus] = useState("All");
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState([]);
  const [dateValue, setDateValue] = useState([null, null]);
  const searchIn = ["vendor", "vendor_code", "description"];
  const statusCategory = [
    "All",
    "GRN posted",
    "Accepted",
    "Review Req",
    "Dispatched",
    "Rejected",
    "Open",
  ];
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const filterWithStatus = (data) => {
    if (status === "All" || status === "") {
      return data;
    } else {
      return data.filter((item) => item.status === status);
    }
  };

  const search = (data) => {
    return data.filter((item) => {
      return searchIn.some((key) =>
        item[key].toString().toLowerCase().includes(query)
      );
    });
  };

  const filterWithDate = (data) => {
    return data.filter((item) => {
      let filter = true;
      const date = new Date(item.due_date).getTime();
      const startDate = new Date(dateValue[0]?.$d).getTime() || null;
      const endDate = new Date(dateValue[1]?.$d).getTime() || null;
      if (startDate) {
        filter = filter && startDate < date;
      }
      if (endDate) {
        filter = filter && endDate > date;
      }
      return filter;
    });
  };

  useEffect(() => {
    let filterData = data;
    filterData = filterWithStatus(filterData);
    filterData = filterWithDate(filterData);
    filterData=search(filterData);
    setRows(filterData);
  }, [status, dateValue,query]);
  return (
    <>
      <Header />
      <Stack my={2} mx={2} direction={"row"} alignItems="center" gap={2}>
      <NoteAltIcon sx={{fontSize:"2rem"}}/> 
      <Typography variant="h4" >Purchase orders </Typography>
      </Stack>
      <Stack my={4} mx={2} direction={"row"} gap={4}>
        <FormControl>
          <InputLabel id="status-label">Status</InputLabel>

          <Select
            labelId="status-label"
            id="status-select"
            value={status}
            label="Status"
            onChange={handleStatusChange}
            sx={{ width: "10rem" }}
          >
            {statusCategory.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <LocalizationProvider
          dateAdapter={AdapterDayjs}
          localeText={{ start: "Start-Date", end: "End-Date" }}
        >
          <DateRangePicker
            value={dateValue}
            onChange={(newValue) => {
              setDateValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...startProps}
                />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CalendarMonthIcon />
                      </InputAdornment>
                    ),
                  }}
                  {...endProps}
                />
              </>
            )}
          />
        </LocalizationProvider>
        <TextField
          id="search-in"
          label="Search"
          variant="outlined"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <DataTable rows={rows} />
    </>
  );
}

export default App;
