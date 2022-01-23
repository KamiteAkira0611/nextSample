import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import React from 'react';



const Demo = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const opensnackbar= () => {
    enqueueSnackbar("aaaaaaa", { 
      variant: 'success',
    })
  }
  return <div>
    <Button variant="text" onClick={() => opensnackbar()}>Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </div>;
};

export default Demo;
