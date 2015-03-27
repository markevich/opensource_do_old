import './index.template';

RoutesConfig.$inject = ['$routeProvider'];

export default function RoutesConfig($routeProvider){
  $routeProvider.when('/',{
    controller: 'RepositoryIndexController',
    controllerAs: 'repository',
    templateUrl: 'web/static/js/angular/repositories/index.template.jade',
    name: 'repository-index'
  })
}
