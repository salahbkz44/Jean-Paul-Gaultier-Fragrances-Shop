<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $conn = mysqli_connect("localhost", "root", "", "base_client");
    $email = $_POST["email"];
    $mdp = $_POST["mdp"];
    $query = "SELECT * FROM client WHERE mail_clt='$email' AND mot_clt='$mdp'";
    $result = mysqli_query($conn, $query);
    $n = mysqli_num_rows($result);
    if ($n != 0) {
        $ligne = mysqli_fetch_assoc($result);
        session_start();//ouvrir la premiere session
        $_SESSION['id']=$ligne['id_clt'] ;
        $_SESSION['nom']=$ligne['no_clt'] ;
        $_SESSION['prenom']=$ligne['pno_clt'];
        
    echo "Connexion réussie";
    }else{
        echo "Connexion échouée ! Vérifiez vos identifiants";
    }
    mysqli_close($conn);
    ?>
</body>
</html>