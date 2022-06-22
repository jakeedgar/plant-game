import React from 'react';
import Plant from './Plant'
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';
import { Button } from '@mui/material'


export function NewPlant () {
  const [plantValue, setPlantValue] = useLocalStorage(0, 0);

  const handleChange = (event) => {
  setPlantValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Button
      variant="contained"
      onChange={handleChange}
      onClick={() => {
        console.log("I have been clicked!")
      }}>
      New Plant
      </Button>
    </React.Fragment>
  )
}