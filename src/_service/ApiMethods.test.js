import {
	addAssessment,
	addBlock,
	addCompetence,
	addPosition,
	deleteBlock, deleteCompetence,
	deletePosition, editAssessment,
	editBlock, editCompetence,
	editPosition, fetchAssessmentList, fetchAssessmentsProcess,
	sendTasks,
} from "./ApiMethods";

describe("ApiMethods", () => {

	/**
	 *
	 */
	describe("Tasks", () => {

		/**
		 *
		 */
		it("should send tasks", done => {
			sendTasks("Read documentation", "21.02.2020", 1, 1000)
				.then(result => result.json())
				.then(json => expect(json)
					.toEqual({ code: 201, status: "TASK WAS ADDED" }))
				.catch(err => console.log(err));

			done();
		});
	});

	/**
	 *
	 */
	describe("Positions", () => {

		/**
		 *
		 */
		it("should add position", done => {
			addPosition("Уборщик")
				.then(result => result.json())
				.then(json => expect(json.title)
					.toEqual("Уборщик"))
				.catch(err => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should edit position", done => {
			editPosition(64358, "Developer")
				.then(result => result.json())
				.then(json => expect(json)
					.toEqual({ id: 64358, title: "Developer" }))
				.catch(err => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should delete position", done => {
			let positionId;

			addPosition("Уборщик")
				.then(response => response.json())
				.then(parsed => {
					positionId = parsed.id;

					return deletePosition(positionId);
				})
				.then(response => response.json())
				.then(parsed => expect(parsed.code).toEqual(200))
				.catch(err => console.log(err));

			done();
		});
	});

	/**
	 *
	 */
	describe("Blocks", () => {
		/**
		 *
		 */
		it("should add block", done => {
			addBlock("New block", "New block description", 64358)
				.then(response => {
					expect(response.status).toEqual(201);

					return response.json();
				})
				.then(parsed => {
					expect(parsed.title).toEqual("New block");
					expect(parsed.description).toEqual("New block description");
					expect(parsed.position).toEqual(64358);
				})
				.catch(err => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should edit block", done => {
			editBlock(64371, "Edited block", "Edited description")
				.then(result => result.json())
				.then(json =>
					expect(json)
						.toEqual({
							id: 64371,
							title: "Edited block",
							description: "Edited description",
							position: 64358,
						}))
				.catch(err => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should delete block", done => {
			let blockId;

			addBlock(
				"New block",
				"New block description",
				64358,
			)
				.then(response => response.json())
				.then(parsed => {
					blockId = parsed.id;

					return deleteBlock(Number(blockId));
				})
				.then(result => result.json())
				.then(json => expect(json.code).toEqual(200))
				.catch(err => console.log(err));

			done();
		});
	});

	/**
	 *
	 */
	describe("Competences", () => {

		/**
		 *
		 */
		it("should add competence", done => {
			addCompetence(
				"New competence",
				"New competence description",
				64371,
			)
				.then(response => {
					expect(response.status).toEqual(201);

					return response.json();
				})
				.then(parsed => {
					expect(parsed.title)
						.toEqual("New competence");

					expect(parsed.description)
						.toEqual("New competence description");

					expect(parsed.competenceBlock)
						.toEqual(64371);
				})
				.catch(err => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should edit competence", done => {
			editCompetence(
				64541,
				"Edited competence",
				"Edited description",
			)
				.then(result => result.json())
				.then(json => {
					expect(json.title)
						.toEqual("Edited competence");

					expect(json.description)
						.toEqual("Edited description");
				})
				.catch(err => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should delete competence", done => {
			let competenceId;

			addCompetence(
				"New competence",
				"New competence description",
				64371,
			)
				.then(response => response.json())
				.then(parsed => {
					competenceId = parsed.id;

					return deleteCompetence(Number(competenceId));
				})
				.then(result => result.json())
				.then(json => {
					expect(json.code).toEqual(200);

					done();
				})
				.catch(err => {
					console.log(err);

					done();
				});


		});
	});

	/**
	 *
	 */
	describe("Assessment process", () => {

		/**
		 *
		 */
		it("should get assessments data", done => {
			fetchAssessmentsProcess()
				.then(response => {
					expect(response.status).toEqual(200);

					done();
				})
				.catch(err => {
					console.log(err);

					done();
				});
		});

		/**
		 *
		 */
		it("should add assessment", done => {
			addAssessment(
				"Sales division",
				"21.02.2020",
				"25.02.2020",
				[1000],
				1,
			)
				.then(response => response.json())
				.then(parsed => {
					expect(parsed.title)
						.toEqual("Sales division");

					expect(parsed.startDate)
						.toEqual('21.02.20');


					expect(parsed.endDate)
						.toEqual('25.02.20');


					expect(parsed.employees)
						.toEqual(["1000"]);


					expect(parsed.evaluatorId)
						.toEqual(1);


					done();
				})
				.catch(err => {
					console.log(err);

					done();
				});
		});

		/**
		 *
		 */
		it("should edit assessment", done => {
			editAssessment(
				64639,
				"Changed assessment",
				"22.02.2020",
				"26.02.2020",
				undefined,
				1
			)
				.then(response => response.json())
				.then(parsed => {

					expect(parsed.title)
						.toEqual('Changed assessment');


					expect(parsed.startDate)
						.toEqual('22.02.20');


					expect(parsed.endDate)
						.toEqual('26.02.20');


					expect(parsed.employees)
						.toEqual([2]);


					expect(parsed.evaluatorId)
						.toEqual(1);

					done();
				})
				.catch(err => {
					console.log(err);

					done();
				})
		});
	});
});