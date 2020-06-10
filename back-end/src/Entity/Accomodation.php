<?php

namespace App\Entity;

use App\Repository\AccomodationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ORM\Entity(repositoryClass=AccomodationRepository::class)
 * @ORM\HasLifecycleCallbacks
 */
class Accomodation
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
    private $title;

    /**
     * @ORM\Column(type="integer")
     */
    private $capacity;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $adress;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $city;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $latitude;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $longitude;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $surface;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbNight;

    /**
     * @ORM\Column(type="boolean")
     */
    private $electricity;

    /**
     * @ORM\Column(type="boolean")
     */
    private $pipedWater;

    /**
     * @ORM\Column(type="boolean")
     */
    private $accessibility;

    /**
     * @ORM\Column(type="boolean")
     */
    private $smokers;

    /**
     * @ORM\Column(type="boolean")
     */
    private $animals;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $facebookLink;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $instagramLink;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isValidated;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Type::class, inversedBy="accomodations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $type;

    /**
     * @ORM\ManyToMany(targetEntity=Extra::class, inversedBy="accomodations")
     */
    private $extra;

    /**
     * @ORM\ManyToMany(targetEntity=Service::class, inversedBy="accomodations")
     */
    private $service;

    /**
     * @ORM\OneToMany(targetEntity=Picture::class, mappedBy="accomodation", orphanRemoval=true)
     */
    private $picture;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="accomodations")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $slugger;

    /**
     * @ORM\OneToMany(targetEntity=Booking::class, mappedBy="accomodation", orphanRemoval=true)
     */
    private $bookings;

    public function __construct()
    {

        $this->extra = new ArrayCollection();
        $this->service = new ArrayCollection();
        $this->picture = new ArrayCollection();
        $this->bookings = new ArrayCollection();
 
        $this->createdAt = new \DateTime();
    }

    public function __toString()
    {
        $this->picture;
        $this->type;
        $this->user;
        $this->extra;
    }


    /**
     * @Groups({"search_result","accomodation_detail","authentified_user_account", "booking_accomodation"})
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getCapacity(): ?int
    {
        return $this->capacity;
    }

    public function setCapacity(int $capacity): self
    {
        $this->capacity = $capacity;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getAdress(): ?string
    {
        return $this->adress;
    }

    public function setAdress(string $adress): self
    {
        $this->adress = $adress;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getLatitude(): ?string
    {
        return $this->latitude;
    }

    public function setLatitude(?string $latitude): self
    {
        $this->latitude = $latitude;

        return $this;
    }

    public function getLongitude(): ?string
    {
        return $this->longitude;
    }

    public function setLongitude(?string $longitude): self
    {
        $this->longitude = $longitude;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getSurface(): ?int
    {
        return $this->surface;
    }

    public function setSurface(?int $surface): self
    {
        $this->surface = $surface;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getNbNight(): ?int
    {
        return $this->nbNight;
    }

    public function setNbNight(int $nbNight): self
    {
        $this->nbNight = $nbNight;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getElectricity(): ?bool
    {
        return $this->electricity;
    }

    public function setElectricity(bool $electricity): self
    {
        $this->electricity = $electricity;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getPipedWater(): ?bool
    {
        return $this->pipedWater;
    }

    public function setPipedWater(bool $pipedWater): self
    {
        $this->pipedWater = $pipedWater;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getAccessibility(): ?bool
    {
        return $this->accessibility;
    }

    public function setAccessibility(bool $accessibility): self
    {
        $this->accessibility = $accessibility;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getSmokers(): ?bool
    {
        return $this->smokers;
    }

    public function setSmokers(bool $smokers): self
    {
        $this->smokers = $smokers;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getAnimals(): ?bool
    {
        return $this->animals;
    }

    public function setAnimals(bool $animals): self
    {
        $this->animals = $animals;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getFacebookLink(): ?string
    {
        return $this->facebookLink;
    }

    public function setFacebookLink(?string $facebookLink): self
    {
        $this->facebookLink = $facebookLink;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getInstagramLink(): ?string
    {
        return $this->instagramLink;
    }

    public function setInstagramLink(?string $instagramLink): self
    {
        $this->instagramLink = $instagramLink;

        return $this;
    }

    /**
     * @Groups({"accomodation_detail"})
     */
    public function getIsValidated(): ?bool
    {
        return $this->isValidated;
    }

    public function setIsValidated(bool $isValidated): self
    {
        $this->isValidated = $isValidated;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getType(): ?Type
    {
        return $this->type;
    }


    public function setType(?Type $type): self
    {
        $this->type = $type;

        return $this;
    }

    /**
     * @return Collection|Extra[]
     * @Groups({"accomodation_detail"})
     */
    public function getExtra(): Collection
    {
        return $this->extra;
    }

    public function addExtra(Extra $extra): self
    {
        if (!$this->extra->contains($extra)) {
            $this->extra[] = $extra;
        }

        return $this;
    }

    public function removeExtra(Extra $extra): self
    {
        if ($this->extra->contains($extra)) {
            $this->extra->removeElement($extra);
        }

        return $this;
    }


    /**
     * @return Collection|Service[]
     * @Groups({"accomodation_detail"})
     */
    public function getService(): Collection
    {
        return $this->service;
    }

    public function addService(Service $service): self
    {
        if (!$this->service->contains($service)) {
            $this->service[] = $service;
        }

        return $this;
    }
    public function setServices(ArrayCollection $services): self
    {
        $this->service = $services;
        return $this;
    }

    public function removeService(Service $service): self
    {
        if ($this->service->contains($service)) {
            $this->service->removeElement($service);
        }

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     * @return Collection|Picture[]
     */
    public function getPicture(): Collection
    {
        return $this->picture;
    }

    public function addPicture(Picture $picture): self
    {
        if (!$this->picture->contains($picture)) {
            $this->picture[] = $picture;
            $picture->setAccomodation($this);
        }

        return $this;
    }

    public function removePicture(Picture $picture): self
    {
        if ($this->picture->contains($picture)) {
            $this->picture->removeElement($picture);
            // set the owning side to null (unless already changed)
            if ($picture->getAccomodation() === $this) {
                $picture->setAccomodation(null);
            }
        }

        return $this;
    }

    /**
     * @Groups({"accomodation_detail", "booking_accomodation"})
     */
    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getSlugger(): ?string
    {
        return $this->slugger;
    }

    public function setSlugger(string $slugger): self
    {
        $this->slugger = $slugger;

        return $this;
    }

    /**
     * @Groups({"booking_accomodation"})
     * @return Collection|Booking[]
     */
    public function getBookings(): Collection
    {
        return $this->bookings;
    }

    public function addBooking(Booking $booking): self
    {
        if (!$this->bookings->contains($booking)) {
            $this->bookings[] = $booking;
            $booking->setAccomodation($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->contains($booking)) {
            $this->bookings->removeElement($booking);
            // set the owning side to null (unless already changed)
            if ($booking->getAccomodation() === $this) {
                $booking->setAccomodation(null);
            }
        }

        return $this;
    }

    /**
     * @ORM\PreUpdate
     */
    public function onPreUpdate()
    {
        $this->updatedAt = new \DateTime();
    }
}

