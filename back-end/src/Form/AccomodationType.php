<?php

namespace App\Form;

use App\Entity\Accomodation;
use App\Form\DataTransformer\ServiceTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AccomodationType extends AbstractType
{

    private $transformer;

    public function __construct(ServiceTransformer $transformer)
    {
        $this->transformer = $transformer;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
             ->add('title')
             ->add('capacity')
             ->add('description')
             ->add('price')
             ->add('adress')
             ->add('city')
             ->add('country')
             ->add('surface')
             ->add('nbNight')
             ->add('electricity')
             ->add('pipedWater')
             ->add('accessibility')
             ->add('smokers')
             ->add('animals')
             ->add('facebookLink')
             ->add('instagramLink')
             ->add('isValidated')
             ->add('createdAt')
             ->add('updatedAt')
             ->add('slugger')
             ->add('type')
             ->add('extra')
             ->add('service')
        ;

        //$builder->get('service')
          //  ->addModelTransformer($this->transformer);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Accomodation::class,
            // enable/disable CSRF protection for this form
            'csrf_protection' => false,
        ]);
    }
}