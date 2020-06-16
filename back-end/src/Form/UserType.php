<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Length;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('email', EmailType::class, [
                'required'=>false,
                'constraints' => new Email([
                    'message' => 'L\'adresse email est invalide'
                    ]),
            ])

            ->add('password', RepeatedType::class, [
                'invalid_message' => 'Le mot de passe doit être identique',
                'type' => PasswordType::class,
                'required' => true,
                'first_options' => ['label' => ' ','attr' => ['placeholder' => 'Veuillez saisir le mot de passe']],
                'second_options' => ['label' => ' ','attr' => ['placeholder' => 'Confirmer le mot de passe']],
                'constraints' => [
                    new NotBlank([
                        'normalizer' => 'trim',
                        'message' =>'Le mot de passe ne peut pas être vide'
                        
                    ]),
                    new Length([ 
                        'min' => 8,
                        'minMessage' => "Le mot de passe doit contenir 8 caractères minimum"

                       ])
                ]
            ])
            ->add('pseudo', null, [
              
                'label' => 'Pseudo',
                'required' => false,
                'constraints' => [
                    new NotBlank([
                        'normalizer' => 'trim',
                        'message' =>'Le pseudo ne peut pas être vide'
                        
                    ])
                    ]
                
            ])
            ->add('firstname', null, [
                'required'=>false,
                'label' => 'Prénom',
                'invalid_message' => "Le prénom ne peut contenir ni de caractères speciaux, ni de chiffres", 
                'constraints' => [
                    new NotBlank([
                        'normalizer' => 'trim',
                        'message' =>'Le prénom ne peut pas être vide'
                        
                    ])
                    ]
                
            ])
            ->add('lastname', null, [
                'required'=>false,
                'label' => 'Nom',
                'invalid_message' => "Le nom ne peut contenir ni de caractères speciaux, ni de chiffres", 
                'constraints' => [
                    new NotBlank([
                        'normalizer' => 'trim',
                        'message' =>'Le nom ne peut pas être vide'
                        
                    ])
                    ]
            ])
            
        ;
        //roles field data transformer
/*         $builder->get('roles')
            ->addModelTransformer(new CallbackTransformer(
        function ($rolesArray) {
         // transform the array to a string
         return count($rolesArray)? $rolesArray[0]: null;
         },
        function ($rolesString) {
         // transform the string back to an array
         return [$rolesString];
         }
        )); */
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
