import './index.css';
import getSeries from './module/getSeries';

window.onload = async () => {
    const items = await getSeries();
    displaySeries(items);
};
