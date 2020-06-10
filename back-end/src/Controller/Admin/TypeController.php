<?php

namespace App\Controller\Admin;

use App\Entity\Type;
use App\Form\FormTypeDelete;
use App\Form\FormTypeDeleteOnEdit;
use App\Form\FormType;
use App\Services\FileUploader;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\TypeRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\String\Slugger\SluggerInterface;



/**
* @Route("/admin/type", name="admin_type_")
*/
class TypeController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    //Browse Method to list types
    public function browse(TypeRepository $typeRepository)
    {
        //We recover the list's type
        $types = $typeRepository->findAll();

        //Declare an empty array
        $forms = [];
    
        //To loop on each type in our variable $types
        foreach ($types as $type){
            //We declare a variable $formOptions which allow to be
            //redirected on the delete's page (to execute the delete method)
            $formOptions = [
                'action' => $this->generateUrl('admin_type_delete', ['id' => $type->getId() ])
            ];
            
            //We associate to $forms, an array which contain, a delete button for each type
             $forms[] = $this->createForm(FormTypeDelete::class,$type,$formOptions)->createView();
        }
     
        
        return $this->render('admin/type/browse.html.twig', [
            'types' => $types,
            'forms' => $forms
        ]);
    }



     /**
      * @Route("/edit/{id}", name="edit", methods={"GET", "POST"}, requirements={"id": "\d+"})
      */
    //Method to edit a type 
     public function edit(Type $type, Request $request, SluggerInterface $slugger, EntityManagerInterface $em, FileUploader $fileUploader ) : Response
      {
        // We create a form to edit the type
        $form = $this->createForm(FormType::class, $type);
        $form->handleRequest($request);

        // We make sure the form is submitted correctly and is valid
        if ($form->isSubmitted() && $form->isValid()){

            // We get the data for properties picture and icon
            $pictureFile = $form->get('picture')->getData();
            $iconFile = $form->get('icon')->getData();

            // If we get a picture and an icon 
            if (isset($pictureFile)) {
                // we do a slugger with the type name
                $sluggerPictureName = $slugger->slug($form->get('name')->getData());
                // we retrieve the extension 
                $extension = $pictureFile->getClientOriginalExtension();
                // We rename the file 
                $newPictureName = $sluggerPictureName . '.' . $extension;

                // We move the file to the folder
                $pictureFile->move($this->getParameter('type_pictures_directory'), $newPictureName);
                $type->setPicture($newPictureName);
            }
           

            if (isset($iconFile)) {
                // we do a slugger with the type name
                $sluggerIconName = $slugger->slug($form->get('name')->getData());
                // we retrieve the extension
                $extension = $iconFile->getClientOriginalExtension();
                // We rename the file
                $newIconName = $sluggerIconName . '.' . $extension;
                // We move the file to the folder
                $iconFile->move($this->getParameter('icon_directory'), $newIconName);
            
            $type->setIcon($newIconName);
            }
            $em = $this->getDoctrine()->getManager();
            $em->persist($type);
            // We flush 
            $em->flush();

            // We redirect to the list page
            return $this->redirectToRoute('admin_type_browse');
            // We redirect to the list page
            return $this->redirectToRoute('admin_type_browse');

        }
         // We create a form to delete the type
         $formDelete = $this->createForm(FormTypeDelete::class, null, [
            'action' => $this->generateUrl('admin_type_delete', ['id' => $type->getId() ])
         ]);

        // We send it to the edit page
        return $this->render('admin/type/edit.html.twig', [
        'form' => $form->createView(),
      
        'formDelete' => $formDelete->createView(),
    ]); 
      }

    /**
     * @Route("/add", name="add", requirements={"id" : "\d+"})
     * 
     */
    // Method to add a new Type
    public function add(Request $request, TypeRepository $typeRepository, FileUploader $fileUploader, SluggerInterface $slugger)
    {   
        // We create a new type
        $type = new Type();

        $form = $this->createForm(FormType::class, $type);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {


            $pictureFile = $form->get('picture')->getData();
            $iconFile = $form->get('icon')->getData();

        // If we get a picture
            if ($pictureFile) {
                  // we do a slugger with the type name
                $sluggerPictureName = $slugger->slug($form->get('name')->getData());
                 // we retrieve the extension 
                $extension = $pictureFile->getClientOriginalExtension();
                 //We rename the file
                $newPictureName = $sluggerPictureName . '.' . $extension;
                // We move the file to the folder
                $pictureFile->move($this->getParameter('type_pictures_directory'), $newPictureName);
                $type->setPicture($newPictureName);
            }

             // If we get an icon 
            if ($iconFile) {
                // we do a slugger with the type name
                $sluggerIconName = $slugger->slug($form->get('name')->getData());
                // we retrieve the extension 
                $extension = $iconFile->getClientOriginalExtension();
                 //We rename the file
                $newIconName = $sluggerIconName . '.' . $extension;
                // We move the file to the folder
                $iconFile->move($this->getParameter('icon_directory'), $newIconName);
                $type->setIcon($newIconName);
            }

            // We update the database
            $em = $this->getDoctrine()->getManager();
            $em->persist($type);
            $em->flush();

            // We redirect to the list page
            return $this->redirectToRoute('admin_type_browse');
        }

        // We send it to the add page
        return $this->render('admin/type/add.html.twig', [
        'form' => $form->createView(),
    ]);
    }


    /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
    //
    public function delete(Request $request, EntityManagerInterface $em, Type $type)
    {
        $formDelete = $this->createForm(FormTypeDelete::class, $type);

        $formDelete->handleRequest($request);

        //dd($formDelete->getData());

        if ($formDelete->isSubmitted() && $formDelete->isValid()) {
           
            // we delete the data
            $em->remove($type);
         
            $em->flush();

            return $this->redirectToRoute('admin_type_browse');
           
        }
        return $this->redirectToRoute('admin_type_browse');
    }

    
    }