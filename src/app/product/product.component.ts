import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CategoryService } from '../services/category.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  categoriesdata: any;
  categorymodel={
    id:0,
    name:""
  };
  ProductNameModel;
  productId:Number=0;
  productData;

  currentProduct = null;
  currentIndex = -1;
  title = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private router: Router, private categoryService: CategoryService,private productService:ProductService) { }

  
  ngOnInit() {


    this.categoryService.getAllCategory().subscribe(
      res => {
        console.log("res "+ JSON.stringify(res) );
        this.categoriesdata = res;
      }
    )

    this.retrieveProduct();
  }

  getRequestParams( page, pageSize): any {

    let params = {};
    
    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveProduct(): void {
    const params = this.getRequestParams(this.page, this.pageSize);

    this.productService.getAllproduct(params)
      .subscribe(
        response => {
          const { products, totalItems } = response;
          this.productData = products;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  handlePageChange(event): void {
    this.page = event;
    this.retrieveProduct();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveProduct();
  }

  deleteProduct(id) {
    console.log("delete category id = "+ id);
    this.productService.deleteProduct(id).subscribe(
      res => {
        console.log(res)
        this.retrieveProduct();
      }
    )
  }

  createProduct(){
    console.log("category id"+ JSON.stringify(this.categorymodel));
    console.log("ProductNameModel"+ this.ProductNameModel);
  //  console.log("category name"+this.category);
  let data ={
    "productId":this.productId,
    "productName":this.ProductNameModel,
    "categoryId":this.categorymodel.id,
    "categoryName": this.categorymodel.name
  }
    
  this.productService.createProduct(data).subscribe(
    res => {
      console.log("res "+ JSON.stringify(res));
      this.retrieveProduct();
    }
  )
  }

  editProduct(data) {
    console.log("edit product"+ JSON.stringify(data));
    this.productId = data.id;
    this.ProductNameModel = data.productName;
    
  }

  addproduct(){
    this.productId =0;
    this.ProductNameModel ="";
  }
 

}
