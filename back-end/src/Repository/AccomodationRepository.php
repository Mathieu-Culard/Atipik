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

    /**
     * Method for displaying the list of accomodations by capacity
     *
     * @return Accomodation[]
     */
    public function findAllByCapacity($capacity) 
    {
        $qb = $this->createQueryBuilder('a')
                    ->where('a.capacity >= :capacity AND a.isValidated = 1' )
                    ->setParameter('capacity', $capacity)
                    ;
                    return $qb->getQuery()->getResult();
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
