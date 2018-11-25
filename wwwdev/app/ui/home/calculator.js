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

							var a = this.recursive_evaluate(node.args[0]);
							var b = this.recursive_evaluate(node.args[1]);

							return Promise.all([a, b]).then(function (result) {
								var a = result[0];
								var b = result[1];

								console.log('a => ', a);
								console.log('b => ', b);
								console.log('op => ', node.op);

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91aS9ob21lL2NhbGN1bGF0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dDQUlhLFVBQVU7Ozs7Ozs7O29DQUpmLFVBQVU7OEJBQUUsSUFBSTs7Ozs7OztBQUlYLGFBQVU7QUFJWCxhQUpDLFVBQVUsR0FJUjsyQkFKRixVQUFVOztBQUtyQixTQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7O0FBRW5DLFNBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQy9CLFlBQU0sQ0FDRixXQUFXLENBQUMsNEJBQTRCLENBQUMsQ0FDekMsWUFBWSxDQUFDO0FBQ2hCLFdBQUksRUFBRSxNQUFNO0FBQ1IsY0FBTyxFQUFFO0FBQ04sZ0JBQVEsRUFBRSxrQkFBa0I7QUFDNUIsMEJBQWtCLEVBQUUsT0FBTztRQUM3QjtPQUNGLENBQUMsQ0FDRCxlQUFlLENBQUM7QUFDZixjQUFPLEVBQUEsaUJBQUMsUUFBTyxFQUFFO0FBQ2QsZUFBTyxRQUFPLENBQUM7UUFDakI7QUFDRCxlQUFRLEVBQUEsa0JBQUMsU0FBUSxFQUFFO0FBQ2hCLGVBQU8sU0FBUSxDQUFDO1FBQ2xCO09BQ0YsQ0FBQyxDQUFDO01BQ1AsQ0FBQyxDQUFDO0tBQ047O2lCQTFCVyxVQUFVOztZQW1FQSxnQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTs7O0FBQ3ZDLGFBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUN0QixJQUFJLENBQUUsWUFBTTtBQUNaLFdBQUksUUFBUSxHQUFHLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUM7QUFDMUIsV0FBSSxPQUFPLEdBQUcsTUFBSyxVQUFVLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDekYsY0FBTyxP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O0FBQ1AsaUJBQU8sT0FBSyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2hELGdCQUFNO0FBQUEsQUFDUCxjQUFLLEdBQUc7QUFDUCxpQkFBTyxPQUFLLHNCQUFzQixDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDckQsZ0JBQU07QUFBQSxBQUNQO0FBQ0MsZ0JBQU0scUJBQXFCLENBQUU7QUFBQSxTQUM5QjtRQUNELENBQUMsQ0FBQztPQUNKLE1BQU07QUFDTixhQUFNLHNCQUFzQixDQUFFO09BQzlCO01BQ0Q7OztZQUVHLGNBQUMsT0FBTyxFQUFFO0FBQ2IsVUFBSSxLQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDOztBQUUzQyxVQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFVBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkMsYUFBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUUsVUFBQSxLQUFLO2NBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7T0FBQSxDQUFDLENBQUM7O0FBRS9ELFVBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDdEIsYUFBTSw0Q0FBNEMsR0FBRyxPQUFPLENBQUM7T0FDN0QsTUFBTSxJQUFHLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzlCLFdBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDdEMsTUFBTSxFQUVOO01BQ0Q7OztXQXpLVyxVQUFVIiwiZmlsZSI6ImFwcC91aS9ob21lL2NhbGN1bGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHBDbGllbnQsIGpzb259IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgKiBhcyBtYXRoIGZyb20gJ21hdGhqcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxjdWxhdG9yIHtcblxuXHRodHRwQ2xpZW50XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5odHRwQ2xpZW50ID0gbmV3IEh0dHBDbGllbnQoKTtcblxuXHRcdHRoaXMuaHR0cENsaWVudC5jb25maWd1cmUoY29uZmlnID0+IHtcbiAgICBcdFx0XHRjb25maWdcbiAgICAgIFx0XHRcdFx0LndpdGhCYXNlVXJsKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpLycpXG4gICAgICBcdFx0XHRcdC53aXRoRGVmYXVsdHMoe1xuXHRcdFx0XHRcdFx0XHRcdG1vZGU6ICdjb3JzJyxcbiAgICAgICAgXHRcdFx0XHRoZWFkZXJzOiB7XG4gICAgICAgICAgXHRcdFx0XHRcdCdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgXHRcdFx0XHRcdCdYLVJlcXVlc3RlZC1XaXRoJzogJ0ZldGNoJ1xuICAgICAgICBcdFx0XHRcdH1cbiAgICAgIFx0XHRcdFx0fSlcbiAgICAgIFx0XHRcdFx0LndpdGhJbnRlcmNlcHRvcih7XG4gICAgICAgIFx0XHRcdFx0cmVxdWVzdChyZXF1ZXN0KSB7XG4gICAgICAgICAgXHRcdFx0XHRcdHJldHVybiByZXF1ZXN0O1xuICAgICAgICBcdFx0XHRcdH0sXG4gICAgICAgIFx0XHRcdFx0cmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgICBcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlO1xuICAgICAgICBcdFx0XHRcdH1cbiAgICAgIFx0XHRcdFx0fSk7XG4gIFx0XHRcdH0pO1xuXHR9XG5cblx0Ly9hZGQoYSwgYikge1xuXHRcdC8vbGV2ZWwgdXBcblx0Ly9cdHJldHVybiB0aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ2FkZCcsIGEsIGIpO1xuXG5cdFx0Ly9jb3dhcmQncyB3YXkgb3V0XG5cdFx0Ly9yZXR1cm4gYSArIGI7XG5cdC8vfVxuXG5cdC8vc3VidHJhY3QoYSwgYikge1xuXHRcdC8vbGV2ZWwgdXBcblx0Ly9cdHJldHVybiB0aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ3N1YnRyYWN0JywgYSwgYik7XG5cblx0XHQvL2Nvd2FyZCdzIHdheSBvdXRcblx0XHQvL3JldHVybiBhLWI7XG5cdC8vfVxuXG5cdC8vbXVsdGlwbHkoYSwgYikge1xuXHRcdC8vbGV2ZWwgdXBcblx0Ly9cdHJldHVybiB0aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ211bHRpcGx5JywgYSwgYik7XG5cblx0XHQvL2Nvd2FyZCdzIHdheSBvdXRcblx0XHQvL3JldHVybiBhKmI7XG5cdC8vfVxuXG5cdC8vZGl2aWRlKGEsIGIpIHtcblx0XHQvL2xldmVsIHVwXG5cdC8vXHRyZXR1cm4gdGhpcy51c2VfYXJpdGhtZXRpY19zZXJ2aWNlKCdkaXZpZGUnLCBhLCBiKTtcblxuXHRcdC8vY293YXJkJ3Mgd2F5IG91dFxuXHRcdC8vcmV0dXJuIGEvYjtcblx0Ly99XG5cblx0Ly9UT0RPOiB1c2Ugc29tZXRoaW5nIGxpa2Ugc3dhZ2dlciB0byBkb2N1bWVudCB0aGUgYXBpXG5cblx0Lypcblx0ICogcG9zdCB0byB0aGUgYXJpdGhtZXRpYyBzZXJ2aWNlIHRvIGRldGVybWluZSB0aGUgcmVzdWx0IG9mIHBlcmZvcm1pbmcgdGhlIG9wZXJhdG9yIHRvIGEgYW5kIGJcblx0ICogQHBhcmFtIGEgdGhlIGZpcnN0IG9wZXJhbmRcblx0ICogQHBhcmFtIGIgdGhlIHNlY29uZCBvcGVyYW5kXG5cdCAqL1xuXHR1c2VfYXJpdGhtZXRpY19zZXJ2aWNlKG9wZXJhdGlvbiwgYSwgYikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuXHRcdFx0LnRoZW4oICgpID0+IHtcblx0XHRcdFx0dmFyIG9wZXJhbmRzID0ge2E6YSwgYjpifTtcblx0XHRcdFx0dmFyIHByb21pc2UgPSB0aGlzLmh0dHBDbGllbnQuZmV0Y2gob3BlcmF0aW9uLCB7XHRtZXRob2Q6ICdwb3N0JywgYm9keToganNvbihvcGVyYW5kcykgfSk7XG5cdFx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKCByZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHQucmVzdWx0O1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0IFx0IH0pO1xuXHR9XG5cblx0aGFuZGxlX3Rva2VuKGVsZW1lbnQpIHtcblx0XHRsZXQgaW5pdGlhbFZhbHVlID0gJChcIi5zY3JlZW5cIikudmFsKCk7XG5cdFx0bGV0IG5ld1ZhbHVlID0gaW5pdGlhbFZhbHVlLmNvbmNhdChlbGVtZW50LnZhbHVlKTtcblxuXHRcdC8vVE9ETzogYWRkIGluY3JlbWVudGFsIHZhbGlkYXRpb24gb2YgZXF1YXRpb25zXG5cblx0XHQkKFwiLnNjcmVlblwiKS52YWwobmV3VmFsdWUpO1xuXHR9XG5cblx0aGFuZGxlX2NsZWFyKGVsZW1lbnQpIHtcblx0XHQkKFwiLnNjcmVlblwiKS52YWwoXCJcIik7XG5cdH1cblxuXHRoYW5kbGVfZXZhbHVhdGUoZWxlbWVudCkge1xuXHRcdGxldCBleHByZXNzaW9uID0gJChcIi5zY3JlZW5cIikudmFsKCk7XG5cblx0XHR0cnkge1xuXHRcdFx0Ly9jb3VsZCBkbyB0aGlzIHRvIHVzZSBhIHNlcnZpY2UgZm9yIGNhbGN1bGF0aW9uXG5cdFx0XHRsZXQgcm9vdCA9IG1hdGgucGFyc2UoZXhwcmVzc2lvbik7XG5cblx0XHRcdGxldCByZXN1bHQgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShyb290KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LnRoZW4oIHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQoXCIuc2NyZWVuXCIpLnZhbChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdC8vdGhlIHJlYWxseSBlYXN5IHdheVxuXHRcdFx0Ly8kKFwiLnNjcmVlblwiKS52YWwobWF0aC5ldmFsKGV4cHJlc3Npb24pKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdC8vVE9ETzogaGFuZGxlIGVycm9yIGluIGEgdXNlciB2aXNpYmxlIHdheVxuXHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0fVxuXHR9XG5cblx0cmVjdXJzaXZlX2V2YWx1YXRlKG5vZGUpIHtcblxuXHRcdGlmKG5vZGUudHlwZS5sb2NhbGVDb21wYXJlKFwiQ29uc3RhbnROb2RlXCIpPT0wKSB7Ly9UT0RPOiB1c2UgaW5zdGFuY2VvZiBpbnN0ZWFkXG5cdFx0XHRyZXR1cm4gbm9kZS52YWx1ZTtcblx0XHR9IGVsc2UgaWYobm9kZS50eXBlLmxvY2FsZUNvbXBhcmUoXCJPcGVyYXRvck5vZGVcIik9PTApIHsvL1RPRE86IHVzZSBpbnN0YW5jZW9mIGluc3RlYWRcblxuXHRcdFx0bGV0IGEgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShub2RlLmFyZ3NbMF0pO1xuXHRcdCAgbGV0IGIgPSB0aGlzLnJlY3Vyc2l2ZV9ldmFsdWF0ZShub2RlLmFyZ3NbMV0pO1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW2EsIGJdKVxuXHRcdFx0XHQudGhlbiggKHJlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdGxldCBhID0gcmVzdWx0WzBdO1xuXHRcdFx0XHRcdGxldCBiID0gcmVzdWx0WzFdO1xuXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2EgPT4gJywgYSk7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2IgPT4gJywgYik7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ29wID0+ICcsIG5vZGUub3ApO1xuXG5cdFx0XHRcdFx0c3dpdGNoKG5vZGUub3ApIHtcblx0XHRcdFx0XHQgY2FzZSAnKic6XG5cdFx0XHRcdFx0XHQgcmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnbXVsdGlwbHknLCBhLCBiKTtcblx0XHRcdFx0XHRcdCBicmVhaztcblx0XHRcdFx0XHQgY2FzZSAnLyc6XG5cdFx0XHRcdFx0XHQgcmV0dXJuIHRoaXMudXNlX2FyaXRobWV0aWNfc2VydmljZSgnZGl2aWRlJywgYSwgYik7XG5cdFx0XHRcdFx0XHQgYnJlYWs7XG5cdFx0XHRcdFx0IGNhc2UgJysnOlxuXHRcdFx0XHRcdFx0IHJldHVybiB0aGlzLnVzZV9hcml0aG1ldGljX3NlcnZpY2UoJ2FkZCcsIGEsIGIpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdCBjYXNlICctJzpcblx0XHRcdFx0XHRcdCByZXR1cm4gdGhpcy51c2VfYXJpdGhtZXRpY19zZXJ2aWNlKCdzdWJ0cmFjdCcsIGEsIGIpO1xuXHRcdFx0XHRcdFx0IGJyZWFrO1xuXHRcdFx0XHRcdCBkZWZhdWx0OlxuXHRcdFx0XHRcdFx0IHRocm93KFwiVW5leHBlY3RlZCBvcGVyYXRvclwiKTtcblx0XHRcdFx0IH1cblx0XHRcdCB9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhyb3coXCJ1bmV4cGVjdGVkIG5vZGUgdHlwZVwiKTtcblx0XHR9XG5cdH1cblxuXHRwdXNoKGVsZW1lbnQpIHtcblx0XHR2YXIgY2FzZXMgPSBbXCJ0b2tlblwiLCBcImNsZWFyXCIsIFwiZXZhbHVhdGVcIl07XG5cblx0XHR2YXIgY2xhenpOYW1lID0gZWxlbWVudC5jbGFzc05hbWU7XG5cdFx0dmFyIGNsYXp6ZXMgPSBjbGF6ek5hbWUuc3BsaXQoJyAnKTtcblx0XHRjbGF6emVzID0gY2xhenplcy5maWx0ZXIoIGNsYXp6ID0+IGNhc2VzLmluZGV4T2YoY2xhenopICE9IC0xKTsvL2Ryb3AgY2xhc3NlcyB0aGF0IGFyZSBpcnJlbGV2YW50IHRvIGRlY2lzaW9uXG5cblx0XHRpZihjbGF6emVzLmxlbmd0aCA+IDEpIHtcblx0XHRcdHRocm93IFwiRWxlbWVudCBoYXMgbW9yZSB0aGFuIG9uZSBwb3RlbnRpYWwgdHlwZTogXCIgKyBjbGF6emVzO1xuXHRcdH0gZWxzZSBpZihjbGF6emVzLmxlbmd0aCA9PSAxKSB7XG5cdFx0XHR0aGlzWydoYW5kbGVfJyArIGNsYXp6ZXNbMF1dKGVsZW1lbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvL2lmIGl0IGlzbid0IG9uZSBvZiB0aGUgZWxlbWVudHMgd2UgYXJlIGV4cGVjdGluZywgd2Ugd29uJ3QgcmVhY3Rcblx0XHR9XG5cdH1cbn1cbiJdfQ==
