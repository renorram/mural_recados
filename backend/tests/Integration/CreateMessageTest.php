<?php declare(strict_types=1);

namespace App\Tests\Integration;

use App\Tests\BaseAPITestCase;

class CreateMessageTest extends BaseAPITestCase
{
    public function testCanCreateAMessage(): void
    {
        $data = [
            'nickname' => 'hello',
            'text'     => 'hi'
        ];
        $r = static::createClient()->request(
            'POST',
            '/api/messages',
            [
                'headers' => ['Content-Type' => 'application/json', 'Accept' => 'application/json'],
                'body'    => json_encode($data)
            ],
        );

        $this->assertResponseIsSuccessful();
        $this->assertJsonContains(
            [
                'nickname' => $data['nickname'],
                'text'     => $data['text'],
            ]
        );
    }
}
