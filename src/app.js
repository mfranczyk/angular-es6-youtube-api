import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import config from './app/config/appConfig';
import home from './app/modules/Home/Home.module';
import videoDetails from './app/modules/VideoDetails/VideoDetails.module';

let dependencies = [
    uirouter,
    home,
    videoDetails
];

angular.module('app', dependencies)
    .config(config);

