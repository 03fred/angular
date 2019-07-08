import { Injectable } from '@angular/core';

@Injectable()
export class CursoService{


getCursos(){

    return ['angular2','java','phonegab'];
}

}