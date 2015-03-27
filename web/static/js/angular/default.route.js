RoutesConfig.$inject = ['$routeProvider', '$locationProvider'];

export default function RoutesConfig($routeProvider, $locationProvider) {
  $routeProvider.otherwise({ redirectTo: "/" });
}
