import readline from "readline";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

export default async function(key){
	return new Promise((resolve, reject) => {
		try {
			rl.question(`What's your ${key} ? :`, data => {
				resolve(data);
			});
		} catch (error) {
			reject(error);
		}
	});
}