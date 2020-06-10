<?php

namespace App\Services;



class ResetPassword {

    /**
     * @return string A random password
    */
    public function newPassword() {

    // We choose a new name for the file
    $newPassword = preg_replace('/[+=\/]/', random_int(0, 9), base64_encode(random_bytes(6)));
    // Return the name with an extension
    return $newPassword;

    }



}