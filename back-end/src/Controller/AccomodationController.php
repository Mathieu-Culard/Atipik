<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Entity\Booking;
use App\Repository\BookingRepository;
use App\Entity\User;
use App\Repository\AccomodationRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManagerInterface;
use Swift_Mailer;
use Swift_Message;

/**
 * @Route(name="accomodation_")
 */
class AccomodationController extends AbstractController
{
    /**
     * @Route("/accomodation/{id}", name="detail", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function displayAccomodation(Accomodation $accomodation, AccomodationRepository $accomodationRepository, SerializerInterface $serializer)
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

            if ($currentPicture['main']) {
                $accomodationData['main_picture'] = $currentPicture['name'];
            }
        }

        //We create a new property for $accomodationData that will contain the $pictures array.
        $accomodationData['pictures'] = $pictures;
        // We delete the $extra property
        unset($accomodationData['picture']);

        return $this->json($accomodationData, 201);
    }


    /**
    * @Route("/api/accomodation/{id}/reservation", name="accomodationReservation", methods={"POST"})
    */
    public function bookingAccomodation(Request $request, Accomodation $accomodation, AccomodationRepository $accomodationRepository, SerializerInterface $serializer, UserInterface $user, UserRepository $userRepository, \Swift_Mailer $mailer, $id, EntityManagerInterface $em, BookingRepository $bookingRepository)
    {
        // We create a new booking
        
        $newBooking = new Booking();

        //We recover json's data
        $jsonData = json_decode($request->getContent());
        //dd($jsonData);
        
        //We recover json's entry date
        $entryDate = $jsonData->from;
        //We recover json's departure date
        $departureDate = $jsonData->to;
        //We recover json's user id
        $tenantId = $jsonData->user;

        $dateFrom = new \DateTime($entryDate);
        $dateFrom = ($dateFrom->format('d-m-Y'));
        //dd($dateFrom);

        $dateTo = new \DateTime($departureDate);
        $dateTo = ($dateTo->format('d-m-Y'));
        //dd($dateTo);
       
        //We recover a user which booking an accomodation
        $tenant = $userRepository->findById($tenantId);
        //dd($tenant);
        $tenantEmail = $tenant->getEmail();
        $tenantFirstName = $tenant->getFirstName();
        $tenantLastName = $tenant->getLastName();
        //dd($tenantEmail);
        //dump($tenantFirstName);
        //dd($tenantLastName);


        // Propriétaire du logement
        $ownerAccomodation = $accomodationRepository->find($id);
        // dump($ownerAccomodation);
        $ownerEmail = $ownerAccomodation->getUser()->getEmail();
        $accomodationName = $ownerAccomodation->getTitle();
        // dd($owner);
  
        //    $book = $bookingRepository->findAll();
        //   // dd($book);
      

        //    //We recover all informations about the accomodation with a specific id
        //    $accomodationBooked = $accomodationRepository->find($id);
        //     //dd($accomodationBooked);
        //     //Récupérer la date d'entrée d'un hébergement
        //     //$bookingEntrance = $accomodationBooked->getEntrance();
        //     //dd($bookingEntrance);
         
        //     //Recover the booking with method of query builder.
        //   $reservations = $bookingRepository->findByAccomodations($id);
        //   dd($reservations);
      
        //     // Entry date
        //   $bookEntrance = $bookingRepository->findByAccomodations($id)->getEntrance();

        //   // Departure date
        //   $bookDeparture = $bookingRepository->findByAccomodations($id)->getDeparture();
     
        

        // foreach ($reservations as $reservation) {
        //     echo $reservation;

        //     /*if ($dateFrom >= $bookEntrance) {
        //         echo'tu peux pas réserver';
        //     } else {
        //         echo'tu peux reserver';
        //     }*/
        // }

        //if the new booking is correctly booked
        if ($newBooking) {
            //Modify dates, accomodation and user
            $newBooking->setEntrance($dateFrom);
            $newBooking->setDeparture($dateTo);
            $newBooking->setAccomodation($ownerAccomodation);
            $newBooking->setUser($tenant);
            // dd($newBooking);
            // And now, save datas in DB
            $em = $this->getDoctrine()->getManager();
            $em->persist($newBooking);
            $em->flush();


            //Send a message from the tenant to the owner
            $message = (new \Swift_Message('Réservation de votre logement'))
        ->setFrom([$tenantEmail => $tenantEmail])
        ->setTo(array($ownerEmail => $ownerEmail))
        ->setBody('Bonjour, votre logement a été réservé du ' . $entryDate . ' au ' . $departureDate . ' par ' . $tenantFirstName . ' ' . $tenantLastName . ". Cordialement, l'équipe AtipiK ");

            // dd($mailer->send($message));
            $mailer->send($message);

            //Send a confirm message from the owner to the tenant
            $confirmMessage = (new \Swift_Message('Confirmation de votre réservation'))
        ->setFrom([$ownerEmail => $ownerEmail])
        ->setTo(array($tenantEmail => $tenantEmail))
        ->setBody('Bonjour, votre logement est bien réservé pour la période du ' . $entryDate . ' au ' . $departureDate . '. Passez un bon séjour chez ' . $accomodationName . ' Cordialement, l\'équipe AtipiK ');

            // dd($mailer->send($message));
            $mailer->send($message);
            $mailer->send($confirmMessage);
            return $this->json('', 201);
 
        }
        return $this->json('', 404);
    }


    /**
     * @Route("/accomodation/{id}/owner", name="owner", methods={"GET"})
     */
    public function displayOwner(Accomodation $accomodation, AccomodationRepository $accomodationRepository, SerializerInterface $serializer)
    {
        // We recover the object Accomodation desired
        $currentAccomodation = $accomodationRepository->findOwnerOfAccomodation($accomodation->getId());

        //From the id we retrieve the information from the hosting provider
        $owner = $currentAccomodation->getUser();

        // We serialize our filtered data and normalize it to avoid circular references.
        $ownerDetail = $serializer->normalize($owner, 'json', ['groups' => 'accomodation_owner']);

        return $this->json($ownerDetail,201);
    }
}
