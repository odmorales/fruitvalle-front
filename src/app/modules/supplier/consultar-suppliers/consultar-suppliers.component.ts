import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Supplier } from '../../classes/supplier';
import { SupplierService } from '../services/supplier.service';

export interface PeriodicElement {
  nombre: string;
  direccion: string;
  telefono: string;
  email: string;
}

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-consultar-suppliers',
  templateUrl: './consultar-suppliers.component.html',
  styleUrls: ['./consultar-suppliers.component.css'],
  standalone: true,
  imports: [MatTableModule]
})

export class ConsultarSupplier implements OnInit{
  displayedColumns: string[] = ['nombre', 'direccion', 'telefono', 'email'];
  dataSource: Supplier[] = [];

  constructor(private suplierService: SupplierService) { }

  ngOnInit(): void {
    this.suplierService.get().subscribe((supplier: Supplier[]) => {
      // this.dataSource = supplier;
    });
  }

}
