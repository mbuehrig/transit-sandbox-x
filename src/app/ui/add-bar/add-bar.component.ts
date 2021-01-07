import { Component, OnInit } from '@angular/core';
import { TsxActionButton } from '../service/ui.actionButtons';
import { UiService } from '../service/ui.service';

@Component({
  selector: 'app-add-bar',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.scss'],
})
export class AddBarComponent implements OnInit {
  actionButtons!: TsxActionButton[];

  constructor(private uiService: UiService) {
    this.actionButtons = this.uiService.getActionButtons();
  }

  ngOnInit(): void {}

  setEditorActive(mode: string, defaultColor: string): void {}
}
