<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Carbon;

use App\Models\VisitCount;
class CategoryController extends Controller
{
    public function AddCounter(int $id){
        try {
            $visit = new VisitCount();
            $visit->category_id = $id;
            $visit->save();
            
            return response()->json(['message' => 'Counter has been added for category '.$id]);
        } catch (Exception $e) {
            return response()->json(['error' => 'An error occurred while adding the counter.'], 500);
        }   
    }
   

public function getTopVisitedCategories(Request $request, $period = 'last-24-hours')
{
    $validPeriods = ['last-24-hours', 'last-week', 'last-month', 'last-year'];

    if (!in_array($period, $validPeriods)) {
        return response()->json(['error' => 'Invalid period specified.'], 400);
    }

    $now = Carbon::now();

    switch ($period) {
        case 'last-week':
            $start = $now->copy()->subWeek();
            break;
        case 'last-month':
            $start = $now->copy()->subMonth();
            break;
        case 'last-year':
            $start = $now->copy()->subYear();
            break;
        default: // last-24-hours
            $start = $now->copy()->subDay();
            break;
    }

    $topCategories = Category::withCount(['getCount as visit_count' => function ($query) use ($start, $now) {
        $query->whereBetween('created_at', [$start, $now]);
    }])
    ->orderByDesc('visit_count')
    ->limit(5)
    ->get();

    return response()->json(['top_categories' => $topCategories]);
}

}
