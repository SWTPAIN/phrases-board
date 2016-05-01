import uiRouter from 'angular-ui-router';
import ngRedux from 'ng-redux';
import ngSanitize from 'angular-sanitize';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { combineReducers } from 'redux-immutable';
import immutable from 'angular-immutable';


// Core
import { phraseActions, phraseReducer } from './core/phrases';
import { modalActions, modalReducer } from './core/modal';

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
  PhraseItemComponent,
  NewNoteModalComponent } from './views/phrases';

// Styles
import './styles/styles.scss';


let app = angular.module('app', [
  ngRedux,
  uiRouter,
  ngSanitize,
  immutable
])

  .value('phraseActions', phraseActions)
  .value('modalActions', modalActions)

  .component('app', AppComponent)
  .component('phraseSummary', PhraseSummaryComponent)
  .component('phraseCenter', PhraseCenterComponent)
  .component('actionBar', ActionBarComponent)
  .component('phraseFilter', PhraseFilterComponent)
  .component('phraseList', PhraseListComponent)
  .component('phraseItem', PhraseItemComponent)
  .component('newNoteModal', NewNoteModalComponent)


  .directive('escape', escapeDirective)
  .directive('focus', focusDirective)

  .config(['$ngReduxProvider', $ngReduxProvider => {
    $ngReduxProvider.createStoreWith(combineReducers({
      phrase: phraseReducer,
      modal: modalReducer
    }), [thunk, createLogger()]);
  }])

  .config(routerConfig);


angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name], {strictDi: true});
});
