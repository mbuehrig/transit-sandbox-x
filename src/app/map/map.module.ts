import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { MapLineDrawerComponent } from './map-line-drawer/map-line-drawer.component';
import { MapStationComponent } from './map-station/map-station.component';

@NgModule({
  declarations: [MapComponent, MapLineDrawerComponent, MapStationComponent],
  imports: [CommonModule],
  exports: [MapComponent],
})
export class MapModule {}
