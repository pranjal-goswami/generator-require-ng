define(['angular', 'angular-ui-router'], function(angular) {
    angular.module('<% if(uppercaseModuleName){ print(uppercaseModuleName+"_");  }%><%= name %>Module', ['ui.router']).config(['$stateProvider', function($stateProvider) {
        /*config path for <%= name %> module*/
        $stateProvider.state('<%= name %>', {
            url: '<% if(moduleChar){ print("/"+moduleChar);  }%>/<%= name %>',
            templateUrl: 'src/<% if(moduleName){ print(moduleName+"/");  }%><%= name %>/<%= name %>.tpl.html',
            controller: 'Dummy<%= uppercaseName %>Controller'
        });
    }]).controller('Dummy<%= uppercaseName %>Controller', [
        '$scope',
        '$location',
        function($scope, $location) {
            /* initialize */
            $scope.pageTitle = 'dummy';
        }
    ]);
});
