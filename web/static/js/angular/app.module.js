import './core.module';
import './promo/module';

import DefaultRoutes from './default.route';

angular
  .module('app',[
    'app.core',
    'app.promo'
  ])
  .config(DefaultRoutes)
