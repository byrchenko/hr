import ApiInterface from "./ApiService"

describe("ApiService", function() {

	let Api;

	beforeEach(() => {
		Api = new ApiInterface();
	});

	/**
	 * GENERATING REQUEST BODY
	 */
	describe("create request body", function() {

		/**
		 *
		 */
		it("should create request body", function() {
			const data = {
				hello: 'world'
			};

			const sample = Api._createBody(data);

			expect(sample.getAll('hello')).toEqual(['world']);
		});

		/**
		 *
		 */
		it("should return error 'Data is empty!'", function() {
			const emptyData = {};

			expect(() => {
				Api._createBody(emptyData)
			}).toThrow('Data is empty!')
		});

		/**
		 *
		 */
		it("should return error 'Data must be only object type!'", function() {
			const wrongData = 'some string';

			expect(() => {
				Api._createBody(wrongData)
			}).toThrow('Wrong data type!')
		});
	});

	/**
	 * GENERATING POST OPTIONS
	 */
	describe("create POST options", function() {

		/**
		 *
		 */
		it("should generate POST options", function() {
			const body = new FormData();

			body.append('hello', 'world');

			const sample = Api._createPostOptions(body);

			expect(sample).toEqual({
				method: 'POST',
				credentials: 'include',
				body
			})
		});

		/**
		 *
		 */
		it("should return error 'Body not specified or invalid type!'", function() {
			expect(() => {
				Api._createPostOptions({
					hello: 'world'
				})
			}).toThrow('Body not specified or invalid type!')
		});
	});

	/**
	 * GENERATING PATCH OPTIONS
	 */
	describe("create PATCH options", function() {

		/**
		 *
		 */
		it("should generate POST options", function() {
			const body = new FormData();

			body.append('hello', 'world');

			const sample = Api._createPatchOptions(body);

			expect(sample).toEqual({
				method: 'PATCH',
				credentials: 'include',
				body
			})
		});

		/**
		 *
		 */
		it("should return error 'Body not specified or invalid type!'", function() {
			expect(() => {
				Api._createPatchOptions({
					hello: 'world'
				})
			}).toThrow('Body not specified or invalid type!')
		});
	});

	/**
	 * GENERATING URL QUERY PARAMS
	 */
	describe("set url query params ", function() {

		/**
		 *
		 */
		it("should generate url with query params", function() {
			const params = {
				hello: 'world'
			};

			const sample = Api._createUrlWIthQueryParams(Api.API_URL, params);

			expect(sample).toEqual(`${Api.API_URL}?hello=world`)
		});

		/**
		 *
		 */
		it("should return base url", function() {
			const paramsEmpty = {};

			const sample = Api._createUrlWIthQueryParams(Api.API_URL, paramsEmpty);

			expect(sample).toEqual(Api.API_URL)
		});

		/**
		 *
		 */
		it("should return error 'Invalid params type!'", function() {
			const paramsInvalid = "some string here";

			expect(() => {
				Api._createUrlWIthQueryParams(Api.API_URL, paramsInvalid);
			}).toThrow('Invalid params type!')
		});
	});

	describe('Requests', () => {

		/**
		 *
		 */
		it("should send POST request", function(done) {
			const data = {
				hello: 'world'
			};

			let sample;

			Api._sendPost(Api.API_URL, data)
				.then(result => result.text())
				.then(text => {
					sample = text;
					done();
				})
				.catch((err) => console.log(err));

			expect(sample).toEqual('world')
		});

		/**
		 *
		 */
		it("should send PATCH request", function(done) {
			const data = {
				hello: 'world'
			};

			let sample;

			Api._sendPatch(Api.API_URL, data)
				.then(result => result.text())
				.then(text => {
					sample = text;
					done();
				})
				.catch((err) => console.log(err));

			expect(sample).toEqual('world')
		});

		/**
		 *
		 */
		it("should send GET request", function(done) {
			const params = {
				hello: 'world'
			};

			let sample;

			Api._sendGet(Api.API_URL, params)
				.then(result => result.text())
				.then(text => {
					sample = text;
					done();
				})
				.catch((err) => console.log(err));

			expect(sample).toEqual('world')
		});
	})
});