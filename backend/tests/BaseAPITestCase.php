<?php declare(strict_types=1);

namespace App\Tests;

use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\ApiTestCase;
use ApiPlatform\Core\Bridge\Symfony\Bundle\Test\Client;
use Doctrine\Bundle\DoctrineBundle\Registry;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\SchemaTool;

abstract class BaseAPITestCase extends ApiTestCase
{
    protected static function createClient(array $kernelOptions = [], array $defaultOptions = []): Client
    {
        $client = parent::createClient($kernelOptions, $defaultOptions);

        /** @var Registry|null $doctrine */
        $doctrine = self::$kernel->getContainer()->get('doctrine');

        // Get the entity manager from the service container
        /** @var EntityManagerInterface $entityManager */
        $entityManager = $doctrine instanceof Registry ? $doctrine->getManager() : throw new \RuntimeException("Doctrine service not found.");

        // Run the schema update tool using our entity metadata
        $metadata = $entityManager->getMetadataFactory()->getAllMetadata();
        $schemaTool = new SchemaTool($entityManager);
        $schemaTool->updateSchema($metadata);

        return $client;
    }
}
