<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    session_start();//reprendre une session existant
    $cnx = mysqli_connect("localhost","root","","base_client");
    if(isset($_SESSION['id'])){

        $id=$_SESSION['id'];
        $size=$_POST['size'];
        $prix=$_POST['price'];
        $nom=$_POST['nom'];
        $qte=$_POST['qte'];
        $resultat = $cnx->query("INSERT INTO `commande_produit`(`id_clt`, `nom_prd`, `size_prd`, `qte_prd`, `prix_prd`) VALUES ('$id','$nom','$size',$qte,'$prix')");
        echo"commande reussie";
    }else{
        echo("veuillez vous authentifiez");
        echo("<a href'login.html'>login</a>");
    }

    ?>
</body>
</html>