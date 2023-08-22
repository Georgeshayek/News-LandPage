<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories= [
            ['name' => 'News'],
            ['name' => 'Images'],
            ['name' => 'Sports'],
            ['name' => 'Videos'],
            ['name' => 'culture'],
        ];
        Category::insert($categories);
    }
}
