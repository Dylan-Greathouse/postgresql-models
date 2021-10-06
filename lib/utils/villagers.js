import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchApi = async (resource, id) => {
  const villagersData = await fetch(`${rootAPI}/${resource}/${id}`);
  const villager = await villagersData.json();
  return {
    villager: villager.name['name-USen'],
    personality: villager.personality,
    saying: villager.saying,
    hobby: villager.hobby
  };
  
 
};