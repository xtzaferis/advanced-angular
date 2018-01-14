import { AuTabComponent } from '../au-tab/au-tab.component';
import { 
  Component, 
  OnInit, 
  AfterContentInit, 
  ContentChildren, 
  QueryList } from '@angular/core';


@Component({
  selector: 'au-tab-panel',
  templateUrl: './au-tab-panel.component.html',
  styleUrls: ['../tab-panel.component.scss']
})
export class AuTabPanelComponent implements AfterContentInit {

  @ContentChildren(AuTabComponent)
  tabs: QueryList<AuTabComponent>

  constructor() { }

  ngAfterContentInit() {
    const selectedTab = this.tabs.find(tab => tab.selected);
    if (!selectedTab)
      this.tabs.first.selected = true;
  }

  selectTab(tab: AuTabComponent) {
    this.tabs.forEach(tab => tab.selected = false);
    tab.selected = true;
  }

}
