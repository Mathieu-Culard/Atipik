<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Entity\Extra;
use App\Entity\Picture;
use App\Entity\Service;
use App\Form\AccomodationType;
use App\Repository\AccomodationRepository;
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

        //dump($request);
        // on stocke les données reçues dans $data
        $data = $request->request->all();
        //return $this->json($request->request->all()['pictures']);

        if (isset($request->files->all()['pictures'])) {
            // on stocke l'ensemble des fichiers images dans $pictures
            $pictures = $request->files->all()['pictures'];
            //return $this->json(dump($request));

        }

        // si au moins un service a bien été soumis
        if (isset($data['services'])) {
            // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
            $services = explode(',', $data['services']);
            // on supprime la propriété services recue de l'utilisateur
            unset($data['services']);
        } else {
            // sinon on crée un tableau vide
            $services = [];
            // on supprime la propriété services recue de l'utilisateur
            unset($data['services']);
        }

        // si au moins un extra a bien été soumis
        if (isset($data['extras'])) {
            // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
            $extras = explode(',', $data['extras']);
            // on supprime la propriété extras recue de l'utilisateur
            unset($data['extras']);
        } else {
            // sinon on crée un tableau vide
            $extras = [];
            // on supprime la propriété extras recue de l'utilisateur
            unset($data['extras']);
        }

        // on soumet le formulaire
        $form->submit($data, false);
        //dd($form->getErrors());
        //return $this->json(dump($form));
        if ($form->isValid()) {

            $sluggerTitle = $slugger->slug($form->get('title')->getData());
            $accomodation->setSlugger($sluggerTitle);
            $accomodation->setIsValidated('0');
            $user = $userRepository->find($userInterface->getId());
            $accomodation->setUser($user);
            // should be replace by a data transformer

            // si le tableau $services n'est pas null
            if (isset($services)) {
                // pour chaque service proposé
                foreach ($services as $service) {
                    // et si un service donné est différent d"une chaine vide
                    if ($service !== '') {
                        // on ajoute un nouveau service a l'hébergement
                        $accomodation->addService($em->getRepository(Service::class)->find($service));
                    }
                }
            }

            // si le tableau $extras n'est pas null
            if (isset($extras)) {
                // pour chaque extra proposé
                foreach ($extras as $extra) {
                    // et si un extra donné est différent d"une chaine vide
                    if ($extra !== '') {
                        // on ajoute un nouvel extra a l'hébergement
                        $accomodation->addExtra($em->getRepository(Extra::class)->find($extra));
                    }
                }
            }

            //return $this->json($request);
            if (isset($request->files->all()['pictures'])) {

                // Pour chacune des images
                $count = 0;
                foreach ($pictures as $currentPicture) {

                    // We retrieve the extension of the transmitted image file
                    $extension = $currentPicture->getClientOriginalExtension();

                    // We rename the image file so that it follows a standard
                    $pictureName = $sluggerTitle . $count++ . '.' . $extension;

                    $mainPicture = $sluggerTitle . '0.' . $extension;

                    $picture = new Picture();

                    // on attribue a la photo son nouveau nom
                    $picture->setName($pictureName);

                    // si le nom de l'image est le meme que celui de l'image principale
                    if ($pictureName === $mainPicture) {
                        // alors on met la propriété correspondant a l'image principale a true
                        $picture->setMain(true);
                    } else {
                        // sinon on la met a false
                        $picture->setMain(false);
                    }
                    // on ajoute l'objet en lien avec le logement
                    $accomodation->addPicture($picture);

                    $em->persist($picture);

                    // The image is stored in a special folder and given the new name defined above.
                    $currentPicture->move($this->getParameter('accomodation_directory'), $pictureName);
                }
            }
            // on met a jour la base de données
            $em->persist($accomodation);

            $em->flush();

            return $this->json($accomodation->getId(), 201);
        }

        return $this->json('', 400);
    }

    /**
     * @Route("/edit/accomodation/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST"} )
     */
    public function editAccomodation(AccomodationRepository $accomodationRepository, Accomodation $accomodation, Request $request, EntityManagerInterface $em, SluggerInterface $slugger, UserInterface $user)
    {
        $currentAccomodation = $accomodationRepository->find($accomodation->getId());
        //dd($currentAccomodation);

        $connectedUser = $user->getId();
        $owner = $currentAccomodation->getUser()->getId();

        if ($connectedUser === $owner) {
            $form = $this->createForm(AccomodationType::class, $currentAccomodation);

            // on stocke les données reçues dans $data
            $data = $request->request->all();

            if (isset($request->files->all()['pictures'])) {
                // on stocke l'ensemble des fichiers images dans $pictures
                $pictures = $request->files->all()['pictures'];
            }

            // si au moins un service a bien été soumis
            if (isset($data['services'])) {
                // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
                $services = explode(',', $data['services']);
                // on supprime la propriété services recue de l'utilisateur
                unset($data['services']);
            } else {
                // sinon on crée un tableau vide
                $services = [];
                // on supprime la propriété services recue de l'utilisateur
                unset($data['services']);
            }

            // si au moins un extra a bien été soumis
            if (isset($data['extras'])) {
                // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
                $extras = explode(',', $data['extras']);
                // on supprime la propriété extras recue de l'utilisateur
                unset($data['extras']);
            } else {
                // sinon on crée un tableau vide
                $extras = [];
                // on supprime la propriété extras recue de l'utilisateur
                unset($data['extras']);
            }

            $form->submit($data, false);
            //dd($data);
            //dd($form->isValid());
            if ($form->isValid()) {
                $sluggerTitle = $slugger->slug($form->get('title')->getData());
                $accomodation->setSlugger($sluggerTitle);
                $accomodation->setIsValidated('0');

                // On recupere les services existants en base de données et pour chacun d'entre eux
                foreach ($accomodation->getService() as $existingService) {
                    // on supprime l'objet existant
                    $accomodation->removeService($existingService);
                    //dd($accomodation);
                }
                // si le tableau $services n'est pas null
                if (isset($services)) {
                    // pour chaque service proposé
                    foreach ($services as $service) {
                        // et si un service donné est différent d"une chaine vide
                        if ($service !== '') {
                            // on ajoute un nouveau service a l'hébergement
                            $accomodation->addService($em->getRepository(Service::class)->find($service));
                        }
                    }
                }
                // On recupere les extras existants en base de données et pour chacun d'entre eux
                foreach ($accomodation->getExtra() as $existingExtra) {
                    // on supprime l'objet existant
                    $accomodation->removeExtra($existingExtra);
                    //dd($accomodation);
                }
                // si le tableau $extras n'est pas null
                if (isset($extras)) {
                    // pour chaque extra proposé
                    foreach ($extras as $extra) {
                        // et si un extra donné est différent d"une chaine vide
                        if ($extra !== '') {
                            // on ajoute un nouvel extra a l'hébergement
                            $accomodation->addExtra($em->getRepository(Extra::class)->find($extra));
                        }
                    }
                }



                if (isset($request->files->all()['pictures'])) {
                    // Pour chacune des images
                    $count = 0;

                    foreach ($accomodation->getPicture() as $existingPicture) {
                        $accomodation->removePicture($existingPicture);
                        //dump($accomodation);
                    }
                    //die();

                    foreach ($pictures as $currentPicture) {

                        // We retrieve the extension of the transmitted image file
                        $extension = $currentPicture->getClientOriginalExtension();

                        // We rename the image file so that it follows a standard
                        $pictureName = $sluggerTitle . $count++ . '.' . $extension;

                        $mainPicture = $sluggerTitle . $data['main_picture'] . '.' . $extension;
                        //dd($mainPicture);
                        $picture = new Picture();

                        // on attribue a la photo son nouveau nom
                        $picture->setName($pictureName);

                        // si le nom de l'image est le meme que celui de l'image principale
                        if ($pictureName === $mainPicture) {
                            // alors on met la propriété correspondant a l'image principale a true
                            $picture->setMain(true);
                        } else {
                            // sinon on la met a false
                            $picture->setMain(false);
                        }
                        // on ajoute l'objet en lien avec le logement
                        $accomodation->addPicture($picture);

                        $em->persist($picture);

                        // The image is stored in a special folder and given the new name defined above.
                        $currentPicture->move($this->getParameter('accomodation_directory'), $pictureName);
                    }
                }


                $em->flush();

                return $this->json($accomodation->getId(), 201);
            }
            return $this->json('', 400);
        }

        return $this->json('', 403);
    }


    /**
     * @Route("/delete/accomodation/{id}", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function deleteAccomodation(Accomodation $accomodation, AccomodationRepository $accomodationRepository, UserInterface $user, EntityManagerInterface $em)
    {
        $accomodation = $accomodationRepository->find($accomodation->getId());
        //dd($accomodation);

        if ($user->getId() === $accomodation->getUser()->getId()) {
            $em->remove($accomodation);
            $em->flush();
            return $this->json('', 200);
        }
        return $this->json('', 403);
    }
}
