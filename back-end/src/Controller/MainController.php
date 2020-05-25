<?php

namespace App\Controller;

use App\Repository\ThematicRepository;
use App\Repository\TypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class MainController extends AbstractController
{
    /**
     * @Route("/types", name="list_type", methods={"GET"})
     */
    public function browseTypes(ThematicRepository $thematicRepository, TypeRepository $typeRepository, SerializerInterface $serializer)
    {
        // we retrieve the list of themes
        $thematics = $thematicRepository->findAllByThematic();


        $arrayThematic = $serializer->normalize($thematics, 'json', ['groups' => 'list_type']);
        
        
        return $this->json($arrayThematic);
    }
}
