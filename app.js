//  #1
// HERE VALIDATION AND GETTING DATA FONCTIONALITY 

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

  



  //  #2
// HERE DROP AND DRAG FONCTIONALITY 


  //selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});

function showFile(){
  let fileType = file.type; //getting selected file type
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array
  if(validExtensions.includes(fileType)){ //if user selected file is an image file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}
