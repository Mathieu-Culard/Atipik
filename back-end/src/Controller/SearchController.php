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
        //dd($jsonData->capacity);
        // We initialize an empty table which will allow to store the dwellings concerned by the request.
        $newData = [];

        // Si des données ont été transmises en json
        if (isset($jsonData)) {
            
            // si $jsonData->capacity n'est pas null
            if (isset($jsonData->capacity)) {
                
                // on selectionne les logements dont la capacité est supérieure ou égale a $jsonData->capacity
                $newData[] = $accomodationRepository->findAllByCapacity($jsonData->capacity);
                dd($newData);
                
            } 
            /* //================================================
            // si $jsonData->types n'est pas null
            if (!isset($jsonData->types)) {
                // on selectionne les logements dont le type est égal a $jsonData->types  -> mettre un foreach
            } 
            //================================================
            // si $jsonData->nb_night n'est pas null
            if (!isset($jsonData->nb_night)) {
                // on selectionne les logements dont le nombre de nuits minimum est supérieur ou égal a $jsonData->nb_night
            } 
            //================================================
            // si $jsonData->city n'est pas null
            if (!isset($jsonData->city)) {
                // on selectionne les logements dont la ville correspond a $jsonData->city
            } 
            //================================================
            // si $jsonData->country n'est pas null
            if (!isset($jsonData->country)) {
                // on selectionne les logements dont le pays correspond a $jsonData->country
            } 
            //================================================
            // si $jsonData->max_price_scale n'est pas null
            if (!isset($jsonData->max_price_scale)) {
                // on selectionne les logements dont le prix est inférieure ou égal a $jsonData->max_price_scale
            } 
            //================================================
            // si $jsonData->min_surface n'est pas null
            if (!isset($jsonData->min_surface)) {
                // on selectionne les logements dont la surface est supérieure ou égale a $jsonData->min_surface
            } 
            //================================================
            // si $jsonData->piped_water n'est pas null
            if (!isset($jsonData->piped_water)) {
                // on selectionne les logements dont la propriété concernant l'eau courante correspond a $jsonData->piped_water
            } 
            //================================================
            // si $jsonData->electricity n'est pas null
            if (!isset($jsonData->electricity)) {
                // on selectionne les logements dont la propriété concernant l'electricité correspond a $jsonData->electricity
            } 
            //================================================
            // si $jsonData->animals n'est pas null
            if (!isset($jsonData->animals)) {
                // on selectionne les logements dont la propriété concernant les animaux de compagnie correspond a $jsonData->animals
            } 
            //================================================
            // si $jsonData->smokers n'est pas null
            if (!isset($jsonData->smokers)) {
                // on selectionne les logements dont la propriété concernant les fumeurs correspond a $jsonData->smokers
            } 
            //================================================
            // si $jsonData->apmr n'est pas null
            if (!isset($jsonData->apmr)) {
                // on selectionne les logements dont la propriété concernant l'acces pour les PMR correspond a $jsonData->apmr
            } 
            //============= */
            
        } 

        return $this->json([
            'message' => 'Welcome to your new controller!',
            'path' => 'src/Controller/TestController.php',
        ]);
    }
}
