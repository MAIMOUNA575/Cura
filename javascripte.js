// let sza = document.querySelector('.sza')
// let shi = document.querySelector('.shi')
// let shiv = document.querySelector('.shiv')
// sza.addEventListener('click', (e)=>{
//     e.preventDefault();
//     shivalue=shi.value
//     shivvalue=shiv.value
//     window.location='./index/index2.html'
// })


const utilidefauld = [
    {
        nom:'kouakou cambpell',
        email:'kouakoucampbell@.gmail',
        password:'123456890',
    }
]
document.querySelector('.sza')?.addEventListener('click',function(e){
    e.preventDefault();
   const emailSaisi = document.querySelector('.shi').value.trim();
   const passwordSaisi = document.querySelector('.shiv').value.trim();
   const erreur =document.querySelector('.erreur');

   if(!emailSaisi || !passwordSaisi){
    erreur.textContent="veuillez remplir le champs";
    erreur.style.color = "red";
        return; // On arrête l'exécution ici
   }
   const utilisateurTrouver = utilidefauld.find((user)=>user.email===emailSaisi); 
   if(utilisateurTrouver){
    if(passwordutitilisateur.password===passwordSaisi){
        window.location.href='./index2.html'
    }
   }
})
