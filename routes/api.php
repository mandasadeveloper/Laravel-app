<?php
use App\Http\Controllers\API\ProfileController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Route :: delete('delete/{id}',[ProfileController::class, 'destroy']);
Route :: get('demo',[ProfileController::class, 'createField']);
Route :: get('profile-data',[ProfileController::class, 'GetData']);
Route :: get('url',[ProfileController::class, 'Url_store']);
Route :: post('field',[ProfileController::class, 'field']);
Route :: post('profile',[ProfileController::class, 'store']);
Route :: post('profile-update/{id}',[ProfileController::class, 'profileupdate']);
Route :: post('address-update/{id}',[ProfileController::class, 'addressupdate']);
Route :: post('gift-update/{id}',[ProfileController::class, 'giftupdate']);
Route :: post('coupons-update/{id}',[ProfileController::class, 'couponsupdate']);
Route :: post('fname-update/{id}',[ProfileController::class, 'fnameupdate']);
Route :: post('lname-update/{id}',[ProfileController::class, 'lnameupdate']);
Route :: post('email-update/{id}',[ProfileController::class, 'emailupdate']);
Route :: post('insert-sidebar',[ProfileController::class, 'InsertSidebar']);
Route :: post('insert-label',[ProfileController::class, 'InsertLabel']);
Route :: get('sidebar',[ProfileController::class, 'Sidebar']);
Route :: get('label-setting',[ProfileController::class, 'LabelSetting']);
Route :: get('get-customer',[ProfileController::class, 'index']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
