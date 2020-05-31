<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class AuthenticationController extends AbstractController
{
    /**
     * @Route("/register", name="register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em)
    {
        // We create a new object from the received JSON
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        // we create a new object User
        $user = new User();

        // If all requested fields are filled in
        if ((isset($jsonData->email)) && (isset($jsonData->password)) && (isset($jsonData->firstname)) && (isset($jsonData->lastname)) && (isset($jsonData->pseudo))) {
            // Each of the properties is assigned the corresponding received data
            $user->setEmail($jsonData->email);
            $user->setFirstname($jsonData->firstname);
            $user->setLastname($jsonData->lastname);
            $user->setPseudo($jsonData->pseudo);
            $user->setAvatar('avatar.jpg');
            $user->setRoles($user->getRoles());
    
            // The password is encrypted before being assigned to the user.
            $clearPassword = $jsonData->password;
            $user->setPassword($passwordEncoder->encodePassword($user, $clearPassword));

            // Persist and flush to register the new user in the database.
            $em->persist($user);
            $em->flush();

            return $this->json('',201);
            
        } else {
            if (!isset($jsonData->email)) {
                throw $this->createNotFoundException('Merci de saisir votre email');
            } elseif (!isset($jsonData->password)){
                throw $this->createNotFoundException('Merci de saisir votre mot de passe');
            } elseif (!isset($jsonData->lastname)){
                throw $this->createNotFoundException('Merci de saisir votre prénom');
            } elseif (!isset($jsonData->firstname)){
                throw $this->createNotFoundException('Merci de saisir votre nom');
            } elseif (!isset($jsonData->pseudo)){
                throw $this->createNotFoundException('Merci de saisir votre pseudo');
            }  
        }
    }


}
