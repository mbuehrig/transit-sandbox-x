import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from './ui.component';
import { AddBarComponent } from './add-bar/add-bar.component';
import { UiService } from './service/ui.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UiComponent, AddBarComponent],
  imports: [CommonModule, SharedModule],
  exports: [UiComponent],
  providers: [UiService],
})
export class UiModule {
  constructor(private uiService: UiService) {}
}
