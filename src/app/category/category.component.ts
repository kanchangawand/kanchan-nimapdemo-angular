import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CategoryService } from '../services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories: any;
  categoryName:string;
  categoryModel :any;
  submitted:boolean = false;
  closemodeldata:string;
  invalidCategory:boolean =false;
  
  constructor(private router: Router, private categoryService: CategoryService) { }


  ngOnInit() {
    this.categoryService.getAllCategory().subscribe(
      res => {
        console.log("res "+ JSON.stringify(res) );
        this.categories = res;
      }
    )
  
  }

  submitCategory(){
    console.log("categoryName" + this.categoryName)
    this.invalidCategory = false;
    let data ={
      "categoryName":this.categoryName
    }
     if(this.categoryName != undefined && this.categoryName != "") {
      this.categoryService.createCategory(data).subscribe(
        res => {
          console.log("res "+ JSON.stringify(res))
          this.closemodeldata = "modal";
          console.log(this.closemodeldata)
          this.categoryService.getAllCategory().subscribe(
            res => {
              console.log("res "+ JSON.stringify(res) );
              this.categories = res;
            }
          )

        }
      )
     }
     else {
      this.invalidCategory = true;
     }
   

  }

  deleteProduct(id) {
    console.log("delete category id = "+ id);
    this.categoryService.deleteCategory(id).subscribe(
      res => {
        console.log(res)
        this.categoryService.getAllCategory().subscribe(
          res => {
            console.log("res "+ JSON.stringify(res) );
            this.categories = res;
          })
      }
    )

  }

  editProduct(category) {
    console.log("edit category id = "+ JSON.stringify(category));
    this.categoryName = category.categoryName;

  }

}



