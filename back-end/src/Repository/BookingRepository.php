<?php

namespace App\Repository;

use App\Entity\Booking;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Booking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Booking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Booking[]    findAll()
 * @method Booking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BookingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Booking::class);
    }

    // /**
    //  * @return Booking[] Returns an array of Booking objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

      public function findByAccomodations($id): ?Booking
    {
        $qb = $this->createQueryBuilder('b');
         $qb->where('b.accomodation = :accomodation')
            ->setParameter('accomodation', $id);
           return $qb->getQuery()->getResult();
            // ->getQuery()
            // ->getResult()
        ;
    }

    
    // public function findByEntranceDate($entranceDate): ?Booking
    // {
    //     return $this->createQueryBuilder('b')
    //         ->andWhere('b.entrance = :entryDate')
    //         ->setParameter('entryDate', $entranceDate)
    //         ->getQuery()
    //         ->getOneOrNullResult()
    //     ;
    // }

    // public function findByDepartDate($departDate): ?Booking
    // {
    //     return $this->createQueryBuilder('b')
    //         ->andWhere('b.departure = :departDate')
    //         ->setParameter('departDate', $departDate)
    //         ->getQuery()
    //         ->getOneOrNullResult()
    //     ;
    // }
    
}
