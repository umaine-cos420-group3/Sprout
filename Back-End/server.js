import express from 'express'; 

const Sprout = express(); 

Sprout.get('/', (req, res) =>
				res.send('Sprout main page'))

const server = Sprout.listen(3000, ()  => {
	const { address, port } = server.address(); 
	console.log(`add:${address}por:${port}`);

});
