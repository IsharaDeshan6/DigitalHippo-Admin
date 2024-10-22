import {Component, OnInit} from '@angular/core';
import {
  CustomerStatusManagerComponent
} from "../customers/inner/customer-status-manager/customer-status-manager.component";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {NewProductComponent} from "./inner-pages/new-product/new-product.component";
import {UpdateProductComponent} from "./inner-pages/update-product/update-product.component";
import {MatTooltip} from "@angular/material/tooltip";
import {ManageProductImagesComponent} from "./inner-pages/manage-product-images/manage-product-images.component";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {debounceTime} from "rxjs";
import {ProductService} from "../../service/product/product.service";
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {ClipboardService} from "../../service/clipboard/clipboard.service";
import {ForexService} from "../../service/forex/forex.service";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CustomerStatusManagerComponent,
    MatIcon,
    MatIconButton,
    MatTooltip,
    ReactiveFormsModule,
    NgForOf,
    CurrencyPipe,
    MatPaginator
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  searchText = '';
  page: any = 0;
  size: any = 10;
  count: any = 0;
  dataList: any = [];
  rate: any = 0;

  searchForm: FormGroup = new FormGroup({
    text: new FormControl('')
  });

  constructor(
    private matDialog: MatDialog,
    private productService: ProductService,
    private clipboardService: ClipboardService,
    private forexService: ForexService
  ) {

  }

  openNewProductForm() {
    let matDialogRef = this.matDialog.open(NewProductComponent, {
      width: '500px',
      disableClose: true
    });

    matDialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.loadAllProducts();
      }
    })
  }

  openUpdateProductForm(product: any) {
    let matDialogRef = this.matDialog.open(UpdateProductComponent, {
      width: '500px',
      disableClose: true,
      data: {product: product}
    });

    matDialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.loadAllProducts();
      }
    })
  }

  openManageProductForm(product: any) {
    let matDialogRef = this.matDialog.open(ManageProductImagesComponent, {
      width: '500px',
      disableClose: true,
      data: product
    });

    matDialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.loadAllProducts();
      }
    })
  }

  ngOnInit(): void {
    this.forexService.exchange('USD', 'LKR').subscribe(data => {
     this.rate =  data?.result?.LKR;
      this.loadAllProducts()
    });
    this.searchForm.valueChanges.pipe(debounceTime(1000)).subscribe(data => {
      this.searchText = data.text;
      this.loadAllProducts();
    })
  }

  deleteConfirm(item: any) {
    if (confirm('Are you sure to delete this product?')) {
      this.productService.delete(item?.propertyId).subscribe(response => {
        this.loadAllProducts();
      }, error => {
        console.log(error?.error?.message);
      });
    }
  }

  getServerData(data: PageEvent) {
    this.page = data?.pageIndex;
    this.size = data?.pageSize;
    this.loadAllProducts();
  }

  copyText(propertyId: any) {
    this.clipboardService.copy(propertyId);
  }

  private loadAllProducts() {
    this.productService.search(this.page, this.size, this.searchText).subscribe(response => {
      console.log(response);
      this.dataList = response.data?.dataList;
      this.count = response.data?.count;

    });

  }
}
