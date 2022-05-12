<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function GetCategories(): JsonResponse
    {
        try {
            return response()->json(Category::all());
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
}
