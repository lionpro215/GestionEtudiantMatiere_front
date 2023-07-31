import { Component, OnInit } from '@angular/core';
import { RestapiService } from './restapi.service';
import { MatDialog } from '@angular/material/dialog'
import { AddSubjectComponent } from './add-subject/add-subject.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getSubjet()
  }
  title = 'GestionEtudiantMatiere_front';

  subject:any;
  constructor (private service:RestapiService, private dialog: MatDialog){}
  // constructor(private dialog: MatDialog) {}


//   subjects = [
//     {
//         "id_subject": 1,
//         "subjectName": "java",
//         "coef": 5,
//         "subject_users": []
//     },
//     {
//         "id_subject": 4,
//         "subjectName": "progWeb java EE",
//         "coef": 7,
//         "subject_users": []
//     },
//     {
//         "id_subject": 5,
//         "subjectName": "progWeb java EE",
//         "coef": 6,
//         "subject_users": []
//     },
//     {
//         "id_subject": 6,
//         "subjectName": "reseau et system d'exploitation",
//         "coef": 6,
//         "subject_users": []
//     },
//     {
//         "id_subject": 7,
//         "subjectName": "progWeb java EE",
//         "coef": 6,
//         "subject_users": []
//     },
// ]


public subjects:any[] = []

  getSubjet(){
     this.service.getSubjects().toPromise().then((resp=>{
      this.subjects=resp;
      console.log("subject: " ,resp);
    })).catch(erreur=>{
      console.log(erreur)
     });
    // resp.subscribe((data: any)=>this.subject=data);
  }

  createSubject(): void {
    const dialogRef = this.dialog.open(AddSubjectComponent, {
      width: '300px',
      data: {
        task: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: AddSubjectComponent|undefined) => {
        if (!result) {
          return;
        }
        // this.todo.push(result.task);
        // this.store.collection('todo').add(result.task)
        // setDoc(doc(collection(this.store,'todo')), result.task);
        // addDoc((collection(this.store,'todo')), result.task);
        // this.store.collection('todo').add(result.task)
        alert('la tache a ete ajouter')
      });
  }
  // subjects = this.getSubjet

  // showSubjet(){
  //   console.log(this.subjects)
  //   alert(this.subjects)
  // }

}


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

