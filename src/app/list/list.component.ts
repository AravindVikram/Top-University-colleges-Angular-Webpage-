import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  Data: any[]=[]
  currentPage = 1; 
  itemsPerPage = 16; 

  filteredData: any[] = [];
  searchKeyword: string = '';

  sortDirection: string = '';
  sortedCountries: any[] = [];
  sortKey: string = '';



  constructor(private http:HttpClient, private apiService:APIService) { }

  ngOnInit(): void {
    this.LoadData()
  }

  LoadData(){
    this.apiService.api().subscribe((data:any)=>{
      this.Data=data;
      this.filteredData = [...this.Data];
    })
  }
  onPageChange(event: any) {
    this.currentPage = event;

  }

  onSearch() {
    if (this.searchKeyword.trim() === '') {
      this.filteredData = [...this.Data];
    } else {
      this.filteredData = this.Data.filter(item =>
        item.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    }
  }
  

  Clear() {
    this.searchKeyword = '';
    this.filteredData = [...this.Data];
  }

  sortTable(key: string) {
    
    if (key === this.sortKey) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortDirection = 'asc';
    }
    
    this.sortKey = key;

    this.sortedCountries = this.Data.sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA < valueB) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (valueA > valueB) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
  


}
