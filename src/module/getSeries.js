import displaySeries from "./displaySeries";
const getSeries = async () => {
    const dataStream = await fetch('https://api.tvmaze.com/shows');
    const dataResponse = await dataStream.json();
    console.log(dataResponse)
    dataResponse.forEach(element => {
        displaySeries(element)
    });
}
getSeries()

export default getSeries;