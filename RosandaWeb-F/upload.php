<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST["nombre"];
    $correo = $_POST["correo"];

    // Carpeta donde se guardarán los CVs
    $carpeta = "cv_subidos/";

    if (!file_exists($carpeta)) {
        mkdir($carpeta, 0777, true);
    }

    $archivo = $_FILES["cv"]["name"];
    $ruta = $carpeta . basename($archivo);

    if (move_uploaded_file($_FILES["cv"]["tmp_name"], $ruta)) {
        echo "CV enviado correctamente";
    } else {
        echo "Error al subir el archivo";
    }
}

?>