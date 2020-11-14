import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  onSaveLibro(libroForm: NgForm): void{
    console.log('libroForm.value.id: ', libroForm.value.id);

    if (libroForm.value.id == null){
      //Si es indefinido o null crear un nuevo libro
      this.dataService.addLibro(libroForm.value);
    } else {
      // De lo contrario actualiza
      this.dataService.updateLibro(libroForm.value);
    }

    libroForm.resetForm();
    this.btnClose.nativeElement.click();

  }


}
