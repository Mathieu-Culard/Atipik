<?php

namespace App\Controller\Admin;

use App\Entity\Extra;
use App\Form\ExtraType;
use App\Form\FormExtraDeleteType;
use App\Repository\ExtraRepository;
use App\Services\FileUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\String\Slugger\SluggerInterface;



/**
* @Route("/admin/extras", name="admin_extras_")
*/
class ExtrasController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    public function browse(ExtraRepository $extraRepository)
    {
        //We recover the list's extras
        $extras = $extraRepository->findAll(); 

         //Declare an empty array
        $forms =[];

        //To loop on each extra in our variable $extras
        foreach ($extras as $extra){
            //We declare a variable $formOptions which allow to be
            //redirected on the delete's page (to execute the delete method)
            $formOptions = [
                'action' => $this->generateUrl('admin_extras_delete', ['id' => $extra->getId() ])
            ]; 

            //We associate to $extras, an array which contain, a delete button for each extra
            $forms[]= $this->createForm(FormExtraDeleteType::class, $extra, $formOptions)->createView();
        }
               
        //We recover the list's extras
        $extras = $extraRepository->findAll();
        //We send to the view
        return $this->render('admin/extras/browse.html.twig', [
            //our variable $extras which contains extra's list
            'extras' => $extras,
            //our variable $forms which contains the delete button
            'forms' => $forms
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit", methods={"GET", "POST"}, requirements={"id": "\d+"})
     */
    public function edit(Extra $extra, Request $request, EntityManagerInterface $em, SluggerInterface $slugger)
    {
        // We create a form to edit the extra
        $form = $this->createForm(ExtraType::class, $extra);
        $form->handleRequest($request);

        // We make sure the form is submitted correctly and is valid
        if ($form->isSubmitted() && $form->isValid()) {

            // We get the data for property icon
            $iconFile = $form->get('icon')->getData();

            // dd($form);

            // If we get an icon 
            if ($iconFile){
                // we do a slugger with the type name
                $sluggerName = $slugger->slug($form->get('name')->getData());
                // we retrieve the extension 
                $extension = $iconFile->getClientOriginalExtension();
                // We rename the file 
                $newName = $sluggerName . '.' . $extension; 
                // We move the file to the folder
                $iconFile->move($this->getParameter('icon_directory'), $newName);

              //  dd($iconFile); 

            }
            $em->persist($extra);
            $em->flush(); 

            return $this->redirectToRoute('admin_extras_browse');
        }

        return $this->render('admin/extras/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/add", name="add", requirements={"id" : "\d+"})
     *
     */
    // Method to add a new Extra
    public function add(Request $request, ExtraRepository $extraRepository,  SluggerInterface $slugger, EntityManagerInterface $em)
    {
        // We create a new extra
        $extra = new Extra();

        // We create a form to add the extra
        $form = $this->createForm(ExtraType::class, $extra);
     
        $form->handleRequest($request);

        // We make sure the form is submitted correctly and is valid
        if ($form->isSubmitted() && $form->isValid()) {
            // We get the data for property icon
            $iconFile = $form->get('icon')->getData();

            // dd($form);

            // If we get an icon 
            if ($iconFile){
                // we do a slugger with the type name
                $sluggerName = $slugger->slug($form->get('name')->getData());
                // we retrieve the extension 
                $extension = $iconFile->getClientOriginalExtension();
                //We rename the file
                $newName = $sluggerName . '.' . $extension; 
                // We move the file to the folder
                $iconFile->move($this->getParameter('icon_directory'), $newName);

                //dd($iconFile); 
            }
            //dd($iconFile); 
            $extra->setIcon($newName);
     

            //We update the DB
            $em = $this->getDoctrine()->getManager();
            $em->persist($extra);
            $em->flush(); 
    

            // We redirect to the list page
            return $this->redirectToRoute('admin_extras_browse');
        }

        // We send it to the add page
        return $this->render('admin/extras/add.html.twig', [
        'form' => $form->createView(),
    ]);
    }

 /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Extra $extra, Request $request, EntityManagerInterface $em)
    {
    // We create a form to add the extra
    $formDelete = $this->createForm(FormExtraDeleteType::class);
    $formDelete->handleRequest($request);

     // We make sure the form is submitted correctly and is valid
    if ($formDelete->isSubmitted() && $formDelete->isValid()) {
        // we delete the data
        $em->remove($extra);
        // we flush
        $em->flush();

        //We redirect to the list page
        return $this->redirectToRoute('admin_extras_browse');
    }
    return $this->render('admin/extras/browse.html.twig');
}

}