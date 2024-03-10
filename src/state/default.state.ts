import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { DefaultAction } from './default.actions';

export interface DefaultStateModel {
  items: string[];
}

const defaults = {
  items: []
};

@State<DefaultStateModel>({
  name: 'default',
  defaults
})
@Injectable()
export class DefaultState {
  @Action(DefaultAction)
  add({ getState, setState }: StateContext<DefaultStateModel>, { payload }: DefaultAction) {
    const state = getState();
    setState({ items: [ ...state.items, payload ] });
  }
}
