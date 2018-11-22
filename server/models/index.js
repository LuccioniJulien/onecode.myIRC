import Sequelize, { Op } from "sequelize";
import User from "./user";

export const db = new Sequelize(process.env.DATABASE_URL, {
	operatorsAliases: Op,
	define: {
		underscored: true
	}
});

const models = { User };

for (const key in models) {
	models[key].init(db, Sequelize);
	models[key].setRelation();
}
