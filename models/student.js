const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const { stringify } = require("uuid");

const StudentSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	rollno: {
		type: String,
		required: true,
		unique: true,
	},

	// course: {
	// 	type: String,
	// 	// required: true
	// 	enum: ['Btech','Mtech','Phd','DualDeg'],
	// 	default: 'Btech'
	// }
	properties: {
		type: Object,
		oneOf: [
			{
				properties: {
					course: {
						const: "Btech",
					},
					branch: {
						enum: ["It", "It-Bin", "ECE"],
					},
					year: {
						enum: ["2017", "2018", "2019", "2020", "2021"],
					},
				},
			},
			{
				properties: {
					course: {
						const: "DualDeg",
					},
					branch: {
						enum: ["It", "ECE"],
					},
					year: {
						enum: ["2017", "2018", "2019", "2020", "2021"],
					},
				},
			},
		],
	},
	// Subjects
});

StudentSchema.plugin(passportLocalMongoose);

const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
