<?php

namespace App\Entity;

use App\Repository\BookingRepository;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=BookingRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Booking
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $entrance;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $departure;

    /**
     * @ORM\ManyToOne(targetEntity=Accomodation::class, inversedBy="bookings")
     * @ORM\JoinColumn(nullable=false)
     */
    private $accomodation;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="bookings")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

     /**
     * @Groups({"booking_accomodation"})
     * */
    public function getId(): ?int
    {
        return $this->id;
    }

   /**
     * @Groups({"booking_accomodation"})
     * */
    public function getEntrance(): ?string
    {
        return $this->entrance;
    }
    
    public function setEntrance(string $entrance): self
    {
        $this->entrance = $entrance;

        return $this;
    }
    
   /**
     * @Groups({"booking_accomodation"})
     * */
    public function getDeparture(): ?string
    {
        return $this->departure;
    }

    public function setDeparture(string $departure): self
    {
        $this->departure = $departure;

        return $this;
    }

    /**
     * @Groups({"booking_accomodation"})
     * */
    public function getAccomodation(): ?Accomodation
    {
        return $this->accomodation;
    }

    public function setAccomodation(?Accomodation $accomodation): self
    {
        $this->accomodation = $accomodation;

        return $this;
    }

    /**
     * @Groups({"booking_accomodation"})
     * */
    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
