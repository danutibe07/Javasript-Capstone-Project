import displaySeries from './displaySeries.js';

const getSeries = async () => {
  const dataStream = await fetch('https://api.tvmaze.com/shows');
  const dataResponse = await dataStream.json();
  dataResponse.forEach((element) => {
    displaySeries(element);
  });
};
getSeries();

export default getSeries;