import getResponse from "../lib/question";
import client from "../client";
const userType = {
	firstname: "",
	lastname: "",
	nickname: "",
	age: 0,
	password: "",
	password_confirmation: "",
	email: ""
};

export default async function() {
	try {
		console.log("yes");
		const user = Object.assign({}, userType);
		for (const key in user) {
			user[key] = await getResponse(key);
		}
		client.signUp(user, (error, response) => {
			if (error) throw error;
			console.log(response);
		});
	} catch (error) {
		console.log();
	}
}
