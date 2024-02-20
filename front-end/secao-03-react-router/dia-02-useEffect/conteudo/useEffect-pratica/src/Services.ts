export const fetchISS = async () => {
  const response = await fetch('https://api.wheretheiss.at/v1/satellites/25544');

  if (!response.ok) {
    throw new Error(`Failed to fetch coordinates`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const coordinates = await response.json();


  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const latitude = Number(coordinates.latitude.toFixed(4));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
  const longitude = Number(coordinates.longitude.toFixed(4));

  return { latitude, longitude };

}
