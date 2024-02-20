import { useState, useEffect } from 'react'
import './App.css'
import { fetchISS } from './Services'

type Coordinates = {
  latitude: number;
  longitude: number;
}

function App() {
  const [coordinatesIss, setCoordinatesIss] = useState<Coordinates | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      try {
        setLoading(true);
        const data = await fetchISS();
        setCoordinatesIss({latitude: data.latitude, longitude: data.longitude});
        setLoading(false);
      } catch(error) {
        setLoading(true)
      }
    }
    void fetchData();

    const intervalId = setInterval(() => {
      void fetchData();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    }
  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
    <h1>International Space Station Location Tracker</h1>
    {coordinatesIss && (
      <>
      <h2>{`Latitude: ${coordinatesIss.latitude}`}</h2>
      <h2>{`Longitude: ${coordinatesIss.longitude}`}</h2>
      </>
    )}
    </>
  )
}

export default App
