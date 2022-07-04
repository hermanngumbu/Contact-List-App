
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; 

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
  // dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  // dragText.textContent = "Drag & Drop to Upload File";
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
      let imgTag = `<img src="${fileURL}" alt="" id="imgDrag">`; //creating an img tag and passing user selected file source inside src attribute
      dropArea.innerHTML = imgTag; //adding that created img tag inside dropArea container
    }
    fileReader.readAsDataURL(file);
  }else{
    alert("This is not an Image File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}





const form = document.getElementById('form');
const btnCreate = document.getElementById('btnSubmit');

let updateId = "";
let verify = false;

btnCreate.addEventListener('click', (e) =>{
     e.preventDefault();
     const createId = 'id' + Date.now().toString();

     const prenom = document.getElementById('prenom').value;
     const nom = document.getElementById('nom').value;
     const tel = document.getElementById('tel').value;
     const email = document.getElementById('email').value;
     const groupe = document.getElementById('groupe').value;
     const bio = document.getElementById('bio').value;
     const profil = document.getElementById('imgDrag').src;

    if (verify) {
    document.querySelector(`#${updateId} .para p .prenom`).innerText = prenom; 
    document.querySelector(`#${updateId} .para p .nom`).innerText = nom; 
    document.querySelector(`#${updateId} .para p .groupe`).innerText = groupe; 
    document.querySelector(`#${updateId} .para p .tel`).innerText = tel;
    document.querySelector(`#${updateId} .para p .email`).innerText = email;  
    console.log(bio);
    document.querySelector(`#${updateId} .para .bio`).innerText = bio; 
    document.querySelector(`#${updateId} .avatar .imgDrag`).src = profil; 
    } else {
      const displayShow = `
      <div class="posts" id='${createId}'>
            
      <div class="avatar">
        <img src="${profil}" alt="" class="imgDrag">
      </div>
      <div class="para">
        <p>
          <span class="prenom">${prenom}</span> 
          <span class="nom">${nom}</span>
          <span class="groupe">${groupe}</span>
        </p>
        <p>
          <span class="tel">${tel}</span>
          <span class="email">${email}</span>
        </p>
        <p class="bio">${bio}</p>
    </div>
  
  <div class="icon">
    <span class="options">
      <i onClick="editPost(this, '${createId}')" class="fas fa-edit fa-xs"></i>
      <i onClick="deletePost(this)" class="fas fa-trash-alt fa-xs"></i>
    </span>
  </div>
  </div>
`;

    const affiche =  document.getElementById('display');
    affiche.innerHTML+=displayShow;
     }

     document.getElementById('btnSubmit').textContent='Créer';
     verify = false;
     updateId = "";
    
     form.reset();
     
})

const deletePost = (e) => {
  e.parentElement.parentElement.parentElement.remove();
};

  const editPost = (e, id) => {
    document.getElementById('prenom').value = e.parentElement.parentElement.previousElementSibling.querySelector('.prenom').innerHTML;
    document.getElementById('nom').value = e.parentElement.parentElement.previousElementSibling.querySelector('.nom').innerHTML;
    document.getElementById('groupe').value = e.parentElement.parentElement.previousElementSibling.querySelector('.groupe').innerHTML;
    document.getElementById('email').value = e.parentElement.parentElement.previousElementSibling.querySelector('.email').innerHTML;
    document.getElementById('bio').value = e.parentElement.parentElement.previousElementSibling.querySelector('.bio').innerHTML;
    document.getElementById('tel').value = e.parentElement.parentElement.previousElementSibling.querySelector('.tel').innerHTML;
    document.getElementById('imgDrag').src = e.parentElement.parentElement.parentElement.querySelector('.imgDrag').src;

    updateId = id; 
    verify = true;

   document.getElementById('btnSubmit').textContent='Modifier';
    
   
  };

