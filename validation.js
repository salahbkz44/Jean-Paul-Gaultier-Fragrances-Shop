function validation_Commande() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let couleur = form.querySelector('input[name="couleur"]:checked');
    let quantité = form.querySelector('input[type="number"]').value;
    let color = form.querySelector('input[name="couleur"]:checked').value;
    if (!couleur) {
      alert("Please select a color.");
    } else {
      if (quantité <= 0) {
        alert("Please enter a valid quantity.");
      } else {
        if (
          confirm("confirmer la commande de " + quantité + " " + color + " ?")
        ) {
          alert("ordre confirmer");
        }
      }
    }
  });
}
function validations_infos() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let nom = document.querySelector('input[name="nom"]').value;
    let prenom = document.querySelector('input[name="prenom"]').value;
    let age = document.querySelector('input[name="age"]').value;
    let wilaya = document.querySelector('select[name="wilaya"]').value;
    let telephone = document.querySelector('input[name="telephone"]').value;
    let email = document.querySelector('input[name="email"]').value;
    let adresse = document.querySelector("textarea").value;
    let password = document.querySelector('input[name="password"]').value;
    let confirmPassword = document.querySelector(
      'input[name="confirmPassword"]'
    ).value;
    let sexe = document.querySelector('input[name="sexe"]').value;
    if (age <= 17 && age >= 100) {
      alert("vous devez avoir entre 17 et 100 ans");
    }
    if (nom === "") {
      form.querySelector('input[name="nom"]').style.border = "1px solid red";
      form.querySelector('td[id="nom_val"]').innerHTML = "Nom obligatoire!";
    } else if (telephone.length !== 10 && telephone.length !== 9) {
      alert("le numéro de téléphone doit contenir 10 ou 9 chiffres");
    } else if (prenom === "") {
      form.querySelector('input[name="nom"]').style.border = "none";
      form.querySelector('td[id="nom_val"]').innerHTML = "";
      form.querySelector('input[name="prenom"]').style.border = "1px solid red";
      form.querySelector('td[id="prenom_val"]').innerHTML =
        "Prénom obligatoire!";
    } else if (email === "") {
      form.querySelector('input[name="prenom"]').style.border = "none";
      form.querySelector('td[id="prenom_val"]').innerHTML = "";
      form.querySelector('input[name="email"]').style.border = "1px solid red";
      form.querySelector('td[id="email_val"]').innerHTML = "Email obligatoire!";
    } else if (adresse === "") {
      form.querySelector('input[name="email"]').style.border = "none";
      form.querySelector('td[id="email_val"]').innerHTML = "";
      form.querySelector("textarea").style.border = "1px solid red";
      form.querySelector('td[id="adresse_val"]').innerHTML =
        "Adresse obligatoire!";
    } else if (password.length <= 8) {
      form.querySelector("textarea").style.border = "none";
      form.querySelector('td[id="adresse_val"]').innerHTML = "";
      form.querySelector('input[name="password"]').style.border =
        "1px solid red";
      form.querySelector('td[id="password_val"]').innerHTML =
        "Le mot de passe doit contenir au moins 8 caractères!";
    } else if (password !== confirmPassword) {
      form.querySelector('input[name="password"]').style.border = "none";
      form.querySelector('td[id="password_val"]').innerHTML = "";
      form.querySelector('input[name="confirmPassword"]').style.border =
        "1px solid red";
      form.querySelector('td[id="confirmPassword_val"]').innerHTML =
        "Les mots de passe ne correspondent pas!";
    } else {
      form.querySelector('input[name="confirmPassword"]').style.border = "none";
      form.querySelector('td[id="confirmPassword_val"]').innerHTML = "";
      if (confirm("Sexe: " + sexe + "\nWilaya: " + wilaya)) {
        alert("Bienvenue " + nom + " " + prenom);
      }
      alert(confirm("Sexe: " + sexe + "\nWilaya: " + wilaya));
    }
  });
}
function validation_login() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let email = document.querySelector('input[type="email"]').value;
    let mdp = document.querySelector('input[type="password"]').value;
    if (email == "admin@gmail.com" && mdp == "admin") {
      alert("Bienvenue admin");
    } else {
      if (email === "") {
        form.querySelector('input[name="email"]').style.border =
          "1px solid red";
        form.querySelector('td[id="val_email"]').innerHTML =
          "Email obligatoire!";
      } else {
        if (mdp === "") {
          form.querySelector('input[name="email"]').style.border = "none";
          form.querySelector('td[id="val_email"]').innerHTML = "";
          form.querySelector('input[name="password"]').style.border =
            "1px solid red";
          form.querySelector('td[id="val_password"]').innerHTML =
            "Entrez votre mot de passe!";
        } else {
          form.querySelector('input[name="password"]').style.border = "none";
          form.querySelector('td[id="val_password"]').innerHTML = "";
          form.querySelector('input[name="password"]').style.border =
            "1px solid red";
          form.querySelector('td[id="val_password"]').innerHTML =
            "mot de passe incorect!";
        }
      }
    }
  });
}
