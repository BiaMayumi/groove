<?php
// Start or resume the session
session_start();

// Initialize the counts if they don't exist in the session
if (!isset($_SESSION['favorites'])) {
    $_SESSION['favorites'] = 0;
}

if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = 0;
}

// Simulate adding items to favorites and cart
if (isset($_GET['add_to_favorites'])) {
    $_SESSION['favorites']++;
}

if (isset($_GET['add_to_cart'])) {
    $_SESSION['cart']++;
}
?>
