import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, CircularProgress } from "@mui/material";
import axios from "axios";

interface DataItem {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", width: 100 },
  { field: "id", headerName: "ID", width: 100 },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 500 },
];

const FetchPost: React.FC = () => {
  const [rows, setRows] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<DataItem[]>(
          "https://jsonplaceholder.typicode.com/posts"
        ); // data fetches process ho ri h
        setRows(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSizeOptions={[5]}
          pagination
        />
      </Box>
    </>
  );
};

export default FetchPost;
