import { Component, OnInit } from '@angular/core';
import { Bloc, BlocsService } from '../blocs.service';

@Component({
  selector: 'app-liste-blocs',
  templateUrl: './liste-blocs.component.html',
  styleUrls: ['./liste-blocs.component.css']
})
export class ListeBlocsComponent implements OnInit {
  blocs: Bloc[] = [];
  selectedBloc: Bloc | null = null;
  newBloc: Bloc = {idBloc:0, nomBloc: '', capaciteBloc: 0 }; // Ajoutez cette ligne pour initialiser newBloc

  constructor(private blocService: BlocsService) {}

  ngOnInit(): void {
    this.getAllBlocs();
  }

  getAllBlocs(): void {
    this.blocService.getAllBlocs().subscribe((data) => {
      this.blocs = data;
      console.log(this.blocs)
    });
  }

  addBloc(bloc: Bloc): void {
    this.blocService.addBloc(bloc).subscribe(() => {
      this.getAllBlocs();
      this.newBloc = {idBloc:0, nomBloc: '', capaciteBloc: 0 }; // Réinitialise newBloc après ajout
    });
  }

  updateBloc(bloc: Bloc): void {
    this.blocService.updateBloc(bloc).subscribe(() => {
      this.getAllBlocs();
      this.selectedBloc = null; // Réinitialise selectedBloc après mise à jour
    });
  }

  deleteBloc(id: number): void {
    this.blocService.deleteBloc(id).subscribe(() => {
      this.getAllBlocs();
    });
  }

  selectBloc(bloc: Bloc): void {
    this.selectedBloc = bloc;
  }
}
