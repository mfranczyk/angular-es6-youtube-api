import './home.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import HomeCtrl from './HomeCtrl';
import HomeService from './HomeService';
import SETTINGS from '../../config/settings';
import StaticResource from '../../common/StaticResource';

export default angular.module('app.Home', [uirouter, HomeService, SETTINGS, StaticResource])
    .config(routing)
    .controller('HomeCtrl', HomeCtrl)
    .name;