<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitCount extends Model
{
    use HasFactory;
    protected $fillable = ['category_id'];
    public function getCategory()
    {
        return $this->belongsTo(Category::class);
    }
}
