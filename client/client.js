import grpc from "grpc";

import path from "path";
import { argv, mlog } from "libs/utils";

const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync(path.join("proto", "myIRC.proto"), {
	keepCase: true,
	longs: String,
	enums: String
});
const proto = grpc.loadPackageDefinition(packageDef).myIRC;
const port = parseInt(argv[0], 10) || process.env.PORT;
const client = new proto.IrcService(
	`localhost:${port}`,
	grpc.credentials.createInsecure()
);

export default client;
