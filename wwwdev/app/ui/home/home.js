System.register(["./calculator"], function (_export) {
    "use strict";

    var Calculator, Home;

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    return {
        setters: [function (_calculator) {
            Calculator = _calculator.Calculator;
        }],
        execute: function () {
            Home = function Home() {
                _classCallCheck(this, Home);

                this.title = "Overengineered Calculator";
                this.calculator = new Calculator();
            };

            _export("Home", Home);
        }
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC91aS9ob21lL2hvbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLElBQUk7Ozs7OztxQ0FGVCxVQUFVOzs7QUFFTCxnQkFBSSxHQUVGLFNBRkYsSUFBSSxHQUdiO3NDQUhTLElBQUk7O0FBSVQsb0JBQUksQ0FBQyxLQUFLLEdBQUcsMkJBQTJCLENBQUM7QUFDekMsb0JBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQzthQUN0QyIsImZpbGUiOiJhcHAvdWkvaG9tZS9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDYWxjdWxhdG9yfSBmcm9tICcuL2NhbGN1bGF0b3InXG5cbmV4cG9ydCBjbGFzcyBIb21lXG57XG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IFwiT3ZlcmVuZ2luZWVyZWQgQ2FsY3VsYXRvclwiO1xuXHQgICAgICAgdGhpcy5jYWxjdWxhdG9yID0gbmV3IENhbGN1bGF0b3IoKTtcbiAgICB9XG59XG4iXX0=
