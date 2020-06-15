<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
<<<<<<< HEAD
use Symfony\Component\Validator\Constraints as Assert;
=======
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 * @ORM\HasLifecycleCallbacks
 * @UniqueEntity(
 *     fields={"email"},
 *     message="Cet email est déjà associé à l'un de nos comptes utilisateur"
 * )
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     * @Assert\Email(
     *     message = "Merci de renseigner un email valide"
     * )
     * @Assert\NotBlank(
     *      message = "Merci de saisir votre email",
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     * @Assert\NotBlank(
     *      message = "Votre mot de passe ne peut pas être vide",
     * )
     * @Assert\Length(
     *      min = 8, 
     *      minMessage = "Veuillez saisir un mot de passe comprenant au minimum 8 caractères"
     * )
     */
    private $password;


    /**
     * @ORM\Column(type="string", length=255)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a
     *@Assert\Regex(
     *pattern="(^[a-zA-Z]+$)",
     *message="Le prénom ne peut contenir ni de caractères spéciaux, ni de chiffres"
     *)
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
     *@Assert\Regex(
     *pattern="(^[a-zA-Z-éèà]+$)",
     *message="Le prénom ne peut contenir ni de caractères spéciaux, ni de chiffres"
     *)
=======
     * @Assert\NotBlank(
     *      message = "Merci de renseigner votre prénom",
     * )
     * @Assert\Regex(
     *     pattern="/^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+$/",
     *     message="Votre prénom ne doit comporter que des lettres"
     * )
>>>>>>> 50d3e6c63afafac8e677b30e356ba4aac022f13b
>>>>>>> 89f5e4f5b47ef91fb1f64d39120f87bb316bdace
>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a
      *@Assert\Regex(
     *pattern="(^[a-zA-Z]+$)",
     *message="Le nom ne peut contenir ni de caractères spéciaux, ni de chiffres"
     *)
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      *@Assert\Regex(
     *pattern="(^[a-zA-Z-éèà]+$)",
     *message="Le nom ne peut contenir ni de caractères spéciaux, ni de chiffres"
     *)
=======
     * @Assert\NotBlank(
     *      message = "Merci de renseigner votre nom",
     * )
     * @Assert\Regex(
     *     pattern="/^[-'a-zA-ZÀ-ÖØ-öø-ÿ]+$/",
     *     message="Votre nom ne doit comporter que des lettres"
     * )
>>>>>>> 50d3e6c63afafac8e677b30e356ba4aac022f13b
>>>>>>> 89f5e4f5b47ef91fb1f64d39120f87bb316bdace
>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;
    
    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity=Accomodation::class, mappedBy="user", orphanRemoval=true)
     */
    private $accomodations;

    /**
     * @ORM\Column(type="string", length=255)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 89f5e4f5b47ef91fb1f64d39120f87bb316bdace
>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a
     *@Assert\Regex(
     *pattern="(^[a-z0-9A-Z]+$)",
     *message="Le pseudo ne peut pas contenir de caractères spéciaux"
     *)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
     * @Assert\NotBlank(
     *      message = "Merci de renseigner votre nom d'utilisateur",
     * )
     * @Assert\Regex(
     *     pattern="/^[-'a-zA-ZÀ-ÖØ-öø-ÿ0-9\s]+$/",
     *     message="Votre pseudo ne doit pas contenir de caractères spéciaux"
     * )
>>>>>>> 50d3e6c63afafac8e677b30e356ba4aac022f13b
>>>>>>> 89f5e4f5b47ef91fb1f64d39120f87bb316bdace
>>>>>>> ec44aa8341ad3e67f48df89eb682296acd5b014a
     */
    private $pseudo;

    /**
     * @ORM\OneToMany(targetEntity=Booking::class, mappedBy="user", orphanRemoval=true)

     */
    private $bookings;

    public function __construct()
    {
        $this->accomodations = new ArrayCollection();
        $this->createdAt = new \DateTime();
        $this->bookings = new ArrayCollection();
    }

    public function __toString()
    {
         $this->roles;
         $this->password;
        
    }

    /**
     * @Groups({"accomodation_detail","authentified_user_account","accomodation_owner", "booking_accomodation"})
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @Groups({"authentified_user_account"})
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * 
     * @Groups({"authentified_user_account"})
     *
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        //return array_unique($roles);
        return $this->roles;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(?string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    /**
     * @Groups({"authentified_user_account"})
     */
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * @Groups({"authentified_user_account"})
     */
    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * @Groups({"authentified_user_account","accomodation_owner"})
     */
    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

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
     * @Groups({"authentified_user_account", "booking_accomodation"})
     * @return Collection|Accomodation[]
     */
    public function getAccomodations(): Collection
    {
        return $this->accomodations;
    }

    public function addAccomodation(Accomodation $accomodation): self
    {
        if (!$this->accomodations->contains($accomodation)) {
            $this->accomodations[] = $accomodation;
            $accomodation->setUser($this);
        }

        return $this;
    }

    public function removeAccomodation(Accomodation $accomodation): self
    {
        if ($this->accomodations->contains($accomodation)) {
            $this->accomodations->removeElement($accomodation);
            // set the owning side to null (unless already changed)
            if ($accomodation->getUser() === $this) {
                $accomodation->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @Groups({"authentified_user_account","accomodation_owner"})
     */
    public function getPseudo(): ?string
    {
        return $this->pseudo;
    }

    public function setPseudo(?string $pseudo): self
    {
        $this->pseudo = $pseudo;

        return $this;
    }

    /**
     * @ORM\PreUpdate
     */
    public function onPreUpdate()
    {
        $this->updatedAt = new \DateTime();
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
            $booking->setUser($this);
        }

        return $this;
    }

    public function removeBooking(Booking $booking): self
    {
        if ($this->bookings->contains($booking)) {
            $this->bookings->removeElement($booking);
            // set the owning side to null (unless already changed)
            if ($booking->getUser() === $this) {
                $booking->setUser(null);
            }
        }

        return $this;
    }
}
