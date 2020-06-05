<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Entity\Extra;
use App\Entity\Service;
use App\Form\AccomodationType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/api", name="accomodation_")
 */
class AccomodationUserController extends AbstractController
{
    /**
     * @Route("/add/accomodation", name="add", methods={"POST"})
     */
    public function addAccomodation(Request $request, EntityManagerInterface $em, SluggerInterface $slugger, UserInterface $userInterface, UserRepository $userRepository)
    {
        $accomodation = new Accomodation();
        
        $form = $this->createForm(AccomodationType::class, $accomodation);

        // on stocke les données reçues dans $data
        $data = $request->request->all();
        // on stocke dans $service 
        $services = json_decode($data['services']);
        // on supprime la propriété services de $data
        unset($data['services']);
        // on soumets le formulaire

        $extras = json_decode($data['extras']);
        unset($data['extras']);

        $form->submit($data, false);
        
        if ($form->isValid()) {
        
            $sluggerTitle = $slugger->slug($form->get('title')->getData());
            $accomodation->setSlugger($sluggerTitle);
            $accomodation->setIsValidated('0');
            $user = $userRepository->find($userInterface->getId());
            $accomodation->setUser($user);
            // should be replace by a data transformer
            // Pour chacun des service de $services
            foreach($services as $service) {
                // on ajoute un nouveau service a l'hébergement
                $accomodation->addService($em->getRepository(Service::class)->find($service));
            }
            foreach($extras as $extra) {
                // on ajoute un nouveau service a l'hébergement
                $accomodation->addExtra($em->getRepository(Extra::class)->find($extra));
            }
            $em->persist($accomodation);
            $em->flush();

            return $this->json('', 201);
        }
      
        //dd('echec');
        return $this->json('', 404);



        /*   return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AccomodationUserController.php',
        ]); */
    }
}
