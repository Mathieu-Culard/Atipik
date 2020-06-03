<?php

namespace App\Controller;

use App\Entity\User;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route("/api", name="authentified_user_")
 */
class AuthentifiedUserController extends AbstractController
{
    /**
     * @Route("/account", name="display_account", methods={"GET"} )
     */
    public function displayAccount(UserInterface $user, SerializerInterface $serializer)
    {
        // We create a new object from the received JSON
        $userData = $serializer->normalize($user, 'json', ['groups' => 'authentified_user_account']);

        // We create a variable that will be used to store each of the accommodations.
        $houses = [];

        // We loop on the accomodations property of user
        foreach ($userData['accomodations'] as $accomodation) {

            // We store the ID of each accommodation in the new $houses table
            $houses[] = $accomodation['id'];
        }
        // we store in the "accomodations" property of $ currentData the $ houses data table initialized previously
        $userData['accomodations'] = $houses;

        return $this->json($userData, 200);
    }

    /**
     * @Route("/account/edit", name="edit_account", methods={"POST"})
     */
    public function editAccount(Request $request, UserInterface $user, UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em)
    {
        // We create a new object from the received JSON
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        // If data was transmitted in json
        if (isset($jsonData)) {

            // We store in a variable $newData the data of the user whose id corresponds to that of the connected user.
            $newData = $userRepository->find($user->getId());
            // dd($newData);

            $newData->setFirstname($jsonData->firstname);
            $newData->setLastname($jsonData->lastname);
            $newData->setPseudo($jsonData->pseudo);
            $newData->setAvatar($jsonData->avatar);

            // The password is encrypted before being assigned to the user.
            $clearPassword = $jsonData->password;
            $newData->setPassword($passwordEncoder->encodePassword($user, $clearPassword));

            // We're updating the database
            $em->flush();

            return $this->json('', 200);
        }
    }

    /**
     * @Route("/account/delete", name="delete_account", methods={"DELETE"})
     */
    public function deleteAccount(UserInterface $user, UserRepository $userRepository, EntityManagerInterface $em)
    {
        // We store in a variable $newData the data of the user whose id corresponds to that of the connected user.
        $newData = $userRepository->find($user->getId());
        
        // We delete the user stored in the variable $newData
        $em->remove($newData);
        // We're updating the database
        $em->flush();

        return $this->json('',200);
    }
}
