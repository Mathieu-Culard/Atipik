<?php

namespace App\Form;

use App\Entity\Type;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Validator\Constraints as Assert;

class FormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // We set up the form for the edition of a type of accommodation
        $builder
            ->add('name', null, [
                'required' => true,
            ])
            ->add('description', null, [
                'required' => true,
            ])

            ->add('picture', FileType::class, [
                'data_class' => null,
                'required' => false,
                'mapped' => false,
            ])

            ->add('icon', FileType::class, [
                'data_class' => null,
                'required' => false,
                'mapped' => false,
            ])
            ->add('thematic')

            // We add an event that will be used for the creation of a new type of accommodation
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                // We retrieve the form to be able to manage the different inputs
                $form = $event->getForm();
                // We retrieve the url attached to the creation of a type
                $url = $_SERVER['REQUEST_URI'];

                // If the url matches the one associated with the creation of an extra
                if ($url === '/admin/type/add') {
                    // We remove the old fields from the form and define the new ones with the right properties
                    $form->remove('name')
                        ->add('name', null, [
                            'required' => false,
                        ])
                        ->remove('description')
                        ->add('description', null, [
                            'required' => false,
                        ])
                        ->remove('picture')
                        ->add('picture', FileType::class, [
                            'data_class' => null,
                            'required' => false,
                            'mapped' => false,
                            'constraints' => new Assert\NotBlank([
                                'message' => 'L\'image ne peut pas être vide',
                            ])
                        ])
                        ->remove('icon')
                        ->add('icon', FileType::class, [
                            'data_class' => null,
                            'required' => false,
                            'mapped' => false,
                            'constraints' => new Assert\NotBlank([
                                'message' => 'L\'icone ne peut pas être vide',
                            ])

                        ]);
                }
            });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Type::class,
        ]);
    }
}
