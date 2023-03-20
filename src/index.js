import './index.css';
import getSeries from './module/getSeries.js';
import displaySeries from './module/displaySeries.js';

window.onload = async () => {
  const items = await getSeries();
  displaySeries(items);
};
