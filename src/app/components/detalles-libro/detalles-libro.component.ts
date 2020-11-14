import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../services/data-service.service';
import { LibroInterface } from './../../models/libro';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalles-libro',
  templateUrl: './detalles-libro.component.html',
  styleUrls: ['./detalles-libro.component.css']
})
export class DetallesLibroComponent implements OnInit {

  constructor(private dataService: DataServiceService, private route: ActivatedRoute) { }

  public libro: LibroInterface = {}; //Declarado como objeto vacio

  ngOnInit() {

    /* VERSION 1
    //const idLibro = 'LgBW15ywPcSbQzu5mZ5P'; ESTO SI ME DIO BREGA JODER //VERSION 0
    const idLibro = this.route.snapshot.params['id'];
    this.dataService.getOneLibro(idLibro).subscribe( libro => {
      console.log('EL LIBRO', libro);
    })
    */
    const idLibro = this.route.snapshot.params['id'];
    this.getDetalleLibro(idLibro);
    
  }

  getDetalleLibro(idLibro: string): void {
    this.dataService.getOneLibro(idLibro).subscribe(libro => {
      console.log('EL LIBRO', libro);
      this.libro = libro;
    });
  }

}
