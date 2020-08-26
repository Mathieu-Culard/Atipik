<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AccomodationDeleteType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // We set up a form causing the deletion of an accomodation from the hosting validation page.
        $builder
        ->setMethod('DELETE')
        ->add('deleteButton', SubmitType::class, [
            'label' => 'Rejeter', 
            'attr' => [
                'class' => 'delete-button-validate',
            ]
        ])

        // We add an event that will be used for the deletion of an accomodation from the page listing all accomodations of the site
        ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
            // We retrieve the form to be able to manage the different inputs
            $form = $event->getForm();
            // We retrieve the url attached to the deletion of an accomodation
            $url = $_SERVER['REQUEST_URI'];

            // If the url corresponds to the one associated to the page displaying all the accomodations
            if ($url === '/admin/accomodations/') {
                // We delete the previously created button and we create a new one with different attributes. 
                $form ->remove('deleteButton')
                ->add('deleteButton', SubmitType::class, [
                    'label' => 'Supprimer', 
                    'attr' => [
                        'class' => 'deleteButton',
                    ]
                ])
                ;
            }
        })
    ;
           
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            //'data_class' => Accomodation::class,
            // Configure your form options here
        ]);
    }
}
