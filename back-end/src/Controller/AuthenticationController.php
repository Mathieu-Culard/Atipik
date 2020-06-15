<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Services\ResetPassword;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\HttpExceptionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Swift_Mailer;
use Swift_Message;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class AuthenticationController extends AbstractController
{

    /**
     * @Route("/register", name="register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em, ValidatorInterface $validator)
    {
        // We create a new object from the received JSON
        $jsonData = json_decode($request->getContent());

        // we create a new object User
        $user = new User();

        // If all requested fields are filled in
        if ((isset($jsonData->email)) && (isset($jsonData->password)) && (isset($jsonData->firstname)) && (isset($jsonData->lastname)) && (isset($jsonData->pseudo))) {
            //dd('ok');
            // Each of the properties is assigned the corresponding received data
            $user->setEmail($jsonData->email);
            $user->setFirstname($jsonData->firstname);
            $user->setLastname($jsonData->lastname);
            $user->setPseudo($jsonData->pseudo);
            $user->setAvatar('avatar.png');
            $user->setRoles($user->getRoles());

            // The password is encrypted before being assigned to the user.
            $clearPassword = $jsonData->password;
            $user->setPassword($passwordEncoder->encodePassword($user, $clearPassword));

            // on stocke dans $errors la methode du validator symfony
            $errors = $validator->validate($user);
            dd($errors);
            // si il y en a au moins une
            if (count($errors) > 0) {
                // on retourne l'erreur en json
                return $this->json($errors, 400);
            }

            // Persist and flush to register the new user in the database.
            $em->persist($user);
            $em->flush();

            return $this->json('', 201);
        }
        return $this->json('Toutes les informations nécéssaires a l\'inscription n\'ont pas été transmises', 400);
    }

    /**
     * @Route("/reset-password", name="reset-password", methods={"POST"})
     */
    public function resetPassword(Request $request, UserRepository $userRepository, ResetPassword $newPassword, \Swift_Mailer $mailer, UserPasswordEncoderInterface $passwordEncoder)
    {

        //We recover json's data
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);
        //We recover json's email
        $email = $jsonData->email;
        //dd($email);

        //We recover the user with his email, thanks to the query request "findByEmail()
        $user = $userRepository->findByEmail($email);
        //dd($user);

        // We create a new password, thanks to the method "newPassword()",
        //which is declared in our service "ResetPassword"
        $passwordReset = $newPassword->newPassword();
        //dd($passwordReset);



        //If we retrieve the user
        if ($user) {
            // We encode the new password
            $user->setPassword($passwordEncoder->encodePassword($user, $passwordReset));
            // We save the new password in the database
            $em = $this->getDoctrine()->getManager();
            $em->persist($user);
            $em->flush();

        
        // We send an email to the user with the new password
        $message = (new \Swift_Message('Réinitialisation de votre mot de passe'))
            ->setFrom(array('contact.atypik.site@gmail.com' => 'AtipiK'))
            ->setTo(array($email => $email))
            ->setBody('Bonjour, <br><br> Voici votre nouveau mot de passe : ' . $passwordReset . '. <br><br> Bonne journée. <br><br>L\'équipe AtipiK', 'text/html');
        

            //dd($message);
            $mailer->send($message);
            //dd($mailer->send($message));

            // If the email is sent, we return a status code "200"
            return $this->json($passwordReset, 200);
        }

        // sinon c'est que l'adresse mail n'existe pas en base de données
        return $this->json('Cet email n\'est pas associé à l\'un de nos compte utilisateur', 400);
    }
}
