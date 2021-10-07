import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchFishApi = async (resource, name) => {
  const fishesData = await fetch(`${rootAPI}/${resource}/${name}`);

  const fish = await fishesData.json();
  const fishVal = Object.values(fish);
  console.log('fishessss', fishVal[8]);
  return {
    fish: fishVal[1],
    price: fishVal[5],
    museum: fishVal[8]
  };

};
