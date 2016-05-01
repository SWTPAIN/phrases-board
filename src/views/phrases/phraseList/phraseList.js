import { Component } from 'src/utils';
import template from './phraseList.html';


@Component({
  bindings: {
    model: '<',
    handleItemAddNoteClick: '&',
    handleItemSelectCheckboxClick: '&',
  },
  controllerAs: 'vm',
  template
})

export class PhraseListComponent {
  static $inject = [
    '$scope',
  ];

  constructor($scope) {
    $scope.phrases = this.model.sort();
    this.$scope = $scope;
  }

  $onChanges() {
    // huge hack here. otherwise phrase item not update
    this.$scope.phrases = this.model.sort();
  }
}
