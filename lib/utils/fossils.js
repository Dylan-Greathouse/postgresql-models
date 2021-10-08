import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchFossilApi = async (resource, name) => {
  const fossilsData = await fetch(`${rootAPI}/${resource}/${name}`);

  const fossil = await fossilsData.json();
  const fossilVal = Object.values(fossil);
  return {
    fossil: fossilVal[0],
    price: fossilVal[2],
    museum: fossilVal[3]
  };

};
