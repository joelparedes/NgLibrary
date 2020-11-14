import { Component, OnInit } from '@angular/core';
import { LibroInterface } from './../../models/libro';
import { NgForm } from '@angular/forms';
import { DataServiceService } from './../../services/data-service.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit() {
  }

  onSaveLibro(libroForm: NgForm): void{
    console.log('LIBRO NUEVO: ', libroForm.value);
    this.dataService.addLibro(libroForm.value);
  }

}
