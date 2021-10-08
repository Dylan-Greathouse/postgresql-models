import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchBugApi = async (resource, name) => {
  const bugsData = await fetch(`${rootAPI}/${resource}/${name}`);

  const bug = await bugsData.json();
  const bugVal = Object.values(bug);
  return {
    bug: bugVal[1],
    price: bugVal[5],
    museum: bugVal[7]
  };

};
