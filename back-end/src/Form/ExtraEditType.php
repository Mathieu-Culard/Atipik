<?php

namespace App\Form;

use App\Entity\Extra;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Validator\Constraints as Assert;

class ExtraEditType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name', null, [
                'required' => true,
                'constraints' => new Assert\NotBlank([
                 'message'=>'Le nom de l\'extra ne peut pas être vide',
            ])
            ])
            ->add('icon', FileType::class, [
                'required' => false,
                'mapped' => false, 
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
