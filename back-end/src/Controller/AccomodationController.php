<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Repository\AccomodationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

/**
 * @Route(name="accomodation_")
 */
class AccomodationController extends AbstractController
{
    /**
     * @Route("/accomodation/{id}", name="detail", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function accomodationDetail(Accomodation $accomodation, AccomodationRepository $accomodationRepository, SerializerInterface $serializer)
    {
        // We recover the object Accomodation desired
        $currentAccomodation = $accomodationRepository->find($accomodation->getId());

        // We serialize our filtered data and normalize it to avoid circular references.
        $accomodationData = $serializer->normalize($currentAccomodation, 'json', ['groups' => 'accomodation_detail']);

        // We loop on the type property of the hosting to extract its value from the existing sub-array.
        foreach ($accomodationData['type'] as $currentType) {
            // We store the id of the hosting type in a new variable $typeId
            $typeId = $currentType;
        }

        // we store in the "type" property of $currentData the id corresponding to the type of hosting
        $accomodationData['type'] = $typeId;

        // We loop on the user property of the hosting to extract its value from the existing sub-array.
        foreach ($accomodationData['user'] as $currentUser) {
            // We store the id of the hosting user in a new variable $userId
            $userId = $currentUser;
        }

        // we store in the "type" property of $currentData the id corresponding to the type of hosting
        $accomodationData['user'] = $userId;

        // We loop on all the services proposed for accomodation
        foreach ($accomodationData['service'] as $currentService) {
            // We create a new variable that will be an array and that will contain the IDs of all the services proposed for hosting
            $services[] = $currentService['id'];
        }

        //We create a new property for $accomodationData that will contain the $services array.
        $accomodationData['services'] = $services;
        // We delete the $service property
        unset($accomodationData['service']);

        // We loop on all the extras proposed for accomodation
        foreach ($accomodationData['extra'] as $currentExtra) {
            // We create a new variable that will be an array and that will contain the IDs of all the extras proposed for hosting
            $extras[] = $currentExtra['id'];
        }

        //We create a new property for $accomodationData that will contain the $extras array.
        $accomodationData['extras'] = $extras;
        // We delete the $extra property
        unset($accomodationData['extra']);

        // We loop on all the pictures of the accomodation
        foreach ($accomodationData['picture'] as $currentPicture) {
            // We create a new variable that will be an array and that will contain the name of all the pictures of the accomodation
            $pictures[] = $currentPicture['name'];

            if($currentPicture['main']) {
                $accomodationData['main_picture'] = $currentPicture['name'];
            }
        }

        //We create a new property for $accomodationData that will contain the $pictures array.
        $accomodationData['pictures'] = $pictures;
        // We delete the $extra property
        unset($accomodationData['picture']);

        return $this->json($accomodationData,201);
    }
}
