<?php

namespace App\Form;

use App\Entity\Accomodation;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DeleteValidationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->setMethod('DELETE')
        ->add('deleteButton', SubmitType::class, [
            'label' => 'Rejeter', 
            'attr' => [
                'class' => 'deleteButtonAccomodation',
            ]
        ])
    ;
           
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Accomodation::class,
        ]);
    }
}
