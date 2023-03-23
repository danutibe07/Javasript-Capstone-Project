const url = 'https://api.tvmaze.com/shows';

const getImageData = async () => {
	try {
		const res = await fetch(url);
		const data = await res.json();
		// console.log(data)
		// return data;
	} catch (e) {
		throw new Error('something wrong');
	}
};

export default getImageData;
