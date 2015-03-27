import './index.template';

RoutesConfig.$inject = ['$routeProvider'];

export default function RoutesConfig($routeProvider){
  $routeProvider.when('/promo',{
    controller: 'PromoIndexController',
    controllerAs: 'promo',
    templateUrl: 'web/static/js/angular/promo/index.template.jade',
    name: 'promo-index'
  })
}
