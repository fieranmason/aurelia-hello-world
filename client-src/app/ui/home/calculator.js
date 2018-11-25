import {HttpClient, json} from 'aurelia-fetch-client';
import $ from 'jquery';
import * as math from 'mathjs';

export class Calculator {

	httpClient

	constructor() {
		this.httpClient = new HttpClient();

		this.httpClient.configure(config => {
    			config
      				.withBaseUrl('http://localhost:3000/api/')
      				.withDefaults({
								mode: 'cors',
        				headers: {
          					'Accept': 'application/json',
          					'X-Requested-With': 'Fetch'
        				}
      				})
      				.withInterceptor({
        				request(request) {
          					return request;
        				},
        				response(response) {
          					return response;
        				}
      				});
  			});
	}

	//add(a, b) {
		//level up
	//	return this.use_arithmetic_service('add', a, b);

		//coward's way out
		//return a + b;
	//}

	//subtract(a, b) {
		//level up
	//	return this.use_arithmetic_service('subtract', a, b);

		//coward's way out
		//return a-b;
	//}

	//multiply(a, b) {
		//level up
	//	return this.use_arithmetic_service('multiply', a, b);

		//coward's way out
		//return a*b;
	//}

	//divide(a, b) {
		//level up
	//	return this.use_arithmetic_service('divide', a, b);

		//coward's way out
		//return a/b;
	//}

	//TODO: use something like swagger to document the api

	/*
	 * post to the arithmetic service to determine the result of performing the operator to a and b
	 * @param a the first operand
	 * @param b the second operand
	 */
	use_arithmetic_service(operation, a, b) {
		return Promise.resolve()
			.then( () => {
				var operands = {a:a, b:b};
				var promise = this.httpClient.fetch(operation, {	method: 'post', body: json(operands) });
				return promise;
			})
			.then( response => {
														return response.json()
															.then( result => {
																return result.result;
															});
											 	 });
	}

	handle_token(element) {
		let initialValue = $(".screen").val();
		let newValue = initialValue.concat(element.value);

		//TODO: add incremental validation of equations

		$(".screen").val(newValue);
	}

	handle_clear(element) {
		$(".screen").val("");
	}

	handle_evaluate(element) {
		let expression = $(".screen").val();

		try {
			//could do this to use a service for calculation
			let root = math.parse(expression);

			let result = this.recursive_evaluate(root)
												.then( result => {
													$(".screen").val(result);
												});

			//the really easy way
			//$(".screen").val(math.eval(expression));
		} catch(e) {
			//TODO: handle error in a user visible way
			console.log(e);
		}
	}

	recursive_evaluate(node) {

		if(node.type.localeCompare("ConstantNode")==0) {//TODO: use instanceof instead
			return node.value;
		} else if(node.type.localeCompare("OperatorNode")==0) {//TODO: use instanceof instead

			let a = this.recursive_evaluate(node.args[0]);
		  let b = this.recursive_evaluate(node.args[1]);

			return Promise.all([a, b])
				.then( (result) => {
					let a = result[0];
					let b = result[1];

					console.log('a => ', a);
					console.log('b => ', b);
					console.log('op => ', node.op);

					switch(node.op) {
					 case '*':
						 return this.use_arithmetic_service('multiply', a, b);
						 break;
					 case '/':
						 return this.use_arithmetic_service('divide', a, b);
						 break;
					 case '+':
						 return this.use_arithmetic_service('add', a, b);
						 break;
					 case '-':
						 return this.use_arithmetic_service('subtract', a, b);
						 break;
					 default:
						 throw("Unexpected operator");
				 }
			 });
		} else {
			throw("unexpected node type");
		}
	}

	push(element) {
		var cases = ["token", "clear", "evaluate"];

		var clazzName = element.className;
		var clazzes = clazzName.split(' ');
		clazzes = clazzes.filter( clazz => cases.indexOf(clazz) != -1);//drop classes that are irrelevant to decision

		if(clazzes.length > 1) {
			throw "Element has more than one potential type: " + clazzes;
		} else if(clazzes.length == 1) {
			this['handle_' + clazzes[0]](element);
		} else {
			//if it isn't one of the elements we are expecting, we won't react
		}
	}
}
