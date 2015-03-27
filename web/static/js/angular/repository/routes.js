import './index.template';

RoutesConfig.$inject = ['$routeProvider'];

export default function RoutesConfig($routeProvider){
  $routeProvider.when('/',{
    controller: 'RepositoryIndexController',
    controllerAs: 'vm',
    templateUrl: 'web/static/js/angular/repository/index.template.jade',
    name: 'repository-index'
  })
}
