import PromoIndexController from './index.controller';
import RoutesConfig from './routes';

angular
  .module('app.promo',[])
  .controller('PromoIndexController', PromoIndexController)
  .config(RoutesConfig)
