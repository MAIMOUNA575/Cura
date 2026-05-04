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
        nom: 'kouakou campbell',
        email: 'kouakoucampbell@gmail.com',
        password: '123456890',
    }
];

document.querySelector('.sza')?.addEventListener('click', function(e) {
    e.preventDefault();

    const emailSaisi = document.querySelector('.shiv').value.trim();    
    const passwordSaisi = document.querySelector('.shi').value.trim();  
    const erreur = document.querySelector('.erreur');

    if (!emailSaisi || !passwordSaisi) {
        erreur.textContent = "Veuillez remplir tous les champs";
        erreur.style.color = "red";
        return;
    }

    const utilisateurTrouver = utilidefauld.find((user) => user.email === emailSaisi);

    if (utilisateurTrouver) {
        if (utilisateurTrouver.password === passwordSaisi) {
            window.location.href = './index/index2.html'; 
        } else {
            erreur.textContent = "Mot de passe incorrect";
            erreur.style.color = "red";
        }
    } else {
        erreur.textContent = "L'email n'existe pas";
        erreur.style.color = "red";
    }
});