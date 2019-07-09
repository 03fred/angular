import { Injectable , EventEmitter} from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursoService{
emitirCursoCriado = new EventEmitter<string>();


private cursos: string[]  = ['Angular2','Java','Phonegap'];

constructor(private logService: LogService){
    console.log('CursoService')
}

getCursos(){

    this.logService.consoleLog('Obtendo lista de curso');
        return this.cursos;
}

addCurso(curso: string){
    this.logService.consoleLog(`Criando um novo curso ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
}

}