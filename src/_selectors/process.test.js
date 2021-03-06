import { selectProcessHrUsers, selectProcessUsers } from "./process";

/**
 *
 */

describe("Employees", () => {

	const state = {
		assessmentProcess: {
			employees: [{
				"id": 1,
				"name": "Денис",
				"last_name": "Черненко",
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": "довн",
				"positionId": 65272,
				"image": "\/upload\/main\/471\/IMG_0715.png",
				"last_assessment_date": null,
			}, {
				"id": 16,
				"name": "Марина",
				"last_name": "Черненко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/01f\/wQ4zPWr1K-4.png",
				"last_assessment_date": null,
			}, {
				"id": 20,
				"name": "Ирина",
				"last_name": "Щурова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/db5\/IMG_0768.png",
				"last_assessment_date": null,
			}, {
				"id": 24,
				"name": "Максим",
				"last_name": "Иванов",
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/934\/9349540a0a297521685f403dd6fb6bc1\/image.png",
				"last_assessment_date": null,
			}, {
				"id": 36,
				"name": "Максим",
				"last_name": "Михеев",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/6b1\/IMG_0751.JPG",
				"last_assessment_date": null,
			}, {
				"id": 38,
				"name": "Екатерина",
				"last_name": "Белоцерковская (Ржевская)",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/915\/915dbd29fa8f6840c464729e5f5a5b16\/dsc_9376.jpg",
				"last_assessment_date": null,
			}, {
				"id": 40,
				"name": "Максим",
				"last_name": "Тимощук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 48,
				"name": "Алексей",
				"last_name": "Ершов",
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/d98\/d983597afced32acc8442d8b91cb7757\/9DZxHauKH4E.jpg",
				"last_assessment_date": null,
			}, {
				"id": 50,
				"name": "Стас",
				"last_name": "Черевань",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/751\/751644ef41ee4afc8380bfc4e1353baa\/1.png",
				"last_assessment_date": null,
			}, {
				"id": 52,
				"name": "Богдана",
				"last_name": "Крылова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/6dd\/6dde204cd1d32ed8eab3d8714ae0b986\/pool_p_sm_0037.jpg",
				"last_assessment_date": null,
			}, {
				"id": 56,
				"name": "Лидия",
				"last_name": "Грищенко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/8bc\/8bc6fd69bc9de94f42886f12bf583d3c\/ya.jpg",
				"last_assessment_date": null,
			}, {
				"id": 58,
				"name": "Сергей",
				"last_name": "Переверзев",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/d29\/d295460e480644bf19aae1c89c0fbd9b\/YYsBO67VQ_g.jpg",
				"last_assessment_date": null,
			}, {
				"id": 62,
				"name": "Глеб ",
				"last_name": "Елецкий",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/157\/157682076db0b1e10abfbd93d090c5c4\/CAM02058.jpg",
				"last_assessment_date": null,
			}, {
				"id": 68,
				"name": "Павел",
				"last_name": "Стольник",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/a76\/a760ec1c519cdd874bb12a9e6a2ff516\/20180615_165904.jpg",
				"last_assessment_date": null,
			}, {
				"id": 70,
				"name": "Сергей",
				"last_name": "Зиньковский",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/219\/IMG_0795.png",
				"last_assessment_date": null,
			}, {
				"id": 72,
				"name": "Жилянская, ул., 102",
				"last_name": "магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/c9c\/c9c3bc76ff372574d41b910ff98ffb51\/3GEvliOjngc.jpg",
				"last_assessment_date": null,
			}, {
				"id": 74,
				"name": "Бажана, пр., 24\/1",
				"last_name": "магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/601\/60156cf020e1c09a17042c01ea4e56b7\/Nbajana.jpg",
				"last_assessment_date": null,
			}, {
				"id": 80,
				"name": "Артем",
				"last_name": "Черненко",
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/976\/97621cf11f37e09b46f9fcd10e0203d7\/images.jpg",
				"last_assessment_date": null,
			}, {
				"id": 86,
				"name": "Василий",
				"last_name": "Капущак",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/24e\/24e9398982ac00bb3d9afa854c1eae13\/IMG_2776.jpg",
				"last_assessment_date": null,
			}, {
				"id": 88,
				"name": "Владислав",
				"last_name": null,
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/136\/1363a9850f6a803117e48771f789cd3f\/952558_pustaya-avatarka-dlya-kontakta.png",
				"last_assessment_date": null,
			}, {
				"id": 98,
				"name": "Татьяна",
				"last_name": "Горяйстова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/961\/96171bc3c9d4b4183b1c74adf935f508\/FullSizeRender.jpg",
				"last_assessment_date": null,
			}, {
				"id": 100,
				"name": "Любовь",
				"last_name": "Коваленко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/157\/1579b1a0969a4e83c9735a3dd223395b\/38936836_eve.jpg",
				"last_assessment_date": null,
			}, {
				"id": 102,
				"name": "Ирина",
				"last_name": "Александрова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 104,
				"name": "Михаил",
				"last_name": "Федоров",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/531\/531275162810356ac7806ef92ebb0be3\/kot.jpg",
				"last_assessment_date": null,
			}, {
				"id": 112,
				"name": "Юрий",
				"last_name": "Сапрыкин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/821\/821036d413172d56959ad24e220a1b1f\/ui-5889b1761c5809.48354374.jpeg",
				"last_assessment_date": null,
			}, {
				"id": 114,
				"name": "Сергей",
				"last_name": "Личкун",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/8bf\/8bfc1106e7978292d313997533c38cb2\/d9420-bput5-iikss.jpg",
				"last_assessment_date": null,
			}, {
				"id": 118,
				"name": "Тамара",
				"last_name": "Белоусова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/a6a\/a6a8ee2580bde36cbe9af93b6cd68ca5\/gk9bqGERP18.jpg",
				"last_assessment_date": null,
			}, {
				"id": 120,
				"name": "Александр",
				"last_name": "Казьмин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 122,
				"name": "Голосеевский пр., 92\/1",
				"last_name": "магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/732\/732270d41263f913d0c3997de5d7bc0b\/IMG_8062.JPG",
				"last_assessment_date": null,
			}, {
				"id": 124,
				"name": "Руднева пл., 14\/1",
				"last_name": "магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/59b\/59bb1b238336a4f57e882bc2deb51ce1\/CYMERA_20190304_152443.png",
				"last_assessment_date": null,
			}, {
				"id": 126,
				"name": "23 Августа ул., 55",
				"last_name": "магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/e6f\/мы.png",
				"last_assessment_date": null,
			}, {
				"id": 128,
				"name": "Склад",
				"last_name": "ЦСВ",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 130,
				"name": "Склад",
				"last_name": "Е19 и Е19А",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 134,
				"name": "Антон",
				"last_name": "Левчук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/b57\/b579883a440b725fe331d7ce431857f3\/IMG_0453.JPG",
				"last_assessment_date": null,
			}, {
				"id": 136,
				"name": "Мирослава",
				"last_name": "Гаврилюк",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/22c\/22c4c8004dff5246ad75b0909904ded9\/y_AXXzsXl1E.jpg",
				"last_assessment_date": null,
			}, {
				"id": 138,
				"name": "Влад",
				"last_name": "Стрелец",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/900\/9002f89d6c5127ac0521dc1f53f47f1b\/i6Lugd6lcIg.jpg",
				"last_assessment_date": null,
			}, {
				"id": 142,
				"name": "Вадим",
				"last_name": "Серый",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/5bd\/5bd50a72fce568a625a1201d26de5c6f\/oEZcYYrnu7c.jpg",
				"last_assessment_date": null,
			}, {
				"id": 146,
				"name": "Виталий",
				"last_name": "Харабуа",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/fdc\/fdc7a580d3426e4cba52b215870b73d4\/111222.jpg",
				"last_assessment_date": null,
			}, {
				"id": 160,
				"name": "Алена",
				"last_name": "Маковецкая",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/beb\/bebba54999b6dc0ef30dd12db77503b8\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 162,
				"name": "Виктория",
				"last_name": "Климчук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/73d\/73dd2544911aab3815f07ea12cac82c3\/IMG_20180613_181349_972.jpg",
				"last_assessment_date": null,
			}, {
				"id": 168,
				"name": "Алексей",
				"last_name": "Камм",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/dfb\/dfbbcea313a6e29a678093437e06737a\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 202,
				"name": "Подол Н. Вал, ул., 15",
				"last_name": "магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/6ae\/6ae2391e5193f96bc0d05177e5c7c4fe\/796z_xZfdyA.jpg",
				"last_assessment_date": null,
			}, {
				"id": 206,
				"name": "Обратная",
				"last_name": "Связь",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 218,
				"name": "Наталья",
				"last_name": "Жежерун",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/1c6\/1c60399bd730fce9c35009228f4d269d\/nastroechnaya tablitsa.jpg",
				"last_assessment_date": null,
			}, {
				"id": 220,
				"name": "Мила",
				"last_name": "Голец",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/97e\/97e7e0d25f7ebc7770728231dd95bdc5\/YA i vesna_.jpg",
				"last_assessment_date": null,
			}, {
				"id": 312,
				"name": "Мария",
				"last_name": "Касаткина",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/55d\/55d107fea74c598e2cee581959121655\/photo_2018-06-07_11-32-35.jpg",
				"last_assessment_date": null,
			}, {
				"id": 324,
				"name": "Дмитрий",
				"last_name": "Лактионов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/c29\/IMG_0807.png",
				"last_assessment_date": null,
			}, {
				"id": 358,
				"name": "Денис",
				"last_name": "Любимов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/f29\/IMG_0762.png",
				"last_assessment_date": null,
			}, {
				"id": 370,
				"name": "Анжелика",
				"last_name": "Подгорная",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/65b\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 382,
				"name": "Иванов",
				"last_name": "Алексей",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/b23\/b2342005a953029ca05fc32b173c9632\/wdwAZzxXrv0.jpg",
				"last_assessment_date": null,
			}, {
				"id": 408,
				"name": "Владислав",
				"last_name": "Зализко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/119\/1198ba1fe39e368dc6c82d32ac6f9f0c\/GG1czn3Kf1I.jpg",
				"last_assessment_date": null,
			}, {
				"id": 422,
				"name": "Андрей",
				"last_name": "Батюк",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/f51\/f51e49ef1e1aade2d365e44338c98680\/IMG_20170111_135016.jpg",
				"last_assessment_date": null,
			}, {
				"id": 426,
				"name": "Одесса",
				"last_name": "Магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/e22\/e221c37e1c9739b23207fee0f02aa771\/C19_Topstone_1745.png",
				"last_assessment_date": null,
			}, {
				"id": 434,
				"name": "Диана",
				"last_name": "Кошеленко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/341\/3414025ce77f9b182843e07dc4aad776\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 436,
				"name": "Дмитрий",
				"last_name": "Вишневский",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/2ca\/2ca6e4ba4fc1f66fa11cea6a546998df\/e43944a0caea4008b5324af3abcd9834.jpg",
				"last_assessment_date": null,
			}, {
				"id": 438,
				"name": "Михаил",
				"last_name": "Малий",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 440,
				"name": "Константин",
				"last_name": "Семенов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/5b4\/5b4f814e92778b434787114211b0367a\/EfWKhcHLx6Y.jpg",
				"last_assessment_date": null,
			}, {
				"id": 452,
				"name": "Борис",
				"last_name": "Сергиенко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/2df\/2dfcfa3a193a45893a209227d2c8ad4c\/17799244_1356233107756720_6542293826464147696_n.jpg",
				"last_assessment_date": null,
			}, {
				"id": 460,
				"name": "Виктория",
				"last_name": "Долгих",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/21b\/photo_2019-09-20 16.11.png",
				"last_assessment_date": null,
			}, {
				"id": 470,
				"name": "Виола",
				"last_name": "Никончук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/f71\/IMG_0743.png",
				"last_assessment_date": null,
			}, {
				"id": 472,
				"name": "Виктория",
				"last_name": "Пожиганова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/645\/6451154b359f38a76efdf02df6ce8175\/DSCF3809.png",
				"last_assessment_date": null,
			}, {
				"id": 486,
				"name": "Александр",
				"last_name": "Лысенко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/ab0\/ab0d82523e5b720bac31e1e9e14d7fc4\/8fe245a1-d3e3-4414-a84a-605ba71baec1.jpg",
				"last_assessment_date": null,
			}, {
				"id": 488,
				"name": "Андрей",
				"last_name": "Дулгиер",
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/7f9\/7f90656b3049790b5d6a1154de938d03\/1111.jpg",
				"last_assessment_date": null,
			}, {
				"id": 490,
				"name": "Днепр",
				"last_name": "Магазин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/51a\/51afe685495a411188808de67a415dc7\/DSC02255.JPG",
				"last_assessment_date": null,
			}, {
				"id": 496,
				"name": "Даша",
				"last_name": "Малета",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/a48\/a48c46764fae5773ed72139c0cc2bab2\/IMG_20170618_190743_007.jpg",
				"last_assessment_date": null,
			}, {
				"id": 504,
				"name": "Айя",
				"last_name": "Джафарова",
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/343\/3434a22905cab58752ec0b09ded782c9\/31682424_1633422160028454_6352756556387319808_n.jpg",
				"last_assessment_date": null,
			}, {
				"id": 506,
				"name": "Елена",
				"last_name": "Егорова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/c42\/c4272b1c5aec1f28805c296caa19278f\/decdb7f7066500c176fe911f1f0fa08e.jpg",
				"last_assessment_date": null,
			}, {
				"id": 508,
				"name": "Владимир",
				"last_name": "Корягин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/35e\/35e91b9896ed3ee796875c8b0a8ae626\/IMG_20160402_181326.jpg",
				"last_assessment_date": null,
			}, {
				"id": 510,
				"name": "Максим",
				"last_name": "Колісник",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/af5\/af5bdb4a56dd13f10345092ed72b1d85\/gkgfkfic.jpg",
				"last_assessment_date": null,
			}, {
				"id": 514,
				"name": "Сергей",
				"last_name": "Горбачев",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/cf1\/cf1725144f02171299f92dbe3ac0c352\/pride_2017_0387_DSC_3744.JPG",
				"last_assessment_date": null,
			}, {
				"id": 518,
				"name": "Оля",
				"last_name": "Верховская",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/5a2\/5a2c3b24d15be9121f5c15f93c3ebfc8\/IMG_0738.JPG",
				"last_assessment_date": null,
			}, {
				"id": 532,
				"name": "Арина",
				"last_name": "Варфоломеева",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/f6e\/f6eeb93c3c625500fd749d9e4f7e65ea\/mobile_20171004_190831.jpg",
				"last_assessment_date": null,
			}, {
				"id": 544,
				"name": "Максим",
				"last_name": "Бедняк",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/976\/9763e10bbf5209f49e970323f6d17f0d\/123.jpg",
				"last_assessment_date": null,
			}, {
				"id": 546,
				"name": "Любовь",
				"last_name": "Пуховец",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/a3d\/a3da450eaef24aa4165c264eb80f458b\/IMG_20180613_114659_198.jpg",
				"last_assessment_date": null,
			}, {
				"id": 548,
				"name": "Настя",
				"last_name": "Гресь",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/7fd\/IMG_0741.png",
				"last_assessment_date": null,
			}, {
				"id": 550,
				"name": "Олег",
				"last_name": "Орлов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/b1c\/IMG_0699.png",
				"last_assessment_date": null,
			}, {
				"id": 554,
				"name": "Анна",
				"last_name": "Ютина",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 558,
				"name": "Марина",
				"last_name": "Ушакова",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/194\/19415482c8935a3c6f8ee9e3c8875143\/IMG_20180620_001307_770.jpg",
				"last_assessment_date": null,
			}, {
				"id": 560,
				"name": "Александра",
				"last_name": "Черкашина",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/d30\/IMG_0783.png",
				"last_assessment_date": null,
			}, {
				"id": 562,
				"name": "Дмитрий",
				"last_name": "Коломийченко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/c32\/c32c3372e6e29cdf75ed35029951786f\/image.png",
				"last_assessment_date": null,
			}, {
				"id": 574,
				"name": "Вячеслав",
				"last_name": "Виговский",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/429\/IMG_0801.png",
				"last_assessment_date": null,
			}, {
				"id": 580,
				"name": "Михаил",
				"last_name": "Зима",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/b11\/b116c37d7c1fef71d77bc3b028079f9c\/telnyashki.jpg",
				"last_assessment_date": null,
			}, {
				"id": 582,
				"name": "Ярослав",
				"last_name": "Нижник",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/17b\/17b4cb06cde37a62861bbe5d64e70ff0\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 588,
				"name": "Алексей",
				"last_name": "Мялковский",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/fa4\/fa438e70b82fcd2198455ec5c2319de5\/5082cd8cb6803fec2c63e8b0294432e9.jpg",
				"last_assessment_date": null,
			}, {
				"id": 589,
				"name": "Павел",
				"last_name": "Чеченев",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/b4e\/b4eb62dd9c9ba5bcd956c1bb2855eacf\/sRUSS3FjtBM.jpg",
				"last_assessment_date": null,
			}, {
				"id": 595,
				"name": "Андрей",
				"last_name": "Мелешков",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/b1f\/b1ffc56a8cc040762577a777ae241b20\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 609,
				"name": "Роман",
				"last_name": "Ворчилов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/da7\/Фото Ворчилов.png",
				"last_assessment_date": null,
			}, {
				"id": 619,
				"name": "Алексей",
				"last_name": "Ромазанов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/98c\/98c8e54ab65cdf680057ac4500acb9a8\/photo_2019-02-14_17-37-18.png",
				"last_assessment_date": null,
			}, {
				"id": 629,
				"name": "Ольга",
				"last_name": "Яценко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/a7d\/a7d87d4e707c33a1d09a58ab2a390093\/19260786_240646916424097_5135075153598689597_n.jpg",
				"last_assessment_date": null,
			}, {
				"id": 633,
				"name": "Сергей",
				"last_name": "Чобитько",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/5b2\/5b2134752db196435ff86f47fe7544c2\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 635,
				"name": "Роман",
				"last_name": "Сиволап",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/046\/046de63f149e1dd3988c8ac5d206da3d\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 637,
				"name": "Вячеслав",
				"last_name": null,
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 639,
				"name": "Слава",
				"last_name": null,
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 645,
				"name": "Евгений",
				"last_name": "Гальчук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/e3a\/e3ad63148bc46de4e66f655a36f74a0c\/1.jpg",
				"last_assessment_date": null,
			}, {
				"id": 647,
				"name": "Алина",
				"last_name": "Чобитько",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/303\/IMG_0774.png",
				"last_assessment_date": null,
			}, {
				"id": 649,
				"name": "Ольга",
				"last_name": "Гринащук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/323\/323bf6021d7f35180ba6b880eb5ca5cb\/22365200_361968000910470_4068459292793646647_n.jpg",
				"last_assessment_date": null,
			}, {
				"id": 653,
				"name": "Арина",
				"last_name": "Федосеева",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/4ae\/4ae65f86f0ed78564eeafa03637fa769\/P81013-162117.png",
				"last_assessment_date": null,
			}, {
				"id": 655,
				"name": "Татьяна",
				"last_name": "Якимчук",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/bf1\/bf12faa681e7f3b4c10c8eb50d18839d\/1920x1080x80_2017-04-06 18.20.54.png",
				"last_assessment_date": null,
			}, {
				"id": 659,
				"name": "Кристина ",
				"last_name": "Цехмистро ",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/13a\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 675,
				"name": "Константин Викторович",
				"last_name": "Титоров",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/0e5\/0e5abd0dc07243c41d652c5336483865\/avatar.png",
				"last_assessment_date": null,
			}, {
				"id": 707,
				"name": "Павел",
				"last_name": "Смехнёв",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 730,
				"name": "Novi - Новая Почта отслеживание",
				"last_name": null,
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/106\/novi.png",
				"last_assessment_date": null,
			}, {
				"id": 733,
				"name": "Обмен 1с",
				"last_name": null,
				"role": "hr",
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 734,
				"name": "Ирина",
				"last_name": "Печегина",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/6c1\/image.png",
				"last_assessment_date": null,
			}, {
				"id": 735,
				"name": "Анна",
				"last_name": "Полонская",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/700\/IMG_20180922_164215.jpg",
				"last_assessment_date": null,
			}, {
				"id": 737,
				"name": "Юрий",
				"last_name": "Петько",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/f6d\/1558777600083.png",
				"last_assessment_date": null,
			}, {
				"id": 738,
				"name": "Виталий",
				"last_name": "Шинкаренко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/154\/photo_2019-04-15_15-08-41.png",
				"last_assessment_date": null,
			}, {
				"id": 794,
				"name": "Дмитрий",
				"last_name": "Сиротенко",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/fac\/IMG_20190510_185712.png",
				"last_assessment_date": null,
			}, {
				"id": 795,
				"name": "Андрей",
				"last_name": "Васильев",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/e2e\/Васильев Андрей.png",
				"last_assessment_date": null,
			}, {
				"id": 835,
				"name": "Ярослав",
				"last_name": "Яворский",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/5c7\/1920x1080x80_IMG_20190503_130455-01.jpeg",
				"last_assessment_date": null,
			}, {
				"id": 895,
				"name": "Дмитрий",
				"last_name": "Устимов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/57a\/photo_2019-05-14_16-12-14.jpg",
				"last_assessment_date": null,
			}, {
				"id": 954,
				"name": "Евгений",
				"last_name": "Глеевой",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/79d\/DSC_01533.jpg",
				"last_assessment_date": null,
			}, {
				"id": 957,
				"name": "Николай",
				"last_name": "Котохин",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": null,
				"last_assessment_date": null,
			}, {
				"id": 958,
				"name": "Андрей",
				"last_name": "Туркулов",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/1a1\/IMG_20190729_092901_408.jpg",
				"last_assessment_date": null,
			}, {
				"id": 959,
				"name": "Дмитрий",
				"last_name": "Корж",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/ed6\/1920x1080x80_IMG_20190816_163810_338.jpg",
				"last_assessment_date": null,
			}, {
				"id": 971,
				"name": "Олег",
				"last_name": "Голосовский",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/9d2\/photo_2019-06-21_11-35-05.png",
				"last_assessment_date": null,
			}, {
				"id": 1095,
				"name": "Юлія",
				"last_name": "Білоус",
				"role": null,
				"department": null,
				"departmentId": null,
				"position": null,
				"positionId": null,
				"image": "\/upload\/main\/935\/photo_2019-10-29_12-33-58.jpg",
				"last_assessment_date": null,
			}]
		}
	};

	/**
	 *
	 */
	it("should return all users", () => {
		const {assessmentProcess: {employees}} = state;

		const sample = selectProcessUsers(state);

		expect(sample.length).toEqual(employees.length);
	});

	/**
	 *
	 */
	it("should return hr users", () => {
		const {assessmentProcess: {employees}} = state;

		const hrAmount = employees
			.filter(item => item.role === 'hr')
			.length;

		const sample = selectProcessHrUsers(state);

		expect(sample.length).toEqual(hrAmount);
	});
});