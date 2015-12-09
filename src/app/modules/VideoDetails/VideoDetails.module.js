import './videoDetails.css';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './routes';
import VideoDetailsCtrl from './VideoDetailsCtrl';
import VideoDetailsService from './VideoDetailsService';
import trusted from '../../common/Directives/trusted';


export default angular.module('app.VideoDetails', [uirouter, VideoDetailsService, trusted])
    .config(routing)
    .controller('VideoDetailsCtrl', VideoDetailsCtrl)
    .name;
