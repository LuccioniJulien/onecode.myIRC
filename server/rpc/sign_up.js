import User from "models/user.js";

export default async function(call, callback) {
	try {
    const user = new User(call.request);
    await user.save();
		callback(null, { text: user.toJSON() });
	} catch (error) {
		callback(null, { text: error.message });
	}
}
