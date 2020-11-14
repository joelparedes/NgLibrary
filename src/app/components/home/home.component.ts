import { DataServiceService } from './../../services/data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  public libros = [];
  public Libro = '';

  ngOnInit() {
    this.dataService.getAllLibros().subscribe(libros  => {
      console.log('LIBROS', libros);
      this.libros = libros;
    })
  }

}
