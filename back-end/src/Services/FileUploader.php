<?php

namespace App\Services;

use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{
    /**
     * @param Form $fileFormField The fild's form contenant which contains the received file
     * 
     * @return string|null The new file's name which is stored now
     */
    public function saveFile(Form $fileFormField, string $targetDirectory)
    {
        // We recover the object UploadedFile
        $file = $fileFormField->getData();

        if ($file == null) {
            return null;
        }
        //We get a new name
        $newFileName = $this->createFileName($file->getClientOriginalExtension());

        //We move the file
        $file->move($targetDirectory, $newFileName);

        return $newFileName;
    }

    /**
     * @param string $extension A file's extension
     * 
     * @return string A random file's name with specify extension
     */
    public function createFileName(string $extension)
    {
        // We choose a new name for the file
        $newFileName = preg_replace('/[+=\/]/', random_int(0, 9), base64_encode(random_bytes(6)));
        // Return the name with an extension
        return $newFileName . '.' . $extension;
    }

    
}