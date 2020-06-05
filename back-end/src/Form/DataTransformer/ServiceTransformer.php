<?php

namespace App\Form\DataTransformer;

use App\Entity\Service;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class ServiceTransformer implements DataTransformerInterface
{
    private $entityManager;

    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Transforms an object (service) to a string (number).
     *
     * @param  Service|null $issue
     * @return string
     */
    public function transform($services)
    {
      
       
        if ( count($services) === 0) {
            return '';
        }
        $servicesList = "[";
        foreach($services as $service){
            $servicesList .= ','.$service->getId();
        };
        $servicesList .= "]";
        return $servicesList;
    }

    /**
     * Transforms a string (number) to an object (service).
     *
     * @param  string $serviceNumber
     * @return Service|null
     * @throws TransformationFailedException if object (issue) is not found.
     */
    public function reverseTransform($servicesNumber)
    { 
        // no issue number? It's optional, so that's ok
        if (!$servicesNumber === '') {
            return;
        }
        $servicesCollection   = new Collection();
        foreach(json_decode($servicesNumber) as $serviceId){
           
            $service = $this->entityManager
            ->getRepository(Service::class)
            // query for the issue with this id
            ->find($serviceId);
            if($service) $servicesCollection->add($service);
        
        }
        return $servicesCollection;
    }
}
