<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function show()
    {
        return Inertia::render('Index');
    }
}
