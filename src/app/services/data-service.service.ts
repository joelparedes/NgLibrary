import { LibroInterface } from './../models/libro';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private afs: AngularFirestore) {
    this.librosCollection = afs.collection<LibroInterface>('libros');
    this.libros = this.librosCollection.valueChanges();
   }
  private librosCollection: AngularFirestoreCollection<LibroInterface>;
  private libros: Observable<LibroInterface[]>;
  private libroDoc: AngularFirestoreDocument<LibroInterface>;
  private libro: Observable<LibroInterface>;

  //Para el modal
  public SelectedLibro: LibroInterface = {};

  //Metodo para retonar todos los libros disponibles
  getAllLibros(){
    return this.libros = this.librosCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as LibroInterface;
        data.$id = action.payload.doc.id;
        return data;
      });
    }));
  }

  //Para retornar un solo libro a la vista de detalle
  getOneLibro(idLibro: string) {
    this.libroDoc = this.afs.doc<LibroInterface>(`libros/${idLibro}`); //El nombre de la coleccion (la que esta en firebase) mas el parametro a pasar *ID*
    return this.libro = this.libroDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as LibroInterface;
        data.$id = action.payload.id;
        return data;
      }
    }));
  }

  //metodo para Agregar libro
  addLibro(libro: LibroInterface): void{
    this.librosCollection.add(libro);
  }

  //metodo para actualizar libro
  updateLibro(libro: LibroInterface): void{
    let idLibro = libro.$id;
    this.libroDoc = this.afs.doc<LibroInterface>(`libros/${idLibro}`);
    this.libroDoc.update(libro);
  }

  //metodo para eliminar libro
  deleteLibro(idLibro: string): void{
    this.libroDoc = this.afs.doc<LibroInterface>(`libros/${idLibro}`);
    this.libroDoc.delete();
  }


}
