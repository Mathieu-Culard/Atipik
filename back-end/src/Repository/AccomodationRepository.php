<?php

namespace App\Repository;

use App\Entity\Accomodation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Accomodation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Accomodation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Accomodation[]    findAll()
 * @method Accomodation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AccomodationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Accomodation::class);
    }

    public function findbyFilters($filters)
    {
        $qb = $this->createQueryBuilder('a');

        // We apply the filters one after the other

        if (isset($filters->types) && count($filters->types)> 0){
            $type = $filters->types;
            $qb->where("a.type = ".$type[0]);

            // if there's other types
            for($i = 1;$i < count($type);$i++) {
               $qb->orWhere('a.type = '. $type[$i].' ');
            }
        }

        if (isset($filters->capacity)) {
            $capacity = $filters->capacity;
            $qb->andWhere('a.capacity >= :capacity')
                ->setParameter('capacity',$capacity);
        }

        if (isset($filters->nb_night)) {
            $nbNight = $filters->nb_night;
            $qb->andWhere('a.nbNight <= :nbNight')
                ->setParameter('nbNight',$nbNight);
        }

        if (isset($filters->city)) {
            $city = $filters->city;
            $qb->andWhere('a.city = :city')
                ->setParameter('city',$city);
        }

        if (isset($filters->country)) {
            $country = $filters->country;
            $qb->andWhere('a.country = :country')
                ->setParameter('country',$country);
        }

        if (isset($filters->max_price)) {
            $price = $filters->max_price;
            $qb->andWhere('a.price <= :price')
                ->setParameter('price',$price);
        }

        if (isset($filters->min_surface)) {
            $surface = $filters->min_surface;
            $qb->andWhere('a.surface >= :surface')
                ->setParameter('surface',$surface);
        }

        if (isset($filters->electricity)) {
            $electricity = $filters->electricity;
            $qb->andWhere('a.electricity = :electricity')
                ->setParameter('electricity',$electricity);
        }

        if (isset($filters->piped_water)) {
            $water = $filters->piped_water;
            $qb->andWhere('a.pipedWater = :water')
                ->setParameter('water',$water);
        }

        if (isset($filters->apmr)) {
            $apmr = $filters->apmr;
            $qb->andWhere('a.accessibility = :apmr')
                ->setParameter('apmr',$apmr);
        }

        if (isset($filters->animals)) {
            $animals = $filters->animals;
            $qb->andWhere('a.animals = :animals')
                ->setParameter('animals',$animals);
        }

        if (isset($filters->smokers)) {
            $smokers = $filters->smokers;
            $qb->andWhere('a.smokers = :smokers')
                ->setParameter('smokers',$smokers);
        }

        $qb->andWhere('a.isValidated = 1');


        return $qb->getQuery()->getResult();

    }

    public function findByValidateStatus()
    {
        return $this->createQueryBuilder('a')
                    ->orderBy('a.createdAt','ASC')
                    ->where('a.isValidated = 0')
                    ->getQuery()
                    ->getResult();

    }

    // /**
    //  * @return Accomodation[] Returns an array of Accomodation objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Accomodation
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
