import RepositoryIndexController from './index.controller';
import RoutesConfig from './routes';

angular
  .module('app.repository',[])
  .controller('RepositoryIndexController', RepositoryIndexController)
  .config(RoutesConfig)
