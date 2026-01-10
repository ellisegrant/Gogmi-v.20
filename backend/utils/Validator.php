<?php
class Validator {
    
    public static function email($email) {
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
    
    public static function required($value) {
        return !empty(trim($value));
    }
    
    public static function minLength($value, $length) {
        return strlen(trim($value)) >= $length;
    }
    
    public static function maxLength($value, $length) {
        return strlen(trim($value)) <= $length;
    }
    
    public static function phone($phone) {
        // Basic phone validation
        return preg_match('/^[0-9+\s\-()]+$/', $phone) && strlen($phone) >= 10;
    }
    
    public static function validateRegistration($data) {
        $errors = [];
        
        if (!self::required($data['fullName'] ?? '')) {
            $errors['fullName'] = 'Full name is required';
        }
        
        if (!self::email($data['email'] ?? '')) {
            $errors['email'] = 'Valid email is required';
        }
        
        if (!self::minLength($data['password'] ?? '', 6)) {
            $errors['password'] = 'Password must be at least 6 characters';
        }
        
        if (!self::phone($data['phone'] ?? '')) {
            $errors['phone'] = 'Valid phone number is required';
        }
        
        if (!self::required($data['country'] ?? '')) {
            $errors['country'] = 'Country is required';
        }
        
        return $errors;
    }
}
?>