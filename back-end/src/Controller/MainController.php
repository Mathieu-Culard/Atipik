<?php

namespace App\Controller;

use App\Repository\ExtraRepository;
use App\Repository\ServiceRepository;
use App\Repository\ThematicRepository;
use App\Repository\TypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route( name="list_")
 */
class MainController extends AbstractController
{

     /**
     * @Route("/", name="homepage", methods={"GET"})
     */
    public function homePage()
    {
       return $this->redirectToRoute('app_login');
    }


    /**
     * @Route("/types", name="type", methods={"GET"})
     */
    public function browseTypes(ThematicRepository $thematicRepository, SerializerInterface $serializer)
    {
        // we retrieve the list of themes
        $thematics = $thematicRepository->findAllByThematic();

        // we use the serializer to get a clear json array without worrying about circular references
        // TODO: mettre les noms des types par ordre alphabetique
        $arrayThematic = $serializer->normalize($thematics, 'json', ['groups' => 'list_type']);
         
        return $this->json($arrayThematic);
    }

    /**
     * @Route("/services", name="service")
     */
    public function browseServices(ServiceRepository $serviceRepository, SerializerInterface $serializer)
    {
        // we retrieve the list of services
        $services = $serviceRepository->findAllByService();

        // we use the serializer to get a clear json array without worrying about circular references
        
        $arrayService = $serializer->normalize($services, 'json', ['groups' => 'list_service']);
         
        return $this->json($arrayService);
    }

    /**
     * @Route("/extras", name="extra")
     */
    public function browseExtras(ExtraRepository $extraRepository, SerializerInterface $serializer)
    {
        // we retrieve the list of services
        $extras = $extraRepository->findAllByExtra();

        // we use the serializer to get a clear json array without worrying about circular references
        
        $arrayExtra = $serializer->normalize($extras, 'json', ['groups' => 'list_extra']);
         
        return $this->json($arrayExtra);
    }
}
