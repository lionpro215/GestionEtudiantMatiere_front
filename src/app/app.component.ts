import { Component, OnInit } from '@angular/core';
import { RestapiService } from './restapi.service';
import { MatDialog } from '@angular/material/dialog'
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from './add-subject/subject';
import { User } from './add-user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.getSubjets();
    this.getUsers();
    this.initForm();
    // this.showform();
  }
  title = 'GestionEtudiantMatiere_front';

  // public subject: Subject = null;

  constructor(private service: RestapiService, private fb: FormBuilder, private dialog: MatDialog) { }

  public subjects: any[] = []
  subject: any;
  public users: any[] = []
  user: any;

  public isSuject: boolean = false
  public isSujectUpdate: boolean = false
  public isSubjectList: boolean = false
  public isUser: boolean = false
  public isUserUpdate: boolean = false
  public isUserList: boolean = false
  public isShowText: boolean = true

  public mode: String = ""

  public form: FormGroup = this.fb.group({
    id_subject: [null],
    subjectName: ["", Validators.required],
    coef: [""],
  });

  public formUser: FormGroup = this.fb.group({
    id_user: [null],
    name: ["", Validators.required],
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
  });

  get f() {
    return this.form.controls;
  }


  public idSubject: string = "";
  public nameSubject: string = "";
  public coefSubject: string = "";

  public idUser: string = "";
  public nameUser: string = "";
  public usernameUser: string = "";
  public emailUser: string = "";
  public passwodUser: string = "";

  public formUpdate: FormGroup = this.fb.group({
    id_subject: this.idSubject,
    subjectName: this.nameSubject,
    coef: this.coefSubject,
  });
  public formUpdateUser: FormGroup = this.fb.group({
    id_user: this.idUser,
    name: this.nameUser,
    username: this.usernameUser,
    email: this.emailUser,
    password: this.passwodUser,
  });

  public initForm(): void {

    this.form = this.fb.group({
      id_subject: [null],
      subjectName: ["", Validators.required],
      coef: [""],
    })

    // if (this.mode === "CREATE") {
    //   this.form = this.fb.group({
    //     id_subject: [null],
    //     subjectName: ["", Validators.required],
    //     coef: [""],
    //   })
    // };
    if (this.mode === "UPDATE") {
      this.formUpdate.patchValue({
        id_subject: this.idSubject,
        subjectName: this.nameSubject,
        coef: this.coefSubject,
      });
    }
  }

  // ***************RECUPERATION DES MATIERES DEPUIS LE BACKEND_1***************
  // getSubjet(){
  //    this.service.getSubjects().toPromise().then((resp=>{
  //     this.subjects=resp;
  //     console.log("subject: " ,resp);
  //   })).catch(erreur=>{
  //     console.log(erreur)
  //    });
  //   // resp.subscribe((data: any)=>this.subject=data);
  // }

  // ***************AFFICHAGE DU FORMULAIRE DE CREATION D'UNE MATIERE***************
  public showform() {
    this.isSuject = true
    this.isSujectUpdate = false
    this.isUserList = false
    this.isUser = false
    this.isUserUpdate = false
    this.isSubjectList = true
    this.isShowText = false
    this.mode = "CREATE"

    this.form = this.fb.group({
      id_subject: [null],
      subjectName: ["", Validators.required],
      coef: [""],
    })
  }
  // ***************FERMETURE DU FORMULAIRE DE CREATION D'UNE MATIERE***************
  public closeform() {
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserList = false
    this.isUser = false
    this.isUserUpdate = false
    this.isSubjectList = true
    this.isShowText = false
  }
  // ***************AFFICHAGE DU FORMULAIRE DE CREATION D'UN ETUDIANT***************
  public showformUser() {
    this.isUser = true
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserList = true
    this.isUserUpdate = false
    this.isSubjectList = false
    this.isShowText = false
    this.mode = "CREATE"

    this.formUser = this.fb.group({
      id_user: [null],
      name: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }
  // ***************FERMETURE DU FORMULAIRE DE CREATION D'UN ETUDIANT***************
  public closeformUser() {
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserList = true
    this.isUserUpdate = false
    this.isSubjectList = false
    this.isShowText = false
  }

  // ***************AFFICHAGE DU FORMULAIRE DE MODIFICATION D'UNE MATIERE***************
  public showformUpdate(subjectId: string, subjectName: string, coef: string) {
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = true
    this.isUserList = false
    this.isUserUpdate = false
    this.isSubjectList = true
    this.isShowText = false
    // alert("vous avez selectionner la matiere avec pour id: " + subjectId)
    console.log("id : " + subjectId);

    this.idSubject = subjectId;
    this.nameSubject = subjectName;
    this.coefSubject = coef;

    this.mode = "UPDATE"

    this.form = this.fb.group({
      id_subject: [subjectId],
      subjectName: [subjectName, Validators.required],
      coef: [coef],
    });
  }

  // ***************AFFICHAGE DU FORMULAIRE DE MODIFICATION D'UNE MATIERE***************
  public showformUpdateUser(userId: string, username : string, name: string, email:string, password:string) {
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserList = true
    this.isUserUpdate = true
    this.isSubjectList = false
    this.isShowText = false
    // alert("vous avez selectionner la matiere avec pour id: " + subjectId)

    this.idUser =  userId
    console.log(this.idUser)
    this.usernameUser = username
    this.nameUser = name
    this.emailUser = email
    this.passwodUser = password

    this.formUser = this.fb.group({
      id_user: [userId],
      name: [name, Validators.required],
      username: [username, Validators.required],
      email: [email, Validators.required],
      password: [password, Validators.required],
    });
  }

  // ***************RECUPERATION DES MATIERES DEPUIS LE BACKEND_2***************
  public getSubjets(): void {
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserList = false
    this.isUserUpdate = false
    this.isSubjectList = true
    this.isShowText = false
    this.service.getSubjects().subscribe((datasSubject) => {
      this.subjects = datasSubject
    })
  }

  // ***************CREATION D'UNE MATIERE***************
  public createSubject(): void {
    console.log(this.form);
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserUpdate = false
    this.isSubjectList = true
    this.isUserList = false
    this.isShowText = false
    let item: Subject = this.form.value;
    this.getSubjets()
    this.service.getSubjects().subscribe((datasSubject) => {
      this.subjects = datasSubject
    })

    console.log("item = " + item)

    this.service.createSubject(item).subscribe((resp) => {
      console.log("create subject: " + resp)
      alert("Ajout reuissi")
      // this.getSubjets()
      // this.service.getSubjects().subscribe((datasSubject) => {
      //   this.subjects = datasSubject
      // })
      // alert("la matiere ayant avec pour nom: " + item.subjectName + " et pour coeficient: " + item.coef +" et pou Id: " +item.id_subject+ " viens d'etre ajouter avec succes")
    }, (erreur) => {
      console.log(erreur)
    });
    this.getSubjets()
    this.service.getSubjects().subscribe((datasSubject) => {
      this.subjects = datasSubject
    })
  }

  // ***************MODIFICATION D'UNE MATIERE***************
  public updateSubject(subjectId: String, subjectName: string, coef: string): void {
    console.log("update : " + this.formUpdate);
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserUpdate = false
    this.isSubjectList = true
    this.isUserList = false
    this.isShowText = false

    let item: Subject = this.formUpdate.value;

    item.id_subject = subjectId
    // const subject = {
    //   subjectId: subjectId,
    //   subjectName: subjectName,
    //   coef: coef,
    // }
    console.log(item)
    // console.log(subject)

    this.service.updateSubject(item).subscribe((resp) => {
      console.log(resp)
      alert("Modification reuissi")
      // alert("la matiere ayant avec pour nom: " + item.subjectName + " et pour coeficient: " + item.coef + " a ete modifier avec succes")
    }, (erreur) => {
      console.log(erreur)
      // alert("execute error : " + subject)
    });
    this.getSubjets()
    this.service.getSubjects().subscribe((datasSubject) => {
      this.subjects = datasSubject
    })
  }

  // ***************SUPPRESSION D'UNE MATIERE***************
  public deleteSubject(subjectId: String): void {

    this.getSubjets()
    this.service.getSubjects().subscribe((datasSubject) => {
      this.subjects = datasSubject
    })

    this.service.deleteSubject(subjectId).subscribe((resp) => {
      console.log(resp)
      this.getSubjets()
      this.service.getSubjects().subscribe((datasSubject) => {
        alert("Vous avez supprimer la matiere ayant pour id: " + subjectId)
        this.subjects = datasSubject
      })
    }, (erreur) => {
      console.log(erreur)
    });
    this.getSubjets()
    this.service.getSubjects().subscribe((datasSubject) => {
      this.subjects = datasSubject
    })
  }


  // *********************************************************************
  // *****************************USER FUNCTION***************************
  // *********************************************************************




  // ***************RECUPERATION DES ETUDIANTS DEPUIS LE BACKEND_2***************
  public getUsers(): void {
    this.isUserList = true
    this.isUser = false
    this.isUserUpdate = false
    this.isSubjectList = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isShowText = false

    this.service.getUsers().subscribe((dataUsers) => {
      console.log(dataUsers);
      this.users = dataUsers
      console.log("users => ", this.users)

    })
  }

  // ***************CREATION D'UN ETUDIANT***************
  public createUser(): void {
    console.log(this.form);
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserUpdate = false
    this.isSubjectList = false
    this.isUserList = true
    this.isShowText = false

    let item: User = this.formUser.value;
    // this.getUsers()
    // this.service.getUsers().subscribe((dataUsers) => {
    //   console.log(dataUsers);
    //   this.users = dataUsers
    //   console.log("users => ", this.users)
    // })

    console.log("item = " + item)

    this.service.createUser(item).subscribe((resp) => {
      console.log("create user: " + resp)
      alert("Ajout reuissi")
    }, (erreur) => {
      console.log(erreur)
    });
    this.getUsers()
    this.service.getUsers().subscribe((dataUsers) => {
      console.log(dataUsers);
      this.users = dataUsers
      console.log("users => ", this.users)
    })
  }

  // ***************MODIFICATION D'UN ETUDIANT***************
  public updateUser(subjuserId: string): void {
    console.log("update : " + this.formUpdate);
    this.isUser = false
    this.isSuject = false
    this.isSujectUpdate = false
    this.isUserUpdate = false
    this.isSubjectList = false
    this.isUserList = true
    this.isShowText = false
    let item: User = this.formUpdateUser.value;

    item.id_user = subjuserId

    console.log(item)
    // console.log(subject)

    this.service.updateUser(item).subscribe((resp) => {
      console.log(resp)
      // alert("execute : " + subject)
      alert("Modification reuissi")
    }, (erreur) => {
      console.log(erreur)
      // alert("execute error : " + subject)
    });
    this.getUsers()
    this.service.getUsers().subscribe((dataUsers) => {
      console.log(dataUsers);
      this.users = dataUsers
      console.log("users => ", this.users)
    })
  }

  // ***************SUPPRESSION D'UN ETUDIANT***************
  public deleteUser(userId: string): void {
    this.service.deleteUser(userId).subscribe((resp) => {
      console.log(resp)
      alert("l'etudiant avec pour id: " + userId + " vient d'etre supprimer")
      this.getUsers()
      this.service.getUsers().subscribe((dataUsers) => {
        console.log(dataUsers);
        this.users = dataUsers
        console.log("users => ", this.users)
      })
    }, (erreur) => {
      console.log(erreur)
    });
    this.getUsers()
    this.service.getUsers().subscribe((dataUsers) => {
      console.log(dataUsers);
      this.users = dataUsers
      console.log("users => ", this.users)
    })
  }

}

