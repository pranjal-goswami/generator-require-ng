define(['angular'], function(angular) {
    'use strict';
    angular.module('<%= name %>Module', [])
        .directive('<%= name %>', [
            function() {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'src/directives/<%= name %>/<%= name %>.tpl.html',
                    scope: {},
                    link: function(scope, element, attrs) {
                        scope.directiveTitle = 'dummy';
                    }
                };
            }
        ]);
});
