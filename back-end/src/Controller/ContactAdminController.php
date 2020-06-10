<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Swift_Mailer;
use Swift_Message;
use Swift_Encoding; 
use Swift_Mime_ContentEncoder_PlainContentEncoder; 


class ContactAdminController extends AbstractController
{
    
/**
 * @Route("/contact", name="contact", methods={"POST"})
 */
    public function contact(Request $request, \Swift_Mailer $mailer)
    {
        // We retrieve the data from the user
        $jsonData = json_decode($request->getContent());
        // dd($jsonData);

        
        $object = $jsonData->object;
        $email = $jsonData->email;
        //dd($object);
        //dd($email);
        $content = $jsonData->message;
        // dd($content);
   
     
        // We create a new message to send to the admin 
        $message = (new \Swift_Message($object))
        // The message is sent from the user email
        ->setFrom(array($email => $email))
        ->setReplyTo($email)
        // To the admin email
        ->setTo("contact.atypik.site@gmail.com")
        // We set the content of the message send by the user
        ->setBody($content);
        
        // The email is sent to the admin 
        $mailer->send($message);

        // We create a new message to send a reply to the user
        $confirmMessage = (new \Swift_Message("Réponse à votre demande d'information"))
        // The email is send from the admin email
        ->setFrom(["contact.atypik.site@gmail.com" => "Admin Atipik"])
        // To the user email
        ->setTo(array($email => $email))
        // We set the content of the message in a template
         ->setBody( $this->renderView(
             'emails/confirmMessage.html.twig'
         ),
  
        );
        
        //We send the confirm message with swiftmailer
        //which contains differents informations
        $mailer->send($confirmMessage);
        //We send to the view, the template that contains the message
        return $this->render('emails/confirmMessage.html.twig');
    }

}

