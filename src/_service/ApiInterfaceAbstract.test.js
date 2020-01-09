import ApiInterface from "./ApiInterfaceAbstract";
import API from "./ApiInterface";
const {API_URL} = API;

describe("ApiService", function() {

	let Api;

	beforeAll(() => {
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


			expect(sample instanceof FormData).toBeTruthy();
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

			const sample = Api._createUrlWIthQueryParams(API_URL, params);

			expect(sample).toEqual(`${API_URL}?hello=world`)
		});

		/**
		 *
		 */
		it("should return base url", function() {
			const paramsEmpty = {};

			const sample = Api._createUrlWIthQueryParams(API_URL, paramsEmpty);

			expect(sample).toEqual(API_URL)
		});

		/**
		 *
		 */
		it("should return error 'Invalid params type!'", function() {
			const paramsInvalid = "some string here";

			expect(() => {
				Api._createUrlWIthQueryParams(API_URL, paramsInvalid);
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

			Api._sendPost(`${API_URL}postHelloWorld`, data)
				.then(result => result.json())
				.then(text => {
					expect(text).toEqual('POST HELLO WORLD');
				})
				.catch((err) => console.log(err));

			done()
		});

		/**
		 *
		 */
		it("should send PATCH request", function(done) {
			const data = {
				ID: '11'
			};

			Api._sendPatch(`${API_URL}patchHelloWorld`, data)
				.then(result => result.json())
				.then(text => {
					expect(text).toEqual('PATCH SUPER HELLO WORLD')
				})
				.catch((err) => console.log(err));

			done();
		});

		/**
		 *
		 */
		it("should send GET request", function(done) {
			const params = {
				hello: 'world'
			};

			Api._sendGet(`${API_URL}getHelloWorld`, params)
				.then(result => result.json())
				.then(text => {
					expect(text).toEqual('GET hello world')
				})
				.catch((err) => console.log(err));

			done();
		});
	})
});