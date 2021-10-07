import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchSeaApi = async (resource, name) => {
  const seasData = await fetch(`${rootAPI}/${resource}/${name}`);

  const sea = await seasData.json();
  const seaVal = Object.values(sea);
  console.log('seasssss', seaVal[6]);
  return {
    sea: seaVal[1],
    price: seaVal[6],
    museum: seaVal[8]
  };

};
