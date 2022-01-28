import React, { useEffect, useRef } from 'react';

export function MyMapComponent({
  center,
  zoom,
  competitors,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
  competitors?: google.maps.LatLngLiteral[]
}) {
  
    const iconBase =
    "/icons/";
  const ref = useRef();

  useEffect(() => {
    const markers: google.maps.ReadonlyMarkerOptions[] = [{
      position: center as google.maps.ReadonlyLatLngLiteral,
      icon: iconBase + '—Pngtree—vector coffee icon_3773438 (4).png',
      title:"Hello World!"
    }];
    const map = new window.google.maps.Map(ref.current as any, {
      center,
      zoom,
    });
    var marker = new google.maps.Marker({
      position: center,
      icon: iconBase + '—Pngtree—vector coffee icon_3773438 (4).png',
      title:"Hello World!"
    });
    if (competitors && competitors.length > 0 ){
      competitors.forEach(el => markers.push({ position: el}));
    }
    const bounds = new google.maps.LatLngBounds();
    var infowindow = new google.maps.InfoWindow();
    markers.forEach(el => { 
      const position = new google.maps.LatLng(el?.position?.lat as number, el?.position?.lng as number);
      const markerData = {
        position,
        map,
        icon: el.icon,
      }
      const marker =  new google.maps.Marker(markerData);
      bounds.extend(position);
      google.maps.event.addListener(marker, 'click', (e) => {
        console.log('🚀 ~ file: Map.tsx ~ line 46 ~ google.maps.event.addListener ~ e', e);
        infowindow.setContent('Test content');
        infowindow.open(map, marker);
      });
    });
    if (competitors && competitors.length > 0){
      map.fitBounds(bounds); 
    }
  });

  return <div ref={ref as any} id="map" />;
}