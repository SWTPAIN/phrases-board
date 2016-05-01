import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngSanitize from 'angular-sanitize';
import { combineReducers } from 'redux';

// Core
import { phraseActions, phraseReducer } from './core/phrases';

// Router
import { routerConfig } from './router';

// Views
import { AppComponent } from './views/app';
import { escapeDirective, focusDirective } from './views/common/directives';
import {
  PhraseSummaryComponent,
  PhraseCenterComponent,
  ActionBarComponent,
  PhraseFilterComponent,
  PhraseListComponent,
  PhraseItemComponent } from './views/phrases';

// Styles
import './styles/styles.scss';


let app = angular.module('app', [
  ngRedux,
  uiRouter,
  ngSanitize
])

  .value('phraseActions', phraseActions)

  .component('app', AppComponent)
  .component('phraseSummary', PhraseSummaryComponent)
  .component('phraseCenter', PhraseCenterComponent)
  .component('actionBar', ActionBarComponent)
  .component('phraseFilter', PhraseFilterComponent)
  .component('phraseList', PhraseListComponent)
  .component('phraseItem', PhraseItemComponent)


  .directive('escape', escapeDirective)
  .directive('focus', focusDirective)

  .config(['$ngReduxProvider', $ngReduxProvider => {
    $ngReduxProvider.createStoreWith(combineReducers({
      phrase: phraseReducer
    }), []);
  }])

  .config(routerConfig);


angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name], {strictDi: true});
});
