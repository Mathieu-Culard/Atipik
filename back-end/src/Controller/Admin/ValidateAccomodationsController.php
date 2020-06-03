<?php

namespace App\Controller\Admin;

use App\Entity\Accomodation;
use App\Entity\User;
use App\Form\DeleteValidationType;
use App\Form\FormAccomodationType;
use App\Form\UserDeleteType;
use App\Form\UserBanish;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\AccomodationRepository;
use App\Repository\UserRepository;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;


/**
* @Route("/admin/validate/accomodations", name="admin_validate_accomodations_")
*/
class ValidateAccomodationsController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    public function browse(AccomodationRepository $accomodationRepository)
    {
       //We recover the list'saccomodations
       $accomodations = $accomodationRepository->findByValidateStatus(); 
      // dd($accomodations);
 
      //We send to the view $accomodations
        return $this->render('admin/validate_accomodations/browse.html.twig', [
          
          'accomodations' => $accomodations
        ]);

    }

    /**
     * @Route("/{id}", name="read", methods={"GET", "DELETE"}, requirements={"id": "\d+"})
     */
    //Method to display an accomodation
    public function read(AccomodationRepository $accomodationRepository,  $id)
    {
        //We recover the current accomodation (with his id)
        $currentAccomodation = $accomodationRepository->find($id); 
        
        //We declare a variable $deleteValidationType which create the form with
        //deleteValidationType
        //in order to reject an accomodation (if there is an inadequate vocabulary for example)
        $deleteValidationType = $this->createForm(deleteValidationType::class, null, [
            'action' => $this->generateUrl('admin_validate_accomodations_delete',['id' => $currentAccomodation->getId()] )
        ]);

        //We declare a variable $userBanish which create the form with userBanish
        //in order to banish a user
        $userBanish = $this->createForm(UserBanish::class, null, [
            'action' => $this->generateUrl('admin_validate_accomodations_banish',['id' => $currentAccomodation->getUser()->getId()] )
        ]);

        //We send to the view: $currentAccomodation and the two forms
        return $this->render('admin/validate_accomodations/read.html.twig',
        [
            'currentAccomodation' => $currentAccomodation,
            'deleteValidationType' =>$deleteValidationType->createView(),
            'userBanish' =>$userBanish->createView(),
        ]);
    }

       /**
     * @Route("/edit/{id}", name="edit", methods={"GET", "POST"}, requirements={"id": "\d+"})
     */
    public function edit(Accomodation $accomodation, Request $request, EntityManagerInterface $em)
    {
        $form = $this->createForm(FormAccomodationType::class, $accomodation);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($accomodation);
            $em->flush();

            return $this->redirectToRoute('admin_validate_accomodations_read', ['id' => $accomodation->getId()]);
        }
    
        return $this->render('admin/validate_accomodations/edit.html.twig', [
            'form' => $form->createView(),
            
            ]);
    }

    /**
     * @Route("/validate/{id}", name="validate", methods={"GET"}, requirements={"id": "\d+"})
     */
    // Method to validate an accomodation
    public function validate(Accomodation $accomodation)
    {
        //If the current accomodation is not yet validated 
        if($accomodation->getIsValidated() == false){
            //So validate the current accomodation
            $accomodation->setIsValidated(true);
        }
    
        //We update the DB
        $em = $this->getDoctrine()->getManager();
        $em->persist($accomodation);
        $em->flush();

        return $this->redirectToRoute('admin_validate_accomodations_browse');
    }

    /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Request $request, EntityManagerInterface $em, Accomodation $accomodation)
    {
        // We retrieve the form "DeleteValidationType"
        $formDelete = $this->createForm(DeleteValidationType::class);
        //We retrieve the data
        $formDelete->handleRequest($request);

        // If the form is correctly submitted and valid
        if ($formDelete->isSubmitted() && $formDelete->isValid()) {

            // we delete $accomodation
            $em->remove($accomodation);
            //We flush
            $em->flush();
            //We are redirected oto the browse page
            return $this->redirectToRoute('admin_validate_accomodations_browse');
        }
      
    }

     /**
     * @Route("/banish/{id}", name="banish", methods={"DELETE"})
     */
    public function banish(Request $request, EntityManagerInterface $em, User $user)

    {  
        //We retrieve the form "UserBanish"
        $formBanish = $this->createForm(UserBanish::class);
        //We retrieve the data
        $formBanish->handleRequest($request);
        
        // If the form is correctly submitted and valid
        if ($formBanish->isSubmitted() && $formBanish->isValid()) {

            // we delete the current user
            $em->remove($user);
            //We flush
            $em->flush();
            // We are redirected to the browse page
            return $this->redirectToRoute('admin_validate_accomodations_browse');
        }
      
    }

}
