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
          					console.log(`Requesting ${request.method} ${request.url}`);
          					return request;
        				},
        				response(response) {
          					console.log(`Received ${response.status} ${response.url}`);
          					return response;
        				}
      				});
  			});
	}

	//NOTE -- should look at using swagger like framework to generate an API

	add(a, b) {
		//level up
		//this.use_arithmetic_service('add', a, b);

		//coward's way out
		return a + b;
	}

	subtract(a, b) {
		//level up
		//this.use_arithmetic_service('subtract', a, b);

		//coward's way out
		return a-b;
	}

	multiply(a, b) {
		//level up
		//this.use_arithmetic_service('multiply', a, b);

		//coward's way out
		return a*b;
	}

	divide(a, b) {
		//level up
		//this.use_arithmetic_service('divide', a, b);

		//coward's way out
		return a/b;
	}

	/*
	 * post to the arithmetic service to determine the result of performing the operator to a and b
	 * @param a the first operand
	 * @param b the second operand
	 */
	use_arithmetic_service(operator, a, b) {
		console.log('arithmetic_service');
		var operands = {a:a, b:b};

		this.httpClient
			.fetch(operator, {
					method: 'post', body: json(operands)
							})
			.then(
				response => {
					response.json()
						.then(result => {
							console.log(result.result);
						})
				})
			.catch(error => {
						console.log(error);
					});
	}

	handle_token(element) {
		let initialValue = $(".screen").val()//
		let newValue = initialValue.concat(element.value);

		//TODO: add incremental validation of equations
		//      may involve building a parser - cant' find a tool to do it yet

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

			//level up
			//this.recursive_evaluate(root, (result) => { $(".screen").val(result); });

			//coward's way out
			let result = this.recursive_evaluate(root);
			$(".screen").val(result);

			//or we can do this the easy way
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

			var promise;
			var a = this.recursive_evaluate(node.args[0]);
			var b = this.recursive_evaluate(node.args[1]);

			switch(node.op) {
				case '*':
					return this.multiply(a,b);
					break;
				case '/':
					return this.divide(a, b);
					break;
				case '+':
					return this.add(a, b);
					break;
				case '-':
					return this.subtract(a,b);
					break;
				default:
					throw("Unexpected operator");
			}
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
