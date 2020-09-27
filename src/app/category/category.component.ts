import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any[];
 
  
  constructor(private router: Router) { }


  ngOnInit() {
  
  
  }

  // deleteCategory(category: any): void {
  //   this.apiService.deleteCategory(category.id)
  //     .subscribe( data => {
  //       this.categories = this.categories.filter(u => u !== category);
  //     })
  // };

  // editCategory(category: any): void {
  //   window.localStorage.removeItem("editCategoryId");
  //   window.localStorage.setItem("editCategoryId", category.id.toString());
  //   this.router.navigate(['edit-editCategory']);
  // };

  // addCategory(): void {
  //   this.router.navigate(['add-addCategory']);
  // };
}



