import { EventType } from '@testing-library/react';
import React, { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCompetitors } from './competitor.slice';


const googleURL = 'http://localhost:3000/competitors';

export function SearchCompetitorBtn () {
  const center = useSelector((state: any) => state.coffeePlace.value);
  const dispatch = useDispatch();
  const [coordinates, setCoordinatesValue] = useState();
  
  const handleSubmit = async (event: FormEvent) => {
    const { data } = await axios.get(googleURL, {
      params: center
    }); 
    dispatch(setCompetitors(data));
  }

    return (
      <input type="button" value="Search competitor" onClick={e => { handleSubmit(e) }}/>
    );
}