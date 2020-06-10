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
                'constraints' => [
                    new Email()
                ]
            ])
/*             ->add('roles', ChoiceType::class,[
                'multiple' => false,
                'choices' => [ 
                     'Administrateur' => 'ROLE_ADMIN',
                     ]
                
            ] ) */
            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'required' => true,
                'first_options' => ['label' => ' ','attr' => ['placeholder' => 'Veuillez saisir le mot de passe']],
                'second_options' => ['label' => ' ','attr' => ['placeholder' => 'Confirmer le mot de passe']],
                'constraints' => [
                    new NotBlank([
                        'normalizer' => 'trim',
                    ]),
                ]

            ])
            ->add('pseudo', null, [
                'label' => 'Pseudo',
            ])
            ->add('firstname', null, [
                'label' => 'Prénom',
            ])
            ->add('lastname', null, [
                'label' => 'Nom',
            ])
 /*            ->add('avatar', FileType::class, [
                'required' => false,
              ])
            */
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
