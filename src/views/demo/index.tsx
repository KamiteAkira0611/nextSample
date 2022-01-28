import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';
import { Link } from 'react-router-dom';

const Demo = () => {
  const { enqueueSnackbar } = useSnackbar()
  const opensnackbar= () => {
    enqueueSnackbar("aaaaaaa", { 
      variant: 'success',
    })
  }
  return <div>
    <Button variant="text" onClick={() => opensnackbar()}>Text</Button>
    <Button variant="contained">Contained</Button>
    <Button
      component={Link}
      variant="outlined"
      to="/demo"
    >
      Outlined
    </Button>
  </div>;
};

export default Demo;
