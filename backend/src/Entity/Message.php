<?php declare(strict_types=1);

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use DateTimeImmutable;
use DateTimeInterface;
use Doctrine\ORM\Mapping as ORM;
use Ramsey\Uuid\Uuid;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[ApiResource]
/**
 * @ORM\Entity
 * @ORM\HasLifecycleCallbacks()
 */
class Message
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="uuid", unique=true)
     */
    #[Assert\Uuid]
    private UuidInterface $code;

    /**
     * @var string
     * @ORM\Column(type="string", length=100)
     */
    #[Assert\NotBlank]
    #[Assert\Length(max: 100)]
    private string $nickname = '';


    /**
     * @ORM\Column(type="text")
     */
    #[Assert\NotBlank]
    private string $text = '';

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    #[Assert\DateTime]
    private DateTimeInterface $createdAt;

    /**
     * @ORM\PrePersist
     */
    public function setDefaultCreationValues(): void
    {
        $this->createdAt = new DateTimeImmutable();
        $this->code = Uuid::uuid4();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return UuidInterface
     */
    public function getCode(): UuidInterface
    {
        return $this->code;
    }

    /**
     * @return string
     */
    public function getNickname(): string
    {
        return $this->nickname;
    }

    /**
     * @param string $nickname
     * @return Message
     */
    public function setNickname(string $nickname): Message
    {
        $this->nickname = $nickname;
        return $this;
    }

    /**
     * @return string
     */
    public function getText(): string
    {
        return $this->text;
    }

    /**
     * @param string $text
     * @return Message
     */
    public function setText(string $text): Message
    {
        $this->text = $text;
        return $this;
    }

    /**
     * @return DateTimeInterface
     */
    public function getCreatedAt(): DateTimeInterface
    {
        return $this->createdAt;
    }
}
