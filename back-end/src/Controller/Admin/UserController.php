<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\UserDeleteType;
//use App\Form\UserBanish;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
* @Route("/admin/users", name="admin_users_", methods={"GET","POST","DELETE"})
*/
class UserController extends AbstractController
{
    /**
     * @Route ("/", name="browse")
     */
    //Browse Method for listing users
    public function browse(UserRepository $userRepository)
    {
         //We recover the list's users
        $users = $userRepository->findAll();
        //Declare an empty array
        $forms = [];

        //To loop on each user in our variable $users
        foreach ($users as $user) {
            //We declare a variable $formOptions which allow to be
            //redirected on the delete's page (to execute the delete method)
            $formOptions = [
                'action' => $this->generateUrl('admin_users_delete', ['id' => $user->getId() ])
            ]; 

            //We associate to $users, an array which contain, a delete button for each user
            $forms[]= $this->createForm(UserDeleteType::class, $user, $formOptions)->createView();
        }
       
        //We send to the view, the complete user's list
        return $this->render('admin/users/browse.html.twig', [
          'users' => $users,
          'forms' => $forms,   
        ]);
    }

    /**
     * @Route ("/submit/{id}", name="submit", requirements={"id": "\d+"}, methods={"POST"})
     */
    //Method to change the role of a user
    public function submit(UserRepository $userRepository, EntityManagerInterface $em,$id)
    {
        //Recover datas from one user
        $user = $userRepository->find($id);
        //Comparison between roles (switch between both of them)
        // If the user's role is ROLE_USER
        if ($user->getRoles() === ["ROLE_USER"]) {
            // We set it to ROLE_ADMIN
            $user->setRoles(["ROLE_ADMIN"]);
        } else {
          // Else, if the user is an Admin we set it to ROLE_USER
           $user->setRoles(['ROLE_USER']);
        }
        // We update the database
        $em = $this->getDoctrine()->getManager();
        $em->persist($user);
        $em->flush();
        
        // We return to the browse page
        return $this->redirectToRoute('admin_users_browse');
    }


    /**
     * @Route ("/add", name="add", methods={"GET","POST"})
     */
    // Method to add a user
    public function add(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        // We create a new user
        $user = new User(); 
        // We retrieve the form "UserType"
        $form = $this->createForm(UserType::class, $user);
        
        // We retrieve the data
        $form->handleRequest($request); 
        
        // If the form is correctly submitted and valid
        if ($form->isSubmitted() && $form->isValid()){
            //dd('ok');
            // We retrieve the password
            $password = $form->get('password')->getData();
            if (isset($password)) {
                //dd('ok');
                // If the data is not null we encore the password to the database
                $user->setPassword($passwordEncoder->encodePassword($user, $password));
            }
            // We set the user role to ROLE_ADMIN
            $user->setRoles(["ROLE_ADMIN"]);
            // We set a default avatar
            $user->setAvatar('avatar.png');
            // We retrieve EntityManager
            $entityManager = $this->getDoctrine()->getManager();
            // We persist $user, it's a new User
            $entityManager->persist($user);
            // We flush
            $entityManager->flush(); 
            // The object is in database, we redirect to the user list
            return $this->redirectToRoute('admin_users_browse');
        }
        // Otherwise, we are redirected to the add page
        return $this->render('admin/users/add.html.twig', [
            'user' => $user,
            'form' => $form->createView(), 
        ]); 
    }

    /**
     * @Route ("/delete/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    // Method to delete a user
    public function delete(request $request, User $user, EntityManagerInterface $em)
    {
        // We retrieve the form "DeleteType"
        $formDelete = $this->createForm(UserDeleteType::class);
        // We retrieve the data
        $formDelete->handleRequest($request);
         // If the form is correctly submitted and valid
        
        if ($formDelete->isSubmitted() && $formDelete->isValid()) {
            // We remove the user
            $em->remove($user);
            // We flush
            $em->flush();   
            // We are redirected to the browse page
        return $this->redirectToRoute('admin_users_browse');
        }
    }
}