export class DefaultAction {
  static readonly type = '[Default] Add item';
  constructor(public payload: string) { }
}
