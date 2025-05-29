<?php
// Nagłówki
header('Content-Type: application/json');

// Pobieranie danych z formularza
$data = json_decode(file_get_contents('php://input'), true);

// Sprawdzanie, czy dane zostały przesłane
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    echo json_encode([
        'success' => false,
        'message' => 'Brakujące dane w formularzu'
    ]);
    exit;
}

// Dane z formularza
$name = filter_var($data['name'], FILTER_SANITIZE_STRING);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = isset($data['phone']) ? filter_var($data['phone'], FILTER_SANITIZE_STRING) : '';
$message = filter_var($data['message'], FILTER_SANITIZE_STRING);

// Walidacja adresu e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Nieprawidłowy adres e-mail'
    ]);
    exit;
}

// Adres odbiorcy
$to = 'geodeta@geo-inwent.pl'; // Rzeczywisty adres e-mail firmy

// Temat wiadomości
$subject = 'Wiadomość ze strony Geo-Inwent od ' . $name;

// Treść wiadomości
$body = "Imię i nazwisko: $name\n";
$body .= "Email: $email\n";
if (!empty($phone)) {
    $body .= "Telefon: $phone\n";
}
$body .= "Wiadomość:\n$message";

// Nagłówki e-mail
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Próba wysłania e-maila
try {
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode([
            'success' => true,
            'message' => 'Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.'
        ]);
    } else {
        throw new Exception('Nie udało się wysłać wiadomości.');
    }
} catch (Exception $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.'
    ]);
}
?> 