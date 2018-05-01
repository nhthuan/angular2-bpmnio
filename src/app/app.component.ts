import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// var Viewer = require('bpmn-js/lib/Viewer').default;
var Modeler = require('bpmn-js/lib/Modeler').default;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  bpmnModeler: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.bpmnModeler = new Modeler({
      container: '#js-canvas',
    });
    // let headers = new HttpHeaders();
    // headers.append("Content-Type", "xml");
    this.httpClient.get('https://cdn.rawgit.com/bpmn-io/bpmn-js-examples/dfceecba/starter/diagram.bpmn', {responseType: 'text'}).subscribe(result => {
      this.openDiagram(result);
    }, error => {
      alert(JSON.stringify(error));
    });
  }
  /**
       * Open diagram in our modeler instance.
       *
       * @param {String} bpmnXML diagram to display
       */
      private openDiagram(bpmnXML) {
        let self = this;
            // import diagram
            this.bpmnModeler.importXML(bpmnXML, function(err) {
    
              if (err) {
                return console.error('could not import BPMN 2.0 diagram', err);
              }
    
              // access modeler components
              var canvas = self.bpmnModeler.get('canvas');
              var overlays = self.bpmnModeler.get('overlays');
    
    
              // zoom to fit full viewport
              canvas.zoom('fit-viewport');
          }
}
