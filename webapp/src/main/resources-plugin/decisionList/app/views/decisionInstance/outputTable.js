/* global define: false, angular: false */
define([
  'angular',
  'text!./variable-table.html'
],
function(angular, template) {
  'use strict';

  return [ 'ViewsProvider', function(ViewsProvider) {

    ViewsProvider.registerDefaultView('cockpit.decisionInstance.tab', {
      id: 'decision-input-table',
      label: 'Outputs',
      template: template,
      controller: [
               '$scope',
      function ($scope) {

        $scope.variables = $scope.decisionInstance.outputs.map(function (variable) {
          return {
            variable: {
              type: variable.type,
              value: variable.value,
              name: variable.clauseName || variable.clauseId,
              valueInfo: variable.valueInfo
            }
          };
        });
      }],
      priority: 10
    });
  }];
});