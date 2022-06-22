import { PropTypes } from 'prop-types'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import TextField from '@mui/material/TextField'
import { useLocalStorage } from '../useLocalStorage/useLocalStorage'


// function Plant(props) {
  const Plant = () => {
    let [water, setWater] = useLocalStorage('water', 0);
    let [soil, setSoil] = useLocalStorage('soil', 0);
    let [light, setLight] = useLocalStorage('light', 0);
    let [names, setName] = useLocalStorage('name', '');

    const handleChange = (event) => {
      setName(event.target.value);
      };

    return (
      <React.Fragment>
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
            onChange={handleChange}
          />
        </Box>
        <h3>{names}</h3>
        <p>{soil} - {water} - {light}</p> 
      <React.Fragment>
      <Box sx={{ 
        m:1,
        }}>
        <React.Fragment>
          <Button 
            variant="contained"
            size="medium"
              sx={{
                minWidth: 100,
                borderRadius: 2,
                margin: 1
              }}
              onClick={() => {
                setSoil(soil + 1);
                
              }}
            >Soil
          </Button>
          </React.Fragment> 
          <React.Fragment>
          <Button 
            variant="contained"
            size="medium"
              sx={{
                minWidth: 100,
                borderRadius: 2,
                margin: 1
              }}
              onClick={() => {
                setWater(water + 1);
              }}
            >Water
          </Button>
          </React.Fragment>
          <React.Fragment>
          <Button 
            variant="contained"
            size="medium"
              sx={{
                minWidth: 100,
                borderRadius: 2,
                margin: 1
              }}
              onClick={() => {
                setLight(light + 1);
              }}
            >Light
          </Button>
        </React.Fragment>
      </Box>
    </React.Fragment>
      </React.Fragment>
    );
}

  Plant.propTypes = {
      water: PropTypes.number,
      soil: PropTypes.number,
      light: PropTypes.number,
      names: PropTypes.string
    };

export default Plant;