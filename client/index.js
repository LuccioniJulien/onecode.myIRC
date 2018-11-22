import readline from "readline";
import signIn from "./rpc/sign_in";
import signUp from "./rpc/sign_up";
import profile from "./rpc/profile";
import join from "./rpc/join";
import send from "./rpc/send";
import leave from "./rpc/leave";
import list from "./rpc/list";
import history from "./rpc/history";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const cmd = { signUp };

rl.question(`waiting for comd:`, async data => {
	try {
		await cmd[`${data}`]();
	} catch (error) {
		console.log("Cmd not found");
		console.log(error.message);
	}
});

// client.signIn({}, () => {});
// client.profile({}, () => {});
// client.join({}, () => {});
// client.send({}, () => {});
// client.leave({}, () => {});
// client.list({}, () => {});
// client.history({}, () => {});
// console.log(process.env.PORT);
