import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import data from '../../helper/data.json'
import * as mapboxgl from 'mapbox-gl'; // Import the Mapbox GL JS library
import { PopupDataComponent } from './shared-components/popup-data/popup-data.component';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractiveMapDataAnalysisService {
  map = null
  dataJSON = data

  public compRef: any;
  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private resolver: ComponentFactoryResolver,
  ) { }



  private TwindowData = new Subject<any>();
  getWindow(): Observable<any> {
    return this.TwindowData.asObservable();
  }

  setWindow(TwindowData) {
    this.TwindowData.next(TwindowData);
  }




  generateData() {
    console.log(this.dataJSON)
    for (let value of this.dataJSON) {
      this.generatePopUp(value)
    }
  }

  generatePopUp(data) {
    let resolver = this.resolver;
    let injector = this.injector;
    let appRef = this.appRef;
    let compRef = this.compRef;
    const compFactory = resolver.resolveComponentFactory(PopupDataComponent);
    compRef = compFactory.create(injector);
    compRef.instance.data = data
    compRef.instance.param = 0;
    setInterval(() => compRef.instance.param++, 1000);
    appRef.attachView(compRef.hostView);
    compRef.onDestroy(() => {
      appRef.detachView(compRef.hostView);
    });
    let div: any = document.createElement('div');
    div.appendChild(compRef.location.nativeElement);
    // var markComponent = new mapboxgl.Marker(div).setLngLat(data.geometry.coordinates).addTo(this.map)
    var markComponent = new mapboxgl.Popup({ closeOnClick: false }).setLngLat([data.location.lng, data.location.lat]).setDOMContent(div).addTo(this.map);


  }
}
