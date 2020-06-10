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
                'constraints' => new Assert\NotBlank()
            ])
            ->add('description', null, [
                'constraints' => new Assert\NotBlank()
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
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Type::class, 
        ]);
    }
}
