import { Component } from 'src/utils';
import template from './phraseCenter.html';


@Component({
  controllerAs: 'vm',
  template
})

export class PhraseCenterComponent {
  static $inject = [
    '$ngRedux',
    '$scope',
    'phraseActions'
  ];

  constructor($ngRedux, $scope, phraseActions) {
    const disconnect = $ngRedux.connect(state => ({
      phrase: state.phrase
    }), phraseActions)((state, actions) => {
      this.actions = actions;
      this.phrases = state.phrase.phrases;
    });

    $scope.$on('$destroy', disconnect);

  }

  save() {
    if (this.editing) {
      if (this.model.title !== this.title) {
        this.model.title = this.title;
        this.updateTask({task: this.model});
      }
      this.editing = false;
    }
  }

  toggleCompleted() {
    this.model.completed = !this.model.completed;
    this.updateTask({task: this.model});
    this.statusUpdated = this.model.completed;
  }
}
