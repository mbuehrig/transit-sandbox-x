import { Component, OnInit, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map-station',
  templateUrl: './map-station.component.html',
  styleUrls: ['./map-station.component.scss'],
})
export class MapStationComponent implements OnInit {
  @Input() colors: any;
  @Input() shape: any;
  @Input() lngLat: any;
  @Input() label!: string;

  marker?: mapboxgl.Marker;

  constructor() {}

  ngOnInit(): void {}
}
