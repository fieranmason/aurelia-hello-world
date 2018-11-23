System.register([], function (_export) {
    'use strict';

    _export('configure', configure);

    function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        init(aurelia);

        aurelia.start().then(function () {
            return aurelia.setRoot('app/ui/home/home');
        });
    }

    function init(aurelia) {
        console.log('Your custom bootstrapping code could go here');
    }
    return {
        setters: [],
        execute: function () {}
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sYUFBUyxTQUFTLENBQUMsT0FBTyxFQUNqQztBQUNJLGVBQU8sQ0FBQyxHQUFHLENBQ04scUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FBQzs7QUFFMUIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVkLGVBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7bUJBQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztTQUFBLENBQUMsQ0FBQztLQUNuRTs7QUFJRCxhQUFTLElBQUksQ0FBQyxPQUFPLEVBQ3JCO0FBQ0ksZUFBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO0tBQy9EIiwiZmlsZSI6ImFwcC9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSBcbntcbiAgICBhdXJlbGlhLnVzZVxuICAgICAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAgICAgLmRldmVsb3BtZW50TG9nZ2luZygpO1xuXG4gICAgaW5pdChhdXJlbGlhKTtcbiAgICAgICAgXG4gICAgYXVyZWxpYS5zdGFydCgpLnRoZW4oKCkgPT4gYXVyZWxpYS5zZXRSb290KCdhcHAvdWkvaG9tZS9ob21lJykpO1xufVxuXG5cbi8vQXBwbGljYXRpb24ncyBjdXN0b20gc3RhcnR1cCBjb2RlXG5mdW5jdGlvbiBpbml0KGF1cmVsaWEpXG57XG4gICAgY29uc29sZS5sb2coJ1lvdXIgY3VzdG9tIGJvb3RzdHJhcHBpbmcgY29kZSBjb3VsZCBnbyBoZXJlJyk7XG59Il19
