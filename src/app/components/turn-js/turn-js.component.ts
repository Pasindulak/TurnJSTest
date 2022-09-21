import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-turn-js',
  templateUrl: './turn-js.component.html',
  styleUrls: ['./turn-js.component.css']
})
export class TurnJSComponent implements OnInit {
  reports: string[] = [];

  constructor() {

  }


  ngOnInit(): void {
    this.loadScript();
    this.loadReports();
  }

  loadReports(){
    let basePath = "assets/pages/report";
    
    for (let i = 1; i < 6; i++) {
      let div = document.createElement('div');
      fetch(basePath + i + ".html")
        .then(response => response.text())
        .then(text => div.innerHTML = text);
      document.getElementById('flipbook')?.appendChild(div);
    }
  }

  loadScript() {
    this.addScriptToHead("assets/extras/jquery.min.1.7.js");
    this.addScriptToHead("assets/extras/modernizr.2.5.3.min.js");
    this.addScriptToHead("assets/turnJS/basic.js");

  }

  private addScriptToHead(src: string) {
    let node = document.createElement('script'); // creates the script tag
    node.src = src; // sets the source (insert url in between quotes)
    //node.async = async; // makes script run asynchronously
    node.type = "text/javascript";
    // append to head of document
    document.getElementsByTagName('head')[0].appendChild(node);
  }

}
