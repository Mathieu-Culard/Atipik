<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Repository\AccomodationRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;
use Swift_Mailer;
use Swift_Message;
use Symfony\Component\Security\Core\User\UserInterface;

class SubmitHostMessageController extends AbstractController
{
    /**
     * @Route("/api/accomodation/{id}/contact"), methods={"POST"})
     */
    public function sendMessage(Request $request, \Swift_Mailer $mailer, UserRepository $userRepository, AccomodationRepository $accomodationRepository, UserInterface $user)
    {
        // We retrieve the data from the front end
        $jsonData = json_decode($request->getContent());
        // dd($jsonData); 

        
        $object = $jsonData->object;
        $content = $jsonData->message;
        $accomodationId = $jsonData->id;
        $userId = $jsonData->user;
        //dump($userId); 

        // We recover the user informations
        $userData = $userRepository->find($userId);
        //dump($userData);
       
        // We recover the user email
        $userEmail = $userData->getEmail(); 
        //dump($userEmail); 
       
        // We recover the accomodation information
        $accomodation = $accomodationRepository->find($accomodationId);
       // dump($accomodation); 

       // We recover the owner email
        $accomodationEmail = $accomodation->getUser($accomodationId)->getEmail();
       //dd($accomodationEmail);


       // We retrieve all the informations to send an email from a user to a owner
        $message = (new \Swift_Message($object))
            ->setFrom(array($userEmail => $userEmail))
            ->setReplyTo($userEmail)
            ->setTo(array($accomodationEmail => $accomodationEmail))
            ->setBody($content);
            //dd($content);
           // dd($userEmail);
           // dd($accomodationEmail);
            //dd($object);
           
             
            //dd($message);
        // We send the email
        $mailer->send($message);

        return $this->json('',201);
    }
    
}
