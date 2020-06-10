<?php

namespace App\Controller\Admin;

use App\Entity\Accomodation;
use App\Repository\AccomodationRepository;
use App\Form\AccomodationDeleteType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
* @Route("/admin/accomodations", name="admin_accomodations_")
*/
class AccomodationController extends AbstractController
{
    /**
* @Route("/", name="browse")
*/
    public function browse(AccomodationRepository $accomodationRepository)
    {
        //We recover the list's extras
        $accomodations = $accomodationRepository->findByValidation();

        //Declare an empty array
        $forms =[];

        //To loop on each extra in our variable $extras
        foreach ($accomodations as $accomodation) {
            //We declare a variable $formOptions which allow to be
            //redirected on the delete's page (to execute the delete method)
            $formOptions = [
         'action' => $this->generateUrl('admin_accomodations_delete', ['id' => $accomodation->getId() ])
     ];

            //We associate to $extras, an array which contain, a delete button for each extra
            $forms[]= $this->createForm(accomodationDeleteType::class, $accomodations, $formOptions)->createView();
        }


            return $this->render('admin/accomodation/browse.html.twig', [
            'accomodations' => $accomodations,
            'forms' => $forms
            ]);
        
    }

    /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Accomodation $accomodation, Request $request, EntityManagerInterface $em)
    {
    // We create a form to add the extra
    $formDeleteAccomodation = $this->createForm(AccomodationDeleteType::class);
    $formDeleteAccomodation->handleRequest($request);

     // We make sure the form is submitted correctly and is valid
    if ($formDeleteAccomodation->isSubmitted() && $formDeleteAccomodation->isValid()) {
        // we delete the data
        $em->remove($accomodation);
        // we flush
        $em->flush();

        //We redirect to the list page
        return $this->redirectToRoute('admin_accomodations_browse');
    }
    return $this->render('admin/emails/accomodationContact.html.twig');
}
}
