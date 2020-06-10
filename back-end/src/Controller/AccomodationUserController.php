<?php

namespace App\Controller;

use App\Entity\Accomodation;
use App\Entity\Extra;
use App\Entity\Picture;
use App\Entity\Service;
use App\Form\AccomodationType;
use App\Repository\AccomodationRepository;
use App\Repository\PictureRepository;
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

    /*     /**
     * @Route("/edit/accomodation/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST"} )
     
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
    } */

    /**
     * @Route("/edit/accomodation/{id}", name="edit", requirements={"id": "\d+"}, methods={"POST"} )
     */
    public function editAccomodation(AccomodationRepository $accomodationRepository, Accomodation $accomodation, Request $request, EntityManagerInterface $em, SluggerInterface $slugger, UserInterface $user, PictureRepository $pictureRepository)
    {
        $currentAccomodation = $accomodationRepository->find($accomodation->getId());

        // on stocke dans une variable le titre associé au logement pour un usage ultérieur
        //$titleInDb = $currentAccomodation->getTitle();


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

            if (isset($data['databasePic'])) {
                // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
                $databasePics = explode(',', $data['databasePic']);
            } else {
                // sinon on crée un tableau vide
                $databasePics = [];
            }

            // on supprime la propriété databasePic recue de l'utilisateur
            unset($data['databasePic']);


            // si au moins un service a bien été soumis
            if (isset($data['services'])) {
                // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
                $services = explode(',', $data['services']);
            } else {
                // sinon on crée un tableau vide
                $services = [];
            }

            // on supprime la propriété services recue de l'utilisateur
            unset($data['services']);

            // si au moins un extra a bien été soumis
            if (isset($data['extras'])) {
                // on decompose la chaine de caractere recue pour en faire un tableau et on la stocke dans une variable
                $extras = explode(',', $data['extras']);
            } else {
                // sinon on crée un tableau vide
                $extras = [];
            }

            // on supprime la propriété extras recue de l'utilisateur
            unset($data['extras']);

            $form->submit($data, false);

            //dd($form->isValid());
            if ($form->isValid()) {

                // on recupere les photos associées au projet
                $picsInDb = $pictureRepository->findByAccomodation($accomodation->getid());

                // on définit un slugger pour ce nouveau nom
                $sluggerTitle = $slugger->slug($form->get('title')->getData());

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
                    //dd($existingExtra);
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



                // si il y a des photos en base de données associée a cet hébergement
                if (isset($picsInDb) && $picsInDb !== []) {
                    // Récupération du chiffre le plus élévé attribué a un nom d'objet
                    // on recupere la liste des photo par ordre décroissant
                    $lastPic = $pictureRepository->findByAccomodationDes($accomodation->getid());
                    //dd($lastPic);
                    // on recupere le nom de l'entité la plus récente
                    $countName = $lastPic[0]->getName();
                    //dd($countName);
                    $position = strpos($countName, ".")-1;
                    //dd($position);
                    // on stocke '.' comme etant le caractere permettant la dissociation du texte et de l'extension
                    $point = strrpos($countName, ".");
                    //dd($position, $point);
                    // on decoupe notre chaine de caractere pour récuperer ce qu'on trouve apres le dernier point
                    $count = (substr($countName, $point-1, $point-$position)) ;
                    //dd($count);
                    // on decoupe encore notre chaine de caractere pour récuperer le titre qui sera attribué aux nouvelles photos pour rester coherents
                    $title = substr($countName, 0, $point - 1);
                    // pour chacune des photos
                    foreach ($picsInDb as $currentPicInDb) {
                        // on attribue a l'image une variable $remove a true
                        $remove = true;
                        // on récupère le nom
                        $picTitle = $currentPicInDb->getName();
                        // on récupere le nom des photos deja présentes pour l'hébergement et transmises depuis le front et on boucle sur le tableau
                        foreach ($databasePics as $databaseCurrentPic) {
                            // si les deux photos ont le meme nom
                            if ($databaseCurrentPic === $picTitle) {
                                // $remove passe a false
                                $remove = false;
                            }
                        }
                        // si $remove=true alors on supprime l'image de la base
                        if ($remove) {
                            $accomodation->removePicture($currentPicInDb);
                        }
                    }
                    //dd($accomodation->getPicture());
                    
                    
                    if (isset($request->files->all()['pictures'])) {
                        // Pour chacune des images
                        foreach ($pictures as $currentPicture) {
                            // We retrieve the extension of the transmitted image file
                            $extension = $currentPicture->getClientOriginalExtension();
                            // We rename the image file so that it follows a standard
                            $pictureName = $title . $count++ . '.' . $extension;
                            // on crée un nouvel objet Picture
                            $picture = new Picture();
                            // on attribue a la photo son nouveau nom
                            $picture->setName($pictureName);
                            // on met la propriété main a false car elle existe deja
                            $picture->setMain(false);
                            // on ajoute l'objet en lien avec le logement
                            $accomodation->addPicture($picture);
                            // on met a jour la base de donnée
                            $em->persist($picture);
                            // The image is stored in a special folder and given the new name defined above.
                            $currentPicture->move($this->getParameter('accomodation_directory'), $pictureName);
                        }
                    }
                } else {
                    $newCount = 0;
                    if (isset($request->files->all()['pictures'])) {
                        // Pour chacune des images
                        foreach ($pictures as $newPicture) {
                            
                            // We retrieve the extension of the transmitted image file
                            $extension = $newPicture->getClientOriginalExtension();
                            // We rename the image file so that it follows a standard
                            $pictureName = $sluggerTitle . $newCount++ . '.' . $extension;
                            // on stocke dans une variable le nom qu'aura la premiere image
                            $mainPicture = $sluggerTitle . '0.' . $extension;
                            // on crée une nouvelle Picture
                            $picture = new Picture();
                            // on attribue a la photo son nouveau nom
                            $picture->setName($pictureName);
                            //dd($picture);
                            // si le nom de l'image est le meme que celui de l'image principale
                            if ($pictureName === $mainPicture) {
                                //dd('ok');
                                // alors on met la propriété correspondant a l'image principale a true
                                $picture->setMain(true);
                            } else {
                                //dd('nope');
                                // sinon on la met a false
                                $picture->setMain(false);
                            }
                            // on ajoute l'objet en lien avec le logement
                            $accomodation->addPicture($picture);

                            $em->persist($picture);
                            // The image is stored in a special folder and given the new name defined above.
                            $newPicture->move($this->getParameter('accomodation_directory'), $pictureName);
                        }
                    }
                }



                /*                 if ($titleInDb !== $accomodation->getTitle()) {
                    // on met a jour le titre
                    $accomodation->setSlugger($sluggerTitle);
                    //dd($picsInDb);
                    $count = 0;
                    if (isset($picsInDb) && $picsInDb !== []) {
                        //dd('ok');
                        foreach ($picsInDb as $currentPicInDb) {
                            // on stocke le nom de notre image dans une variable
                            $picName = $currentPicInDb->getName();
                            // on stocke '.' comme etant le caractere permettant la dissociation du texte
                            $start = strrpos($picName, ".");
                            // on decoupe notre chaine de caractere pour récuperer ce qu'on trouve apres le dernier point
                            $extension = substr($picName, $start, 255);
                            // on crée un nouveau nom de fichier
                            $newName = $sluggerTitle . $count++ . $extension;
                            // on met a jour le nom de la photo
                            $currentPicInDb->setName($newName);
                        }
                    }
                } */

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
