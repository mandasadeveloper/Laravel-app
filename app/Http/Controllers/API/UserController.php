<?php

namespace App\Http\Controllers\API;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
class UserController extends Controller
{
    function register(Request $req){
        $user = new Admin;
        $user->name = $req->input('name');
        $user->email = $req->input('email');
        $user->password = Hash::make($req->input('password'));
        $user->save();
        return $user;
    }

function login(Request $req){
    $user = Admin::where('email',$req->email)->first();
    if(!$user || !Hash::check($req->password,$user->password)){
        return response()->json([          
            'error' => ['Email or password is not matched'],
        ]);       
    }
    return $user;
}
}
