<?php

namespace App\Entity;

use App\Repository\PictureRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PictureRepository::class)
 */
class Picture
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
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    private $main;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Accomodation::class, inversedBy="picture")
     * @ORM\JoinColumn(nullable=false)
     */
    private $accomodation;

    public function __toString()
    {
        return $this->name;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @Groups({"search_result","accomodation_detail"})
     */
    public function getMain(): ?bool
    {
        return $this->main;
    }

    public function setMain(bool $main): self
    {
        $this->main = $main;

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

    public function getAccomodation(): ?Accomodation
    {
        return $this->accomodation;
    }

    public function setAccomodation(?Accomodation $accomodation): self
    {
        $this->accomodation = $accomodation;

        return $this;
    }
}
