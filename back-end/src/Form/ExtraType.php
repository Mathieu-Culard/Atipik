<?php

namespace App\Form;

use App\Entity\Extra;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Validator\Constraints as Assert;

class ExtraType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'required' => false,
                'constraints' => new Assert\NotBlank([
                 'message'=>'Le nom de l\'extra ne peut pas être vide',
            ])
            ])
            ->add('icon', FileType::class, [
                'required' => false,
                'mapped' => false, 
                'constraints' => new Assert\NotBlank([
                    'message'=>'L\'icone est obligatoire',
               ])
           ])
              
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Extra::class,
        ]);
    }
}
