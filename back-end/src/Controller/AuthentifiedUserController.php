<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AccountUser\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Encoder\PasswordEncoderInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

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
       // dd($userData);
        // We create a variable that will be used to store each of the accommodations.
        $houses = [];

        // We loop on the accomodations property of user
        foreach ($userData['accomodations'] as $accomodation) {

            // We store the ID of each accommodation in the new $houses table
            $houses[] = $accomodation['id'];
        }
        // we store in the "accomodations" property of $ currentData the $ houses data table initialized previously
        $userData['accomodations'] = $houses;

        //We loop on the roles property of user, in order to convert an array to string
        foreach ($userData['roles'] as $role) {
            // We retrive the user's role
            $roleUser = $role;
            //dd($roleUser);
        }
        //we add to our array, $roleUser which is a string now
        $userData['roles'] = $roleUser;

        return $this->json($userData, 200);
    }

    /**
     * @Route("/account/edit", name="edit_account", methods={"POST"})
     */
    public function editAccount(UserRepository $userRepository, UserInterface $userInterface, Request $request, EntityManagerInterface $em, UserPasswordEncoderInterface $passwordEncoder)
    {
        // The information of the connected user is retrieved from the database.
        $connectedUser = $userRepository->find($userInterface->getId());

        // If an image was transmitted in the request
        if (isset($request->files->all()['avatar'])) {
            // We assign it to our user as an avatar.
            $connectedUser->setAvatar($request->files->all()['avatar']);
        }


        // We create a form with the information of the logged-in user.
        $form = $this->createForm(UserType::class, $connectedUser);

        // The password already present in the database is saved.
        $passwordInDB = $form->get('password')->getData();

        // The form is submitted with the new data received
        $form->submit($request->request->all(), false);
        // The password is saved after submitting the form.
        $newPassword = $form->get('password')->getData();

        // If the form is valid
        if ($form->isValid()) {
            // If the password submitted is different from the one in the database
            if ($passwordInDB !== $newPassword) {
                // we encrypt the new password
                $connectedUser->setPassword($passwordEncoder->encodePassword($connectedUser, $newPassword));
            }

            // If a new avatar has been transmitted
            if (isset($request->files->all()['avatar'])) {
                
                //We store the file in a variable $newAvatar
                $newAvatar = $request->files->all()['avatar'];

                // We retrieve the extension of the transmitted image file
                $extension = $newAvatar->getClientOriginalExtension();

                // We rename the image file so that it follows a standard
                $avatarName = 'User' . $connectedUser->getId() . '.' . $extension;

                // The new file name is saved in the database.
                $connectedUser->setAvatar($avatarName);

                // The image is stored in a special folder and given the new name defined above.
                $newAvatar->move($this->getParameter('avatar_directory'), $avatarName);
            }

            // The database is being updated
            $em->flush();

            return $this->json('', 201);
        }

        return $this->json('', 403);
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

        return $this->json('', 200);
    }
}
