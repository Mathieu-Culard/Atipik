<?php

namespace App\Controller\Admin;

use App\Entity\Service;
use App\Form\FormServiceDelete;
use App\Form\FormServicesType;
use App\Services\FileUploader;
use App\Repository\ServiceRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
* @Route("/admin/services", name="admin_services_")
*/
class ServicesController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    public function browse(ServiceRepository $serviceRepository)
    {
         //We recover the services's type
         $services = $serviceRepository->findAll();

         //Declare an empty array
         $forms = [];
     
         //To loop on each type in our variable $services
         foreach ($services as $service){
             //We declare a variable $formOptions which allow to be
             //redirected on the delete's page (to execute the delete method)
             $formOptions = [
                 'action' => $this->generateUrl('admin_services_delete', ['id' => $service->getId() ])
             ];
             
             //We associate to $forms, an array which contain, a delete button for each service
              $forms[] = $this->createForm(FormServiceDelete::class,$service,$formOptions)->createView();
         }
      
      
        return $this->render('admin/services/browse.html.twig', [
             'services' => $services,
             'forms' => $forms
        ]);
    }

    /**
    * @Route("/edit/{id}", name="edit", methods={"GET", "POST", "DELETE"}, requirements={"id": "\d+"})
    */
    public function edit(Service $service, Request $request,EntityManagerInterface $em, SluggerInterface $slugger, FileUploader $fileUploader) : Response
    {
        $form = $this->createForm(FormServicesType::class, $service);
        $form->handleRequest($request); 

        if ($form->isSubmitted() && $form->isValid()){

            // $iconFile = $form->get('icon')->getData();

            // // dd($form);

            // if ($iconFile){
            //     $sluggerName = $slugger->slug($form->get('name')->getData());
            //     $extension = $iconFile->getClientOriginalExtension();
            //     $newName = $sluggerName . '.' . $extension; 
            //     $iconFile->move($this->getParameter('service_icons_directory'), $newName);

            //     //dd($iconFile); 

            // }
            // $em->persist($service);
            // $em->flush(); 

             //We use a service in order to move the picture
             $newIcon = $fileUploader->saveFile($form['icon'], 'assets/service/icon');

             //We associate this new file to our type
             $service->setIcon($newIcon);
 
             // We update the database
             $em = $this->getDoctrine()->getManager();
             $em->persist($service);
             $em->flush();

                 return $this->redirectToRoute('admin_services_browse');
        }

        return $this->render('admin/services/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }



    /**
     * @Route("/add", name="add", requirements={"id" : "\d+"})
     * 
     */
    // Method to add a new Service

    public function add(Request $request, ServiceRepository $serviceRepository, FileUploader $fileUploader, SluggerInterface $slugger)
    {   
        // We create a new service
        $service = new Service();

        $form = $this->createForm(FormServicesType::class, $service);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
    
            //We use a service in order to move the icon
            $newIcon = $fileUploader->saveFile($form['icon'], 'assets/service/icon');

            //We associate this new file to our service
            $service->setIcon($newIcon);

            // We update the database
            $em = $this->getDoctrine()->getManager();
            $em->persist($service);
            $em->flush();

            // We redirect to the list page
            return $this->redirectToRoute('admin_services_browse');
        }

        // We send it to the add page
        return $this->render('admin/services/add.html.twig', [
        'form' => $form->createView(),
    ]);
    }

      /**
     * @Route("/delete/{id}", name="delete", methods={"DELETE"})
     */
        public function delete(Service $service, Request $request, EntityManagerInterface $em)
        {
        $formDelete = $this->createForm(FormServiceDelete::class);

        $formDelete->handleRequest($request);

        if ($formDelete->isSubmitted() && $formDelete->isValid()) {
            // we delete the data
            $em->remove($service);
            // we flush
            $em->flush();

            //We redirect to the list page
            return $this->redirectToRoute('admin_services_browse');
        }
        return $this->redirectToRoute('admin_services_browse');
    }
}
    

