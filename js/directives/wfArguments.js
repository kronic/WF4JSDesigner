'use strict';

app.directive('wfArguments', function(environment, wfModel) {
    return {
        restrict: 'A',
        templateUrl: './js/templates/wfArguments.html',
        scope: {
            arguments:"=wfArguments"
        },
        link: function (scope, element, attrs, ctrl) {

            scope.availableTypes = environment.types;

            scope.directions = [ 'In', 'Out', 'InOut', 'Property' ];

            scope.newArgument = function() {
                //create a new argument in collection giving it default values
                var argument = {
                    name: "",           //should generate next free name VariableX
                    direction: "In",
                    type: "String",     //dependency
                    defaultValue: ""
                };
                scope.arguments.push(argument);
            };

            scope.deleteArgument = function(argument) {
                remove(scope.arguments, argument);
            };
            //repeated this code in wfVariables
            function remove(arr, item) {
                for(var i = arr.length; i--;) {
                    if(arr[i] === item) {
                        arr.splice(i, 1);
                    }
                }
            }
        }
    };
});