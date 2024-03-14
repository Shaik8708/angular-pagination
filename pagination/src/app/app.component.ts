import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pagination';

  staticData = [{
    name: 'shaik',
    age: '24',
  },{
    name: 'mohammed',
    age: '23',
  },{
    name: 'subhan',
    age: '25',
  },{
    name: 'basan',
    age: '23',
  },{
    name: 'naveen',
    age: '26',
  },{
    name: 'vijay',
    age: '24',
  },{
    name: 'shashank',
    age: '27',
  },{
    name: 'gopi',
    age: '23',
  },{
    name: 'talib',
    age: '22',
  },{
    name: 'mobile',
    age: '21',
  },{
    name: 'anil',
    age: '24',
  },{
    name: 'ambani',
    age: '29',
  },{
    name: 'suhail',
    age: '22',
  },{
    name: 'mama',
    age: '30',
  },{
    name: 'shaik',
    age: '24',
  },{
    name: 'mohammed',
    age: '23',
  },{
    name: 'subhan',
    age: '25',
  },{
    name: 'basan',
    age: '23',
  },{
    name: 'naveen',
    age: '26',
  },{
    name: 'vijay',
    age: '24',
  },{
    name: 'shashank',
    age: '27',
  },{
    name: 'gopi',
    age: '23',
  },{
    name: 'talib',
    age: '22',
  },{
    name: 'mobile',
    age: '21',
  },{
    name: 'anil',
    age: '24',
  },{
    name: 'ambani',
    age: '29',
  },{
    name: 'suhail',
    age: '22',
  },{
    name: 'mama',
    age: '30',
  }];

  currentPage = 1;
  totalPages = this.staticData.length%5 === 0 ? this.staticData.length/5 : Math.round(this.staticData.length/5) ; // Assuming there are 10 pages
  recordsPerPage = 5; // Assuming 5 records per page
  allRecords: any[] = this.staticData; // Assuming allRecords is an array containing all records
  displayedRecords: any[] = []; // Records to display for the current page

  constructor() { 
    this.updateDisplayedRecords();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedRecords();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedRecords();
    }
  }

  updateDisplayedRecords() {
    const startIndex = (this.currentPage - 1) * this.recordsPerPage;
    const endIndex = Math.min(startIndex + this.recordsPerPage, this.allRecords.length);
      this.displayedRecords = this.allRecords.slice(startIndex, endIndex);
    
  }
}
