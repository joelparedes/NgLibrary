import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../../services/data-service.service';
import { LibroInterface } from './../../../models/libro';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-listado-libros',
  templateUrl: './listado-libros.component.html',
  styleUrls: ['./listado-libros.component.css']
})
export class ListadoLibrosComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }  

  private libros: LibroInterface[]; // si lo pongo '= {}' da error de propiedades en comun
                                    //Debe de ser un array. Ahi se almacenara la info de la BD

  public buscartitulo: string = '';
  // filterTitulo = '';

  ngOnInit() {
    this.getListLibros();
  }

  getListLibros() {
    this.dataService.getAllLibros().subscribe(libros  => {
      //console.log('LOS LIBROS', libros);
      this.libros = libros;
    });
  }

  onDeleteLibro(idLibro: string) {
    //console.log('ID DELETE', idLibro);
    const confirmacionDelete = confirm('¿Seguro que desea eliminar este libro?');
    if (confirmacionDelete) {
      this.dataService.deleteLibro(idLibro);
    }
  }

  onPreUpdate(libroUpdate: LibroInterface){
    console.log('UPDATE: ', libroUpdate);
    this.dataService.SelectedLibro = Object.assign({}, libroUpdate);
  }

  Search(buscarTitulo: string){
    //debugger;
    this.buscartitulo = buscarTitulo;
    if(this.buscartitulo != ""){
      this.libros = this.libros.filter(res => {
        return res.titulo.toLocaleLowerCase().match(this.buscartitulo.toLocaleLowerCase());
      });
    } else if (this.buscartitulo == ""){
      this.ngOnInit();
    }
  }
}
