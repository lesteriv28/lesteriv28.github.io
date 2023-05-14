<?php
header('Content-Type: application/json');

// Replace 'your_password' with the desired password
$correct_password = 'padres123';

if (isset($_POST['password']) && $_POST['password'] === $correct_password) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
?>