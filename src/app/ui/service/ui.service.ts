import { actionButtons, TsxActionButton } from './ui.actionButtons';

export class UiService {
  actionButtons: TsxActionButton[] = actionButtons;

  constructor() {}

  getActionButtons(): TsxActionButton[] {
    console.log(actionButtons);
    return this.actionButtons;
  }
}
