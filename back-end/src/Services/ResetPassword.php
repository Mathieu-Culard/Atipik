<?php

namespace App\Services;



class ResetPassword {

    /**
     * @return string A random password
    */
    //In order to choose a new random password
    public function newPassword() {

    // We choose a new name for the password
    $newPassword = preg_replace('/[+=\/]/', random_int(0, 9), base64_encode(random_bytes(6)));
    // Return the new password
    return $newPassword;

    }



}