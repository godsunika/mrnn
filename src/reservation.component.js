import React, { useState } from 'react'
import ReservationForm from '~/reservationForm.component'
import { useForm } from "react-hook-form";
import { Box, Button } from '@mui/material';


const defaultValues = {
  formTitle   : "",
  formAuthor  : "",
  formCategory: "",
  formPrice   : "",
  formStock   : ""
};

const Reservation = () => {
  
  const { handleSubmit, reset, setValue, control } = useForm({ defaultValues });
  const [data, setData] = useState(null);

  return (
    
      <form onSubmit={handleSubmit((data) => setData(data))}>
        <Box
          pt            = {30}
          px            = {5}
          width         = "auto"
          display       = "flex"
          flexDirection = 'column'
        >
          <ReservationForm control={control} />
          <Button variant="contained" type="submit">Submit</Button>  
          {/* <button className="button">submit</button> */}
        </Box>
        {console.log(data)}
      </form>
  )
}

export default Reservation;