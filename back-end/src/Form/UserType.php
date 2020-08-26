<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Constraints\NotBlank;


class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        // We have set up the form for editing a user account
        $builder
            ->add('firstname', TextType::class, [
                'required' => false,
            ])
            ->add('lastname', TextType::class, [
                'required' => false,
            ])
            ->add('password', PasswordType::class, [
                'required' => false,
            ])
            ->add('pseudo', TextType::class, [
                'required' => false,
            ])
            ->add('avatar', FileType::class, [
                'data_class' => null,
                'mapped' => true,
                'required' => false,
            ])

            // We add a listener that will allow us to use the same form for two different actions
            ->addEventListener(FormEvents::PRE_SET_DATA, function (FormEvent $event) {
                // In $event, you can dissociate the data related to the form from the data related to the user.
                $form = $event->getForm();
                $user = $event->getData();

                // If the id is null, then it means that a new user is created.
                if ($user->getId() === null) {
                    $form->add('email', EmailType::class, [
                        'required' => false,
                    ])
                        ->remove('password')
                        ->add('password', RepeatedType::class, [
                            'invalid_message' => 'Le mot de passe doit être identique',
                            'type' => PasswordType::class,
                            'required' => true,
                            'first_options' => ['label' => ' ', 'attr' => ['placeholder' => 'Veuillez saisir le mot de passe']],
                            'second_options' => ['label' => ' ', 'attr' => ['placeholder' => 'Confirmer le mot de passe']],
                        ])
                        ->remove('pseudo')
                        ->add('pseudo', null, [
                            'label' => 'Pseudo',
                            'required' => false,
                            'constraints' => [
                                new NotBlank([
                                    'normalizer' => 'trim',
                                    'message' => 'Le pseudo ne peut pas être vide'
                                ])
                            ]
                        ])
                        ->remove('firstname')
                        ->add('firstname', null, [
                            'required' => false,
                            'label' => 'Prénom',
                            'invalid_message' => "Le prénom ne peut contenir ni de caractères speciaux, ni de chiffres",
                            'constraints' => [
                                new NotBlank([
                                    'normalizer' => 'trim',
                                    'message' => 'Le prénom ne peut pas être vide'
                                ])
                            ]
                        ])
                        ->remove('lastname')
                        ->add('lastname', null, [
                            'required' => false,
                            'label' => 'Nom',
                            'invalid_message' => "Le nom ne peut contenir ni de caractères speciaux, ni de chiffres",
                            'constraints' => [
                                new NotBlank([
                                    'normalizer' => 'trim',
                                    'message' => 'Le nom ne peut pas être vide'

                                ])
                            ]
                        ])
                        ->remove('avatar');
                }
            });
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
            'csrf_protection' => false,
        ]);
    }
}
