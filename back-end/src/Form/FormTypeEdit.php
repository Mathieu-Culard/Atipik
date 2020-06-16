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

class FormTypeEdit extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('name', null, [
            'required'=>true,
            'constraints' => new Assert\NotBlank([
            'message'=>'Le nom du type ne peut pas être vide',
             ])
        ])
        ->add('description', null, [
            'required'=>true,
            'constraints' => new Assert\NotBlank([
                'message'=>'La description du type ne peut pas être vide',
                ])
            ])

            ->add('picture', FileType::class, [
                'data_class'=>null,
                'required' => false,
                'mapped' => false,
                ]) 
                
            ->add('icon', FileType::class, [
                 'data_class' => null,
                 'required' => false,
                 'mapped' => false, 
    
            ])
            ->add('thematic')

            // ->addEventListener(FormEvents::PRE_SET_DATA, function (formEvent $event){
            //     $form = $event->getForm();
            //     $type = $event->getData();
                
            //     if ($type->getName() === null){
            //         $form->add('name', null, [
            //             'required'=>false,
            //             'constraints' => new Assert\NotBlank([
            //              'message'=>'Le nom du type ne peut pas être vide',
            //               ])
            //         ]);
            //     }
            //     if ($type->getDescription() === null){
            //         $form->add('description', null, [
            //             'required'=>false,
            //             'constraints' => new Assert\NotBlank([
            //              'message'=>'La descritpion du type ne peut pas être vide',
            //               ])
            //         ]);
            //     }
            //     if ($type->getPicture() === null){
            //         $form->add('picture', FileType::class, [
            //             'data_class'=>null,
            //             'required' => false,
            //             'mapped' => false, 
            //             'constraints' => new Assert\NotBlank([
            //                 'message'=>'L\'image ne peut pas être vide',
            //                  ])
                       
            //         ]);
            //     }

            //     if ($type->getIcon() === null){
            //         $form->add('icon', FileType::class, [
            //             'data_class'=>null,
            //             'required' => false,
            //             'mapped' => false, 
            //             'constraints' => new Assert\NotBlank([
            //                 'message'=>'L\'icone ne peut pas être vide',
            //                  ])
                       
            //         ]);
            //     }
            // })
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Type::class, 
        ]);
    }
}
