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
     * @Route("/api/search", name="search", methods={"POST"})
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
            //dd($newData);

            // We serialize our filtered data and normalize it to avoid circular references. 
            $searchResult = $serializer->normalize($newData, 'json', ['groups' => 'search_result']);
            
            // We create a variable that will be used to store each of the accommodations.
            $finalResult = [];

            foreach ($searchResult as $currentData) {

                // We create a variable $pictures which will be an empty array
                $pictures = [];

                // We loop on the picture property of each accommodation
                foreach ($currentData['picture'] as $picture) {
                    //dd($picture);

                    // we fill for each photo of an accommodation the table $pictures with the name of the photo
                    $pictures[] = $picture['name'];

                    // If one of the photos has the property 'main' which is true
                    if ($picture['main']) {
                        // we create a 'main_picture' property at $currentData and store the name of the photo concerned
                        $currentData['main_picture'] = $picture['name'];
                    }
                }

                // We loop on the type property of each accommodation
                foreach($currentData['type'] as $currentType) {
                    // We store the id of the hosting type in a new variable $typeId
                    $typeId = $currentType;
                    
                }
                // we store in the "type" property of $currentData the id corresponding to the type of hosting
                $currentData['type'] = $typeId;

                // we store in the "pictures" property of $currentData the $pictures data array initialized previously 
                $currentData['pictures'] = $pictures;
                //we delete the picture property initially present
                unset($currentData['picture']);

                //dd($currentData);

                //We store each hosting in the variable $finalResult
                $finalResult[] = $currentData;        
            }
        }

        return $this->json($finalResult);
    }
}
