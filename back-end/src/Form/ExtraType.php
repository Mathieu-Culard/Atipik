<?php

namespace App\Form;

use App\Entity\Extra;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class ExtraType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // We are setting up the form for the edition of an extra
        $builder
            ->add('name', null, [
                'required' => true,
            ])
            ->add('icon', FileType::class, [
                'required' => false,
                'mapped' => false,
            ])

            // We add an event that will be used for the creation of a new extra
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                // We retrieve the form to be able to manage the different inputs
                $form = $event->getForm();
                // We retrieve the url attached to the creation of an extra
                $url = $_SERVER['REQUEST_URI'];

                // If the url matches the one associated with the creation of an extra
                if ($url === '/admin/extras/add') {
                    // We remove the old fields from the form and define the new ones with the right properties
                    $form->remove('name')
                        ->add('name', null, [
                            'required' => false,
                        ])
                        ->remove('icon')
                        ->add('icon', FileType::class, [
                            'required' => false,
                            'mapped' => false,
                            'constraints' => new Assert\NotBlank([
                                'message' => 'L\'icone est obligatoire',
                            ])
                        ]);
                }
            });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Extra::class,
        ]);
    }
}
