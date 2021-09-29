import fetch from 'node-fetch';

const rootAPI = 'https://acnhapi.com/v1';

export const fetchBugs = async () => {
  const bugsData = await fetch(`${rootAPI}/bugs`);
  const bugs = await bugsData.json();
  return bugs;
};
