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
     * @Route("/api/accomodation/{slugger}/contact"), methods={"POST"})
     */
    public function sendMessage(Request $request, \Swift_Mailer $mailer, UserRepository $userRepository, AccomodationRepository $accomodationRepository, UserInterface $user)
    {
       $jsonData = json_decode($request->getContent());
        // dd($jsonData); 

        $object = $jsonData->object;
        $content = $jsonData->message;
        $accomodationId = $jsonData->id;
        $userId = $jsonData->user;
        //dd($userId); 

        $userData = $userRepository->find($user->getId());
        //dd($userData);
       
        $userEmail = $userData->getEmail(); 
        //dd($userEmail); 
       
        $accomodation = $accomodationRepository->find($accomodationId);
       // dd($accomodation); 
        $accomodationEmail = $accomodation->getUser($accomodationId)->getEmail();
       //dd($accomodationEmail);


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
        // dd($mailer->send($message));
        $mailer->send($message);

        return $this->render('emails/accomodationContact.html.twig');
    }
    
}
