import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchFossils = async () => {
  const fossilsData = await fetch(`${rootAPI}/fossils`);
  const fossils = await fossilsData.json();
  return fossils;
};
