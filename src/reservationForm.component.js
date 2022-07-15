import React, { useState } from 'react'
import { Controller } from "react-hook-form";
import { TextField } from '@mui/material'


const defaultValues = {
  formTitle   : "",
  formAuthor  : "",
  formCategory: "",
  formPrice   : "",
  formStock   : ""
};

const ReservationForm = ({ control }) => {
  
  return (
    <>
      <Controller
        render  = {({ field }) => <TextField {...field} sx={{m: 0.5}} id = "form-title" label = "Title" variant = "outlined" /> }
        name    = "formTitle"
        control = {control}
      />
      <Controller
        render  = {({ field }) => <TextField {...field} sx={{m: 0.5}} id = "form-author" label = "Author" variant = "outlined" /> }
        name    = "formAuthor"
        control = {control}
      />
      <Controller
        render  = {({ field }) => <TextField {...field} sx={{m: 0.5}} id = "form-category" label = "Category" variant = "outlined" /> }
        name    = "formCategory"
        control = {control}
      />
      <Controller
        render  = {({ field }) => <TextField {...field} sx={{m: 0.5}} id = "form-price" label = "Price" variant = "outlined" /> }
        name    = "formPrice"
        control = {control}
      />
      <Controller
        render  = {({ field }) => <TextField {...field} sx={{m: 0.5}} id = "form-stock" label = "Stock" variant = "outlined" /> }
        name    = "formStock"
        control = {control}
      />
    </>
  )
} 

export default ReservationForm;