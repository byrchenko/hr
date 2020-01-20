import { EMPLOYEE_ENTITY } from "../_store/entities";
import {
	EMPLOYEE_PERMISSION,
	HR_PERMISSION,
	SUPERVISOR_PERMISSION,
} from "../_store/roles";

export default {
	/**
	 *
	 */
	[EMPLOYEE_PERMISSION]: [
		{
			title: "Главная",
			link: "/hr/",
		},
	],

	/**
	 *
	 */
	[SUPERVISOR_PERMISSION]: [
		{
			title: "Главная",
			link: "/hr/",
		},
	],

	/**
	 *
	 */
	[HR_PERMISSION]: [
		{
			title: "Главная",
			link: "/hr/",
		},
		{
			title: "Настройки",
			link: "/hr/settings",
		},
		{
			title: "Управление процессом оценки",
			link: "/hr/processing",
		},
	],

	/**
	 *
	 */
	default: [
		{
			title: "Главная",
			link: "/hr/",
		},
	],
};
