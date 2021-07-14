import { Component, AfterViewInit } from '@angular/core'
import * as d3 from 'd3'

interface BkgPoint{
  x: number,
  y: number,
}

@Component({
  selector: 'ander-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    // if (this.bkg === undefined)
    //   return
    const bkg = d3.select('#bkg')
      .append("svg")
      .attr("width", '100%')
      .attr("height", '200vh')
    const bkgLine = d3.line()
      .curve(d3.curveBasis)
      // .x(()=>{})
  }

  private bkgLineData: BkgPoint[] = [{x: 0, y: 20}, {x: 150, y: 150}, {x: 300, y: 100}, {x: 450, y: 20}, {x: 600, y: 130}]


  // @ViewChild('bkg') private bkg?: ElementRef<Element>

}
