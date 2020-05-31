<?php

namespace App\Controller;

use App\Entity\User;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api", name="authentified_user_")
 */
class AuthentifiedUserController extends AbstractController
{
    /**
     * @Route("/account", name="display_account", requirements={"id": "\d+"}, methods={"GET"} )
     */
    public function displayAccount(UserInterface $user, SerializerInterface $serializer)
    {
        return $this->json($user, 200, [], ['groups' => 'authentified_user_account']);
    }

 
    



}
