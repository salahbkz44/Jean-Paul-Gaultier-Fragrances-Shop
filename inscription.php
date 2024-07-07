<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $conn = new mysqli("localhost", "root", "","base_client");
        $nom=$_POST['nom'];
        $prenom=$_POST['prenom'];
        $age=$_POST['age'];
        $wilaya=$_POST['wilaya'];
        $tel=$_POST['tel'];
        $email=$_POST['email'];
        $adr=$_POST['adr'];
        $password=$_POST['password'];
        $sexe=$_POST['sexe'];
        
        $resultat = $conn->query("INSERT INTO `client`(`no_clt`, `pno_clt`, `age_clt`, `wi_clt`, `tel_clt`, `mail_clt`, `adr_clt`, `mot_clt`, `sexe_clt`) 
        VALUES ('$nom', '$prenom', '$age', '$wilaya', '$tel', '$email', '$adr', '$password', '$sexe')");
        echo "Inscription réussie";
        mysqli_close( $conn );
    ?>
</body>
</html>