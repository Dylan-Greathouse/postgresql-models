import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchSeas = async () => {
  const seasData = await fetch(`${rootAPI}/seas`);
  const seas = await seasData.json();
  return seas;
};
