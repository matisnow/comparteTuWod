import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Wod } from '../../app/app.component';

/*
  Generated class for the DataBaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataBaseProvider {
  db : SQLiteObject = null;

  constructor(public sqlite: SQLite) {
    console.log('Hello DataBaseProvider Provider');
    Promise.bind(this);
  }

  toWod(item) {
    let wod = new Wod();
    wod.id = item.id;
    wod.nombre = item.nombre;
    wod.descripcion = item.descripcion;
    wod.fecha = item.fecha;
    wod.imagen = item.imagen;
    wod.tiempo = item.tiempo;
    wod.repeticiones = item.repeticiones;
    return wod;
  }

  public openDb(){
    return this.sqlite.create({
      name: 'dataComparteTuWod.db',
      location: 'default' // el campo location es obligatorio
    }).then((db: SQLiteObject) => {
      this.db = db;
    });
  }

  public createTableWods(){
    return this.db.executeSql('create table if not exists wods( id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, descripcion TEXT, fecha TEXT, imagen TEXT, tiempo TEXT, repeticiones INTEGER )',{});
  }

  public addWod(wod){
    let db = this.db;
    let toWod = this.toWod;
    return new Promise(function(resolve, reject) {
        let sql = 'INSERT INTO wods (nombre, descripcion, fecha, imagen, tiempo, repeticiones) values (?,?,?,?,?,?)';
        db.executeSql(sql,[wod.nombre, wod.descripcion, wod.fecha, wod.imagen, wod.tiempo, wod.repeticiones]).then((res)=>{
          let wod: Wod;
          for(var i = 0; i < res.rows.length; i++){
            wod = toWod(res.rows.item(i));
          }
          resolve(wod);
        },(err)=>{ reject(err) });
    });
  }

  public getWods(){
    let db = this.db;
    let toWod = this.toWod;
    return new Promise(function(resolve, reject) {
        let sql = 'SELECT * FROM wods';
        db.executeSql(sql,[]).then((res)=>{
          let wods: Array<Wod> = [], wod: Wod;
          for(var i = 0; i < res.rows.length; i++){
            wod = toWod(res.rows.item(i));
            wods.push(wod);
          }
          resolve(wods);
        }, (err)=>{ reject(err) });
    });
  }

  public updateWod(wod){
    let db = this.db;
    let toWod = this.toWod;
    return new Promise(function(resolve, reject) {
        let sql = 'UPDATE wods  SET nombre = ?, descripcion = ?, fecha = ?, imagen = ?, tiempo = ?, repeticiones = ? WHERE id = ? ';
        db.executeSql(sql,[wod.nombre, wod.descripcion, wod.fecha, wod.imagen, wod.tiempo, wod.repeticiones, wod.id]).then((res)=>{
          let wod: Wod;
          for(var i = 0; i < res.rows.length; i++){
            wod = toWod(res.rows.item(i));
          }
          resolve(wod);
        },(err)=>{ reject(err) });
    });
  }

  public deleleteWod(id){
    let sql = 'DELETE FROM wods WHERE id= ?';
    return this.db.executeSql(sql,[id]);
  }

}
