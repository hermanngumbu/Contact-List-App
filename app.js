let form = document.getElementById('form');
let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let tel = document.getElementById('tel');
let email = document.getElementById("email");
let groupe = document.getElementById('groupe');
let bio = document.getElementById('bio');
let btn = document.getElementById('create');

let contacts = []


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let bcreate = document.getElementById("create").textContent
    if(bcreate === "Créer"){
      formValidation();
      console.log(bcreate); 
    }
    else{

      console.log(bcreate);
    }
     
    
});

// check tel unique
let checkTelUnique = (tel) => {
  return contacts.find(c => c.tel === tel)
}

let formValidation = () => {
  if (checkTelUnique(tel.value)) {
    msg.innerHTML = 'Tel deja utilise'
    return
  }

    if (prenom.value === "" || nom.value === "" || tel.value === "") {
      msg.innerHTML = "Le champ nom, prenom et téléphone ne peuvent pas etre vide.";
    } else {
      msg.innerHTML = "";
      acceptData();
    } 
  };

  let data = {};

  let acceptData = () => {
    data["prenom"] = prenom.value;
    data["nom"] = nom.value;
    data["tel"] = tel.value;
    data["email"] = email.value;
    data["groupe"] = groupe.value;
    data["bio"] = bio.value;
    createPost();
  };

  function displayContacts () {
    let contentContacts = ''

    fo
  }

  let createPost = (data) => {
    contacts.push(data)

    posts.innerHTML += `
    <div class="separate">
    <div class="para">
      <p>
       <span id="editprenom">${data.prenom}</span> 
       <span id="editnom">${data.nom}</span> 
       <span id="editgroupe">${data.groupe}</span> 
      </p>
      <p>
         <span id="edittel">${data.tel}</span> 
        <span id="editemail">${data.email}</span> 
        </p>
      <p id="editbio">${data.bio}</p>
    </div> 

    <div class="icon">
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit fa-xs" id=""></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt fa-xs"></i>
      </span>
    </div>
  </div>
    `;
  form.reset();
};

let deletePost = (e) => {
    e.parentElement.parentElement.parentElement.remove();
  };
  
  let editPost = (e) => {

    document.getElementById("prenom").value = document.getElementById("editprenom").innerHTML;
    document.getElementById("nom").value = document.getElementById("editnom").innerHTML;
    document.getElementById("tel").value = document.getElementById("edittel").innerHTML;
    document.getElementById("email").value = document.getElementById("editemail").innerHTML;
    document.getElementById("groupe").value = document.getElementById("editgroupe").innerHTML;
    document.getElementById("bio").value = document.getElementById("editbio").innerHTML;

    let b = btn.textContent="Modifier";
    console.log(b);
   
  };

  
//  let editPost = (e) => {
//     document.getElementById("prenom").value = document.getElementById('editprenom').contentEditables;
//   } ;

//   create.addEventListener("click", function() {
//     editprenom.contentEditable = false;
    
  // } )

  // Sauvegarder le data dans un tableau *datas*

  // creer une fonction qui affiche la liste de contact du tableau