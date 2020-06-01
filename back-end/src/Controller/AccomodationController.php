<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Repository\AccomodationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AccomodationController extends AbstractController
{
    /**
     * @Route("/accomodation/{id}", name="accomodation")
     */
    public function index(AccomodationRepository $accomodationRepository, int $id)
    {
        $accomodation = $accomodationRepository->find($id);
        
        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/AccomodationController.php',
        ]);
    }
}
