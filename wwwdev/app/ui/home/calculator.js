System.register(['aurelia-fetch-client', 'jquery', 'mathjs'], function (_export) {
	'use strict';

	var HttpClient, json, $, math, Calculator;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaFetchClient) {
			HttpClient = _aureliaFetchClient.HttpClient;
			json = _aureliaFetchClient.json;
		}, function (_jquery) {
			$ = _jquery['default'];
		}, function (_mathjs) {
			math = _mathjs;
		}],
		execute: function () {
			Calculator = (function () {
				function Calculator() {
					_classCallCheck(this, Calculator);

					this.httpClient = new HttpClient();

					this.httpClient.configure(function (config) {
						config.withBaseUrl('http://localhost:3000/api/').withDefaults({
							mode: 'cors',
							headers: {
								'Accept': 'application/json',
								'X-Requested-With': 'Fetch'
							}
						}).withInterceptor({
							request: function request(_request) {
								return _request;
							},
							response: function response(_response) {
								return _response;
							}
						});
					});
				}

				_createClass(Calculator, [{
					key: 'add',
					value: function add(a, b) {
						return this.use_arithmetic_service('add', a, b);
					}
				}, {
					key: 'subtract',
					value: function subtract(a, b) {
						return this.use_arithmetic_service('subtract', a, b);
					}
				}, {
					key: 'multiply',
					value: function multiply(a, b) {
						return this.use_arithmetic_service('multiply', a, b);
					}
				}, {
					key: 'divide',
					value: function divide(a, b) {
						return this.use_arithmetic_service('divide', a, b);
					}
				}, {
					key: 'use_arithmetic_service',
					value: function use_arithmetic_service(operation, a, b) {
						var _this = this;

						return Promise.resolve().then(function () {
							var operands = { a: a, b: b };

							var promise = _this.httpClient.fetch(operation, { method: 'post', body: json(operands) });
							return promise;
						}).then(function (response) {
							return response.json().then(function (result) {
								return result.result;
							});
						});
					}
				}, {
					key: 'handle_token',
					value: function handle_token(element) {
						var initialValue = $(".screen").val();
						var newValue = initialValue.concat(element.value);

						$(".screen").val(newValue);
					}
				}, {
					key: 'handle_clear',
					value: function handle_clear(element) {
						$(".screen").val("");
					}
				}, {
					key: 'handle_evaluate',
					value: function handle_evaluate(element) {
						var expression = $(".screen").val();

						console.log('handle_evaluate: expression => ', expression);

						try {
							var root = math.parse(expression);

							var result = this.recursive_evaluate(root).then(function (result) {
								$(".screen").val(result);
							});
						} catch (e) {
							console.log(e);
						}
					}
				}, {
					key: 'recursive_evaluate',
					value: function recursive_evaluate(node) {
						var _this2 = this;

						if (node.type.localeCompare("ConstantNode") == 0) {
							return node.value;
						} else if (node.type.localeCompare("OperatorNode") == 0) {

							var promise = Promise.resolve().then(function () {
								var a = _this2.recursive_evaluate(node.args[0]);
								console.log('a => ', a);
								return a;
							}).then(function (a) {
								var b = _this2.recursive_evaluate(node.args[1]);
								console.log('b => ', b);
								var result = { a: a, b: b };
								console.log('result => ', result);
								return result;
							}).then(function (operands) {
								console.log('operands => ', operands);

								var a = operands.a;
								var b = operands.b;

								switch (node.op) {
									case '*':
										return _this2.use_arithmetic_service('multiply', a, b);
										break;
									case '/':
										return _this2.use_arithmetic_service('divide', a, b);
										break;
									case '+':
										return _this2.use_arithmetic_service('add', a, b);
										break;
									case '-':
										return _this2.use_arithmetic_service('subtract', a, b);
										break;
									default:
										throw "Unexpected operator";
								}
							});
							return promise;
						} else {
							throw "unexpected node type";
						}
					}
				}, {
					key: 'push',
					value: function push(element) {
						var cases = ["token", "clear", "evaluate"];

						var clazzName = element.className;
						var clazzes = clazzName.split(' ');
						clazzes = clazzes.filter(function (clazz) {
							return cases.indexOf(clazz) != -1;
						});

						if (clazzes.length > 1) {
							throw "Element has more than one potential type: " + clazzes;
						} else if (clazzes.length == 1) {
							this['handle_' + clazzes[0]](element);
						} else {}
					}
				}]);

				return Calculator;
			})();

			_export('Calculator', Calculator);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91aS9ob21lL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dDQUlhLFVBQVU7Ozs7Ozs7O29DQUpmLFVBQVU7OEJBQUUsSUFBSTs7Ozs7OztBQUlYLGFBQVU7QUFJWCxhQUpDLFVBQVUsR0FJUjsyQkFKRixVQUFVOztBQUtyQixTQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O0FBRW5DLFNBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQy9CLFlBQU0sQ0FDRixXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FDekMsWUFBWSxDQUFDO0FBQ2hCLFdBQUksRUFBRSxNQUFNO0FBQ1IsY0FBTyxFQUFFO0FBQ04sZ0JBQVEsRUFBRSxrQkFBa0I7QUFDNUIsMEJBQWtCLEVBQUUsT0FBTztRQUM3QjtPQUNGLENBQUMsQ0FDRCxlQUFlLENBQUM7QUFDZixjQUFPLEVBQUEsaUJBQUMsUUFBTyxFQUFFO0FBQ2QsZUFBTyxRQUFPLENBQUM7UUFDakI7QUFDRCxlQUFRLEVBQUEsa0JBQUMsU0FBUSxFQUFFO0FBQ2hCLGVBQU8sU0FBUSxDQUFDO1FBQ2xCO09BQ0YsQ0FBQyxDQUFDO01BQ1AsQ0FBQyxDQUFDO0tBQ047O2lCQTFCVyxVQUFVOztZQTRCbkIsYUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBRVQsYUFBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUloRDs7O1lBRU8sa0JBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUVkLGFBQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7TUFJckQ7OztZQUVPLGtCQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFFZCxhQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FB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LE9BQU8sQ0FBQztPQUNmLE1BQU07QUFDTixhQUFNLHNCQUFzQixDQUFFO09BQzlCO01BQ0Q7OztZQUVHLGNBQUMsT0FBTyxFQUFFO0FBQ2IsVUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUUzQyxVQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFVBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsYUFBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUUsVUFBQSxLQUFLO2NBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7T0FBQSxDQUFDLENBQUM7O0FBRS9ELFVBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsYUFBTSw0Q0FBNEMsR0FBRyxPQUFPLENBQUM7T0FDN0QsTUFBTSxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzlCLFdBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDdEMsTUFBTSxFQUVOO01BQ0Q7OztXQWpMVyxVQUFVIiwiZmlsZSI6ImFwcC91aS9ob21lL2NhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxjdWxhdG9yIHtcblxuXHRodHRwQ2xpZW50XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5odHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuXHRcdHRoaXMuaHR0cENsaWVudC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICBcdFx0XHRjb25maWdcbiAgICAgIFx0XHRcdFx0LndpdGhCYXNlVXJsKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycpXG4gICAgICBcdFx0XHRcdC53aXRoRGVmYXVsdHMoe1xuXHRcdFx0XHRcdFx0XHRcdG1vZGU6ICdjb3JzJyxcbiAgICAgICAgXHRcdFx0XHRoZWFkZXJzOiB7XG4gICAgICAgICAgXHRcdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgXHRcdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ0ZldGNoJ1xuICAgICAgICBcdFx0XHRcdH1cbiAgICAgIFx0XHRcdFx0fSlcbiAgICAgIFx0XHRcdFx0LndpdGhJbnRlcmNlcHRvcih7XG4gICAgICAgIFx0XHRcdFx0cmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgICAgICAgXHRcdFx0XHRcdHJldHVybiByZXF1ZXN0O1xuICAgICAgICBcdFx0XHRcdH0sXG4gICAgICAgIFx0XHRcdFx0cmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICBcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBcdFx0XHRcdH1cbiAgICAgIFx0XHRcdFx0fSk7XG4gIFx0XHRcdH0pO1xuXHR9XG5cblx0YWRkKGEsIGIpIHtcblx0XHQvL2xldmVsIHVwXG5cdFx0cmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnYWRkJywgYSwgYik7XG5cblx0XHQvL2Nvd2FyZCdzIHdheSBvdXRcblx0XHQvL3JldHVybiBhICsgYjtcblx0fVxuXG5cdHN1YnRyYWN0KGEsIGIpIHtcblx0XHQvL2xldmVsIHVwXG5cdFx0cmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnc3VidHJhY3QnLCBhLCBiKTtcblxuXHRcdC8vY293YXJkJ3Mgd2F5IG91dFxuXHRcdC8vcmV0dXJuIGEtYjtcblx0fVxuXG5cdG11bHRpcGx5KGEsIGIpIHtcblx0XHQvL2xldmVsIHVwXG5cdFx0cmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnbXVsdGlwbHknLCBhLCBiKTtcblxuXHRcdC8vY293YXJkJ3Mgd2F5IG91dFxuXHRcdC8vcmV0dXJuIGEqYjtcblx0fVxuXG5cdGRpdmlkZShhLCBiKSB7XG5cdFx0Ly9sZXZlbCB1cFxuXHRcdHJldHVybiB0aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ2RpdmlkZScsIGEsIGIpO1xuXG5cdFx0Ly9jb3dhcmQncyB3YXkgb3V0XG5cdFx0Ly9yZXR1cm4gYS9iO1xuXHR9XG5cblx0Ly9UT0RPOiB1c2Ugc29tZXRoaW5nIGxpa2Ugc3dhZ2dlciB0byBkb2N1bWVudCB0aGUgYXBpXG5cblx0Lypcblx0ICogcG9zdCB0byB0aGUgYXJpdGhtZXRpYyBzZXJ2aWNlIHRvIGRldGVybWluZSB0aGUgcmVzdWx0IG9mIHBlcmZvcm1pbmcgdGhlIG9wZXJhdG9yIHRvIGEgYW5kIGJcblx0ICogQHBhcmFtIGEgdGhlIGZpcnN0IG9wZXJhbmRcblx0ICogQHBhcmFtIGIgdGhlIHNlY29uZCBvcGVyYW5kXG5cdCAqL1xuXHR1c2VfYXJpdGhtZXRpY19zZXJ2aWNlKG9wZXJhdGlvbiwgYSwgYikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oICgpID0+IHtcblx0XHRcdFx0dmFyIG9wZXJhbmRzID0ge2E6YSwgYjpifTtcblxuXHRcdFx0XHR2YXIgcHJvbWlzZSA9IHRoaXMuaHR0cENsaWVudC5mZXRjaChvcGVyYXRpb24sIHtcdG1ldGhvZDogJ3Bvc3QnLCBib2R5OiBqc29uKG9wZXJhbmRzKSB9KTtcblx0XHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0XHR9KVxuXHRcdFx0LnRoZW4oIHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQudGhlbiggcmVzdWx0ID0+IHsgcmV0dXJuIHJlc3VsdC5yZXN1bHQ7IH0gKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHQgfSk7XG5cdH1cblxuXHRoYW5kbGVfdG9rZW4oZWxlbWVudCkge1xuXHRcdGxldCBpbml0aWFsVmFsdWUgPSAkKFwiLnNjcmVlblwiKS52YWwoKTtcblx0XHRsZXQgbmV3VmFsdWUgPSBpbml0aWFsVmFsdWUuY29uY2F0KGVsZW1lbnQudmFsdWUpO1xuXG5cdFx0Ly9UT0RPOiBhZGQgaW5jcmVtZW50YWwgdmFsaWRhdGlvbiBvZiBlcXVhdGlvbnNcblxuXHRcdCQoXCIuc2NyZWVuXCIpLnZhbChuZXdWYWx1ZSk7XG5cdH1cblxuXHRoYW5kbGVfY2xlYXIoZWxlbWVudCkge1xuXHRcdCQoXCIuc2NyZWVuXCIpLnZhbChcIlwiKTtcblx0fVxuXG5cdGhhbmRsZV9ldmFsdWF0ZShlbGVtZW50KSB7XG5cdFx0bGV0IGV4cHJlc3Npb24gPSAkKFwiLnNjcmVlblwiKS52YWwoKTtcblxuXHRcdGNvbnNvbGUubG9nKCdoYW5kbGVfZXZhbHVhdGU6IGV4cHJlc3Npb24gPT4gJywgZXhwcmVzc2lvbik7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly9jb3VsZCBkbyB0aGlzIHRvIHVzZSBhIHNlcnZpY2UgZm9yIGNhbGN1bGF0aW9uXG5cdFx0XHRsZXQgcm9vdCA9IG1hdGgucGFyc2UoZXhwcmVzc2lvbik7XG5cblx0XHRcdGxldCByZXN1bHQgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShyb290KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIuc2NyZWVuXCIpLnZhbChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdC8vdGhlIHJlYWxseSBlYXN5IHdheVxuXHRcdFx0Ly8kKFwiLnNjcmVlblwiKS52YWwobWF0aC5ldmFsKGV4cHJlc3Npb24pKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdC8vVE9ETzogaGFuZGxlIGVycm9yIGluIGEgdXNlciB2aXNpYmxlIHdheVxuXHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVjdXJzaXZlX2V2YWx1YXRlKG5vZGUpIHtcblxuXHRcdGlmKG5vZGUudHlwZS5sb2NhbGVDb21wYXJlKFwiQ29uc3RhbnROb2RlXCIpPT0wKSB7Ly9UT0RPOiB1c2UgaW5zdGFuY2VvZiBpbnN0ZWFkXG5cdFx0XHRyZXR1cm4gbm9kZS52YWx1ZTtcblx0XHR9IGVsc2UgaWYobm9kZS50eXBlLmxvY2FsZUNvbXBhcmUoXCJPcGVyYXRvck5vZGVcIik9PTApIHsvL1RPRE86IHVzZSBpbnN0YW5jZW9mIGluc3RlYWRcblxuXHRcdFx0dmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGV0IGEgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShub2RlLmFyZ3NbMF0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdhID0+ICcsIGEpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBhO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC50aGVuKCBhID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0bGV0IGIgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShub2RlLmFyZ3NbMV0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdiID0+ICcsIGIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSB7YTphLCBiOmJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3Jlc3VsdCA9PiAnLCByZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLnRoZW4oIG9wZXJhbmRzID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0IGNvbnNvbGUubG9nKCdvcGVyYW5kcyA9PiAnLCBvcGVyYW5kcyk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgbGV0IGEgPSBvcGVyYW5kcy5hO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBsZXQgYiA9IG9wZXJhbmRzLmI7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgc3dpdGNoKG5vZGUub3ApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdFx0XHRjYXNlICcqJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnbXVsdGlwbHknLCBhLCBiKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0XHRcdGNhc2UgJy8nOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0XHRcdFx0cmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnZGl2aWRlJywgYSwgYik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdFx0XHRjYXNlICcrJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnYWRkJywgYSwgYik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdFx0XHRjYXNlICctJzpcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdFx0XHRcdHJldHVybiB0aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ3N1YnRyYWN0JywgYSwgYik7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0XHRcdFx0dGhyb3coXCJVbmV4cGVjdGVkIG9wZXJhdG9yXCIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93KFwidW5leHBlY3RlZCBub2RlIHR5cGVcIik7XG5cdFx0fVxuXHR9XG5cblx0cHVzaChlbGVtZW50KSB7XG5cdFx0dmFyIGNhc2VzID0gW1widG9rZW5cIiwgXCJjbGVhclwiLCBcImV2YWx1YXRlXCJdO1xuXG5cdFx0dmFyIGNsYXp6TmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuXHRcdHZhciBjbGF6emVzID0gY2xhenpOYW1lLnNwbGl0KCcgJyk7XG5cdFx0Y2xhenplcyA9IGNsYXp6ZXMuZmlsdGVyKCBjbGF6eiA9PiBjYXNlcy5pbmRleE9mKGNsYXp6KSAhPSAtMSk7Ly9kcm9wIGNsYXNzZXMgdGhhdCBhcmUgaXJyZWxldmFudCB0byBkZWNpc2lvblxuXG5cdFx0aWYoY2xhenplcy5sZW5ndGggPiAxKSB7XG5cdFx0XHR0aHJvdyBcIkVsZW1lbnQgaGFzIG1vcmUgdGhhbiBvbmUgcG90ZW50aWFsIHR5cGU6IFwiICsgY2xhenplcztcblx0XHR9IGVsc2UgaWYoY2xhenplcy5sZW5ndGggPT0gMSkge1xuXHRcdFx0dGhpc1snaGFuZGxlXycgKyBjbGF6emVzWzBdXShlbGVtZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly9pZiBpdCBpc24ndCBvbmUgb2YgdGhlIGVsZW1lbnRzIHdlIGFyZSBleHBlY3RpbmcsIHdlIHdvbid0IHJlYWN0XG5cdFx0fVxuXHR9XG59XG4iXX0=
