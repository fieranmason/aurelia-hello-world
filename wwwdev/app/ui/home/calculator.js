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
								console.log('Requesting ' + _request.method + ' ' + _request.url);
								return _request;
							},
							response: function response(_response) {
								console.log('Received ' + _response.status + ' ' + _response.url);
								return _response;
							}
						});
					});
				}

				_createClass(Calculator, [{
					key: 'add',
					value: function add(a, b) {
						return a + b;
					}
				}, {
					key: 'subtract',
					value: function subtract(a, b) {
						return a - b;
					}
				}, {
					key: 'multiply',
					value: function multiply(a, b) {
						return a * b;
					}
				}, {
					key: 'divide',
					value: function divide(a, b) {
						return a / b;
					}
				}, {
					key: 'use_arithmetic_service',
					value: function use_arithmetic_service(operator, a, b) {
						console.log('arithmetic_service');
						var operands = { a: a, b: b };

						this.httpClient.fetch(operator, {
							method: 'post', body: json(operands)
						}).then(function (response) {
							response.json().then(function (result) {
								console.log(result.result);
							});
						})['catch'](function (error) {
							console.log(error);
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
						try {
							var root = math.parse(expression);

							var result = this.recursive_evaluate(root);
							$(".screen").val(result);
						} catch (e) {
							console.log(e);
						}
					}
				}, {
					key: 'recursive_evaluate',
					value: function recursive_evaluate(node) {

						if (node.type.localeCompare("ConstantNode") == 0) {
							return node.value;
						} else if (node.type.localeCompare("OperatorNode") == 0) {

							var promise;
							var a = this.recursive_evaluate(node.args[0]);
							var b = this.recursive_evaluate(node.args[1]);

							switch (node.op) {
								case '*':
									return this.multiply(a, b);
									break;
								case '/':
									return this.divide(a, b);
									break;
								case '+':
									return this.add(a, b);
									break;
								case '-':
									return this.subtract(a, b);
									break;
								default:
									throw "Unexpected operator";
							}
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91aS9ob21lL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dDQUlhLFVBQVU7Ozs7Ozs7O29DQUpmLFVBQVU7OEJBQUUsSUFBSTs7Ozs7OztBQUlYLGFBQVU7QUFJWCxhQUpDLFVBQVUsR0FJUjsyQkFKRixVQUFVOztBQUtyQixTQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O0FBRW5DLFNBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQy9CLFlBQU0sQ0FDRixXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FDekMsWUFBWSxDQUFDO0FBQ2hCLFdBQUksRUFBRSxNQUFNO0FBQ1IsY0FBTyxFQUFFO0FBQ04sZ0JBQVEsRUFBRSxrQkFBa0I7QUFDNUIsMEJBQWtCLEVBQUUsT0FBTztRQUM3QjtPQUNGLENBQUMsQ0FDRCxlQUFlLENBQUM7QUFDZixjQUFPLEVBQUEsaUJBQUMsUUFBTyxFQUFFO0FBQ2QsZUFBTyxDQUFDLEdBQUcsaUJBQWUsUUFBTyxDQUFDLE1BQU0sU0FBSSxRQUFPLENBQUMsR0FBRyxDQUFHLENBQUM7QUFDM0QsZUFBTyxRQUFPLENBQUM7UUFDakI7QUFDRCxlQUFRLEVBQUEsa0JBQUMsU0FBUSxFQUFFO0FBQ2hCLGVBQU8sQ0FBQyxHQUFHLGVBQWEsU0FBUSxDQUFDLE1BQU0sU0FBSSxTQUFRLENBQUMsR0FBRyxDQUFHLENBQUM7QUFDM0QsZUFBTyxTQUFRLENBQUM7UUFDbEI7T0FDRixDQUFDLENBQUM7TUFDUCxDQUFDLENBQUM7S0FDTjs7aUJBNUJXLFVBQVU7O1lBZ0NuQixhQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFLVCxhQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7TUFDYjs7O1lBRU8sa0JBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUtkLGFBQU8sQ0FBQyxHQUFDLENBQUMsQ0FBQztNQUNYOzs7WUFFTyxrQkFBQyxDQUFDLEVBQUUsQ0FB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TSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixlQUFNO0FBQUEsQUFDUCxhQUFLLEdBQUc7QUFDUCxnQkFBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN0QixlQUFNO0FBQUEsQUFDUCxhQUFLLEdBQUc7QUFDUCxnQkFBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixlQUFNO0FBQUEsQUFDUDtBQUNDLGVBQU0scUJBQXFCLENBQUU7QUFBQSxRQUM5QjtPQUNELE1BQU07QUFDTixhQUFNLHNCQUFzQixDQUFFO09BQzlCO01BQ0Q7OztZQUVHLGNBQUMsT0FBTyxFQUFFO0FBQ2IsVUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUUzQyxVQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFVBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsYUFBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUUsVUFBQSxLQUFLO2NBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7T0FBQSxDQUFDLENBQUM7O0FBRS9ELFVBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsYUFBTSw0Q0FBNEMsR0FBRyxPQUFPLENBQUM7T0FDN0QsTUFBTSxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzlCLFdBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDdEMsTUFBTSxFQUVOO01BQ0Q7OztXQTFLVyxVQUFVIiwiZmlsZSI6ImFwcC91aS9ob21lL2NhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxjdWxhdG9yIHtcblxuXHRodHRwQ2xpZW50XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5odHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuXHRcdHRoaXMuaHR0cENsaWVudC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICBcdFx0XHRjb25maWdcbiAgICAgIFx0XHRcdFx0LndpdGhCYXNlVXJsKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycpXG4gICAgICBcdFx0XHRcdC53aXRoRGVmYXVsdHMoe1xuXHRcdFx0XHRcdFx0XHRcdG1vZGU6ICdjb3JzJyxcbiAgICAgICAgXHRcdFx0XHRoZWFkZXJzOiB7XG4gICAgICAgICAgXHRcdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgXHRcdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ0ZldGNoJ1xuICAgICAgICBcdFx0XHRcdH1cbiAgICAgIFx0XHRcdFx0fSlcbiAgICAgIFx0XHRcdFx0LndpdGhJbnRlcmNlcHRvcih7XG4gICAgICAgIFx0XHRcdFx0cmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgICAgICAgXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBSZXF1ZXN0aW5nICR7cmVxdWVzdC5tZXRob2R9ICR7cmVxdWVzdC51cmx9YCk7XG4gICAgICAgICAgXHRcdFx0XHRcdHJldHVybiByZXF1ZXN0O1xuICAgICAgICBcdFx0XHRcdH0sXG4gICAgICAgIFx0XHRcdFx0cmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICBcdFx0XHRcdFx0Y29uc29sZS5sb2coYFJlY2VpdmVkICR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnVybH1gKTtcbiAgICAgICAgICBcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBcdFx0XHRcdH1cbiAgICAgIFx0XHRcdFx0fSk7XG4gIFx0XHRcdH0pO1xuXHR9XG5cblx0Ly9OT1RFIC0tIHNob3VsZCBsb29rIGF0IHVzaW5nIHN3YWdnZXIgbGlrZSBmcmFtZXdvcmsgdG8gZ2VuZXJhdGUgYW4gQVBJXG5cblx0YWRkKGEsIGIpIHtcblx0XHQvL2xldmVsIHVwXG5cdFx0Ly90aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ2FkZCcsIGEsIGIpO1xuXG5cdFx0Ly9jb3dhcmQncyB3YXkgb3V0XG5cdFx0cmV0dXJuIGEgKyBiO1xuXHR9XG5cblx0c3VidHJhY3QoYSwgYikge1xuXHRcdC8vbGV2ZWwgdXBcblx0XHQvL3RoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnc3VidHJhY3QnLCBhLCBiKTtcblxuXHRcdC8vY293YXJkJ3Mgd2F5IG91dFxuXHRcdHJldHVybiBhLWI7XG5cdH1cblxuXHRtdWx0aXBseShhLCBiKSB7XG5cdFx0Ly9sZXZlbCB1cFxuXHRcdC8vdGhpcy51c2VfYXJpdGhtZXRpY19zZXJ2aWNlKCdtdWx0aXBseScsIGEsIGIpO1xuXG5cdFx0Ly9jb3dhcmQncyB3YXkgb3V0XG5cdFx0cmV0dXJuIGEqYjtcblx0fVxuXG5cdGRpdmlkZShhLCBiKSB7XG5cdFx0Ly9sZXZlbCB1cFxuXHRcdC8vdGhpcy51c2VfYXJpdGhtZXRpY19zZXJ2aWNlKCdkaXZpZGUnLCBhLCBiKTtcblxuXHRcdC8vY293YXJkJ3Mgd2F5IG91dFxuXHRcdHJldHVybiBhL2I7XG5cdH1cblxuXHQvKlxuXHQgKiBwb3N0IHRvIHRoZSBhcml0aG1ldGljIHNlcnZpY2UgdG8gZGV0ZXJtaW5lIHRoZSByZXN1bHQgb2YgcGVyZm9ybWluZyB0aGUgb3BlcmF0b3IgdG8gYSBhbmQgYlxuXHQgKiBAcGFyYW0gYSB0aGUgZmlyc3Qgb3BlcmFuZFxuXHQgKiBAcGFyYW0gYiB0aGUgc2Vjb25kIG9wZXJhbmRcblx0ICovXG5cdHVzZV9hcml0aG1ldGljX3NlcnZpY2Uob3BlcmF0b3IsIGEsIGIpIHtcblx0XHRjb25zb2xlLmxvZygnYXJpdGhtZXRpY19zZXJ2aWNlJyk7XG5cdFx0dmFyIG9wZXJhbmRzID0ge2E6YSwgYjpifTtcblxuXHRcdHRoaXMuaHR0cENsaWVudFxuXHRcdFx0LmZldGNoKG9wZXJhdG9yLCB7XG5cdFx0XHRcdFx0bWV0aG9kOiAncG9zdCcsIGJvZHk6IGpzb24ob3BlcmFuZHMpXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHQudGhlbihcblx0XHRcdFx0cmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzdWx0LnJlc3VsdCk7XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVycm9yID0+IHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHRcdFx0XHR9KTtcblx0fVxuXG5cdGhhbmRsZV90b2tlbihlbGVtZW50KSB7XG5cdFx0bGV0IGluaXRpYWxWYWx1ZSA9ICQoXCIuc2NyZWVuXCIpLnZhbCgpLy9cblx0XHRsZXQgbmV3VmFsdWUgPSBpbml0aWFsVmFsdWUuY29uY2F0KGVsZW1lbnQudmFsdWUpO1xuXG5cdFx0Ly9UT0RPOiBhZGQgaW5jcmVtZW50YWwgdmFsaWRhdGlvbiBvZiBlcXVhdGlvbnNcblx0XHQvLyAgICAgIG1heSBpbnZvbHZlIGJ1aWxkaW5nIGEgcGFyc2VyIC0gY2FudCcgZmluZCBhIHRvb2wgdG8gZG8gaXQgeWV0XG5cblx0XHQkKFwiLnNjcmVlblwiKS52YWwobmV3VmFsdWUpO1xuXHR9XG5cblx0aGFuZGxlX2NsZWFyKGVsZW1lbnQpIHtcblx0XHQkKFwiLnNjcmVlblwiKS52YWwoXCJcIik7XG5cdH1cblxuXHRoYW5kbGVfZXZhbHVhdGUoZWxlbWVudCkge1xuXHRcdGxldCBleHByZXNzaW9uID0gJChcIi5zY3JlZW5cIikudmFsKCk7XG5cdFx0dHJ5IHtcblx0XHRcdC8vY291bGQgZG8gdGhpcyB0byB1c2UgYSBzZXJ2aWNlIGZvciBjYWxjdWxhdGlvblxuXHRcdFx0bGV0IHJvb3QgPSBtYXRoLnBhcnNlKGV4cHJlc3Npb24pO1xuXG5cdFx0XHQvL2xldmVsIHVwXG5cdFx0XHQvL3RoaXMucmVjdXJzaXZlX2V2YWx1YXRlKHJvb3QsIChyZXN1bHQpID0+IHsgJChcIi5zY3JlZW5cIikudmFsKHJlc3VsdCk7IH0pO1xuXG5cdFx0XHQvL2Nvd2FyZCdzIHdheSBvdXRcblx0XHRcdGxldCByZXN1bHQgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShyb290KTtcblx0XHRcdCQoXCIuc2NyZWVuXCIpLnZhbChyZXN1bHQpO1xuXG5cdFx0XHQvL29yIHdlIGNhbiBkbyB0aGlzIHRoZSBlYXN5IHdheVxuXHRcdFx0Ly8kKFwiLnNjcmVlblwiKS52YWwobWF0aC5ldmFsKGV4cHJlc3Npb24pKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdC8vVE9ETzogaGFuZGxlIGVycm9yIGluIGEgdXNlciB2aXNpYmxlIHdheVxuXHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRyZWN1cnNpdmVfZXZhbHVhdGUobm9kZSkge1xuXG5cdFx0aWYobm9kZS50eXBlLmxvY2FsZUNvbXBhcmUoXCJDb25zdGFudE5vZGVcIik9PTApIHsvL1RPRE86IHVzZSBpbnN0YW5jZW9mIGluc3RlYWRcblx0XHRcdHJldHVybiBub2RlLnZhbHVlO1xuXHRcdH0gZWxzZSBpZihub2RlLnR5cGUubG9jYWxlQ29tcGFyZShcIk9wZXJhdG9yTm9kZVwiKT09MCkgey8vVE9ETzogdXNlIGluc3RhbmNlb2YgaW5zdGVhZFxuXG5cdFx0XHR2YXIgcHJvbWlzZTtcblx0XHRcdHZhciBhID0gdGhpcy5yZWN1cnNpdmVfZXZhbHVhdGUobm9kZS5hcmdzWzBdKTtcblx0XHRcdHZhciBiID0gdGhpcy5yZWN1cnNpdmVfZXZhbHVhdGUobm9kZS5hcmdzWzFdKTtcblxuXHRcdFx0c3dpdGNoKG5vZGUub3ApIHtcblx0XHRcdFx0Y2FzZSAnKic6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMubXVsdGlwbHkoYSxiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnLyc6XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMuZGl2aWRlKGEsIGIpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICcrJzpcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5hZGQoYSwgYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJy0nOlxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnN1YnRyYWN0KGEsYik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dGhyb3coXCJVbmV4cGVjdGVkIG9wZXJhdG9yXCIpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aHJvdyhcInVuZXhwZWN0ZWQgbm9kZSB0eXBlXCIpO1xuXHRcdH1cblx0fVxuXG5cdHB1c2goZWxlbWVudCkge1xuXHRcdHZhciBjYXNlcyA9IFtcInRva2VuXCIsIFwiY2xlYXJcIiwgXCJldmFsdWF0ZVwiXTtcblxuXHRcdHZhciBjbGF6ek5hbWUgPSBlbGVtZW50LmNsYXNzTmFtZTtcblx0XHR2YXIgY2xhenplcyA9IGNsYXp6TmFtZS5zcGxpdCgnICcpO1xuXHRcdGNsYXp6ZXMgPSBjbGF6emVzLmZpbHRlciggY2xhenogPT4gY2FzZXMuaW5kZXhPZihjbGF6eikgIT0gLTEpOy8vZHJvcCBjbGFzc2VzIHRoYXQgYXJlIGlycmVsZXZhbnQgdG8gZGVjaXNpb25cblxuXHRcdGlmKGNsYXp6ZXMubGVuZ3RoID4gMSkge1xuXHRcdFx0dGhyb3cgXCJFbGVtZW50IGhhcyBtb3JlIHRoYW4gb25lIHBvdGVudGlhbCB0eXBlOiBcIiArIGNsYXp6ZXM7XG5cdFx0fSBlbHNlIGlmKGNsYXp6ZXMubGVuZ3RoID09IDEpIHtcblx0XHRcdHRoaXNbJ2hhbmRsZV8nICsgY2xhenplc1swXV0oZWxlbWVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vaWYgaXQgaXNuJ3Qgb25lIG9mIHRoZSBlbGVtZW50cyB3ZSBhcmUgZXhwZWN0aW5nLCB3ZSB3b24ndCByZWFjdFxuXHRcdH1cblx0fVxufVxuIl19
