<?php

namespace App\Controller;

use App\Repository\AccomodationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", name="search", methods={"POST"})
     */
    public function searchResults(Request $request, SerializerInterface $serializer, AccomodationRepository $accomodationRepository)
    {
        // We create a new object from the received JSON
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);

        // We initialize an empty table which will allow to store the dwellings concerned by the request.
        $newData = $accomodationRepository->findAll();

        // If data was transmitted in json
        if (isset($jsonData)) {
            $newData = $accomodationRepository->findbyFilters($jsonData);

            $searchResult = $serializer->normalize($newData, 'json', ['groups' => 'search_result']);
            dd($searchResult);
        }

        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TestController.php',
        ]);
    }
}
