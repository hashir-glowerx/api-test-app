import React from 'react';
import {useSnackbar,SnackbarProvider } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();

  React.useEffect(() => {
    const variant = 'success';
    enqueueSnackbar('Thanks for joining us!',{variant});
     
  }, [])

 
  return (
    <>
    </>
  );
}
export default function IntegrationNotistack() {
    return (
      <SnackbarProvider maxSnack={1}>
        <MyApp />
      </SnackbarProvider>
    );
  }