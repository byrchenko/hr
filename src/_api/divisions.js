import { employee, supervisor, hr } from "./employee";

export default [
	/**
	 * Division
	 */
	{
		id: 0,
		title: "Ассортимент",
		children: [
			/**
			 * Subdivision
			 */
			{
				id: 1,
				title: "Интернет магазин",
				children: null,
				employees: [employee, supervisor, hr],
			},

			/**
			 * Another subdivision
			 */
			{
				id: 2,
				title: "ИТ",
				children: null,
				employees: [employee],
			},

			/**
			 * Another subdivision
			 */
			{
				id: 3,
				title: "ИТ",
				children: null,
				employees: [employee],
			},
		],
		employees: [employee, supervisor, hr],
	},

	/**
	 * Another division
	 */
	{
		id: 3,
		title: "Ассортимент",
		children: [
			/**
			 * Subdivision
			 */
			{
				id: 4,
				title: "Интернет магазин",
				children: null,
				employees: [employee, supervisor, hr],
			},

			/**
			 * Another subdivision
			 */
			{
				id: 5,
				title: "ИТ",
				children: null,
				employees: [employee],
			},
		],
		employees: null,
	},
];
