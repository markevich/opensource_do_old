import './core.module';
import './promo/module';
import './repository/module';

import DefaultRoutes from './default.route';

angular
  .module('app',[
    'app.core',
    'app.promo',
    'app.repository'
  ])
  .config(DefaultRoutes)
