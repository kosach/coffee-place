import { EventType } from '@testing-library/react';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCoordinates } from './coffee-place.slice';

export function SetCoffeePlaceForm () {
  const dispatch = useDispatch();
  const [coordinates, setCoordinatesValue] = useState();
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if(coordinates){
      const [lat, lng] = (coordinates as any).split(',').map((el: string) => +el);
      if(lat && lng){
        dispatch(setCoordinates({ lat: +lat, lng: +lng }));
      }
    }
    
  }

    return (
      <form onSubmit={e => { handleSubmit(e) }}>
        <label>
          Name:
          <input type="text" value={coordinates} onChange={e => setCoordinatesValue(e.target.value as any)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}