import React, { useState } from 'react'
import { useLocalStorage } from '../useLocalStorage/useLocalStorage'
import { Button, Box, TextField } from '@mui/material'
import PlantClass from './PlantClass'
import Plant from './Plant'


export function NewPlant () {
  const newPlant = new PlantClass();

  const [plantValue, setPlantValue] = useLocalStorage(0, 0);
  const [name, setName] = useState('','')

  const handleNameChange = (event) => {
  setName(event.target.value);
  };

  const handleChange = (event) => {
  setName(event.target.value);
  };

  return (
    <React.Fragment>
      <>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          autoComplete="off"
        >
          <TextField 
            id="name" 
            label="Name" 
            variant="standard"
            onChange={handleNameChange}
          />
        </Box>
      </>
      <>
        <Button
        variant="contained"
        color="success"
        onChange={handleChange}
        onClick={() => {
          console.log()
        }}>
        Create New Plant
        </Button>
      </>
    </React.Fragment>
  )
}
export default NewPlant;