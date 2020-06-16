<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200525091209 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE thematic (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE extra (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, icon VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, username VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, role VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, traveller_type VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE service (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, icon VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE type (id INT AUTO_INCREMENT NOT NULL, thematic_id INT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, picture VARCHAR(255) NOT NULL, icon VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_8CDE57292395FCED (thematic_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE picture (id INT AUTO_INCREMENT NOT NULL, accomodation_id INT NOT NULL, name VARCHAR(255) NOT NULL, main TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_16DB4F89FD70509C (accomodation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE accomodation (id INT AUTO_INCREMENT NOT NULL, type_id INT NOT NULL, user_id INT NOT NULL, title VARCHAR(255) NOT NULL, capacity INT NOT NULL, description LONGTEXT NOT NULL, price INT NOT NULL, adress VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, country VARCHAR(255) NOT NULL, latitude VARCHAR(255) DEFAULT NULL, longitude VARCHAR(255) DEFAULT NULL, surface INT DEFAULT NULL, nb_night INT NOT NULL, electricity TINYINT(1) NOT NULL, piped_water TINYINT(1) NOT NULL, accessibility TINYINT(1) NOT NULL, smokers TINYINT(1) NOT NULL, animals TINYINT(1) NOT NULL, facebook_link VARCHAR(255) DEFAULT NULL, instagram_link VARCHAR(255) DEFAULT NULL, is_validated TINYINT(1) NOT NULL, created_at DATETIME NOT NULL, updated_at DATETIME DEFAULT NULL, INDEX IDX_520D81B3C54C8C93 (type_id), INDEX IDX_520D81B3A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE accomodation_extra (accomodation_id INT NOT NULL, extra_id INT NOT NULL, INDEX IDX_4A8D3B03FD70509C (accomodation_id), INDEX IDX_4A8D3B032B959FC6 (extra_id), PRIMARY KEY(accomodation_id, extra_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE accomodation_service (accomodation_id INT NOT NULL, service_id INT NOT NULL, INDEX IDX_1D80C4D8FD70509C (accomodation_id), INDEX IDX_1D80C4D8ED5CA9E6 (service_id), PRIMARY KEY(accomodation_id, service_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE type ADD CONSTRAINT FK_8CDE57292395FCED FOREIGN KEY (thematic_id) REFERENCES thematic (id)');
        $this->addSql('ALTER TABLE picture ADD CONSTRAINT FK_16DB4F89FD70509C FOREIGN KEY (accomodation_id) REFERENCES accomodation (id)');
        $this->addSql('ALTER TABLE accomodation ADD CONSTRAINT FK_520D81B3C54C8C93 FOREIGN KEY (type_id) REFERENCES type (id)');
        $this->addSql('ALTER TABLE accomodation ADD CONSTRAINT FK_520D81B3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE accomodation_extra ADD CONSTRAINT FK_4A8D3B03FD70509C FOREIGN KEY (accomodation_id) REFERENCES accomodation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE accomodation_extra ADD CONSTRAINT FK_4A8D3B032B959FC6 FOREIGN KEY (extra_id) REFERENCES extra (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE accomodation_service ADD CONSTRAINT FK_1D80C4D8FD70509C FOREIGN KEY (accomodation_id) REFERENCES accomodation (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE accomodation_service ADD CONSTRAINT FK_1D80C4D8ED5CA9E6 FOREIGN KEY (service_id) REFERENCES service (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE type DROP FOREIGN KEY FK_8CDE57292395FCED');
        $this->addSql('ALTER TABLE accomodation_extra DROP FOREIGN KEY FK_4A8D3B032B959FC6');
        $this->addSql('ALTER TABLE accomodation DROP FOREIGN KEY FK_520D81B3A76ED395');
        $this->addSql('ALTER TABLE accomodation_service DROP FOREIGN KEY FK_1D80C4D8ED5CA9E6');
        $this->addSql('ALTER TABLE accomodation DROP FOREIGN KEY FK_520D81B3C54C8C93');
        $this->addSql('ALTER TABLE picture DROP FOREIGN KEY FK_16DB4F89FD70509C');
        $this->addSql('ALTER TABLE accomodation_extra DROP FOREIGN KEY FK_4A8D3B03FD70509C');
        $this->addSql('ALTER TABLE accomodation_service DROP FOREIGN KEY FK_1D80C4D8FD70509C');
        $this->addSql('DROP TABLE thematic');
        $this->addSql('DROP TABLE extra');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE service');
        $this->addSql('DROP TABLE type');
        $this->addSql('DROP TABLE picture');
        $this->addSql('DROP TABLE accomodation');
        $this->addSql('DROP TABLE accomodation_extra');
        $this->addSql('DROP TABLE accomodation_service');
    }
}
