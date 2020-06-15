<?php

namespace App\Form;

use App\Entity\Type;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints as Assert;

class FormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'required' => false,
                'constraints' => [
                    new Assert\NotBlank([
                        'message' => 'Le nom du type ne peut pas être vide',
                    ]),
                    new Assert\Regex([
                        'pattern' => "/^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/",
                        'message' => "Votre adresse ne doit pas contenir de caractère spéciaux"
                    ]),
                ] 
            ])
            ->add('description', null, [
                'required' => false,
                'constraints' => new Assert\NotBlank([
                    'message' => 'La description du type ne peut pas être vide',
                ])
            ])
            ->add('picture', FileType::class, [
                'data_class' => null,
                'required' => false,
                'mapped' => false,
                // 'constraints' => new Assert\NotBlank([
                //     'message'=>'L\'image ne peut pas être vide',
                //      ])

            ])
            ->add('icon', FileType::class, [
                'data_class' => null,
                'required' => false,
                'mapped' => false,
                //  'constraints' => new Assert\NotBlank([
                //     'message'=>'L\'icone ne peut pas être vide',
                //      ])

            ])
            ->add('thematic');
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Type::class,
        ]);
    }
}
