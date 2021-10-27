<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{    

    public function index() { 
        return redirect('customer');
     }

    function InsertSidebar(Request $request){  
        $profile=$request->input('profile'); 
        if($profile == ""){$profile = "Profile Information";}   
        $address=$request->input('address'); 
        if($address == ""){$address = "Manage Address";}   
        $gift=$request->input('gift');  
        if($gift == ""){$gift = "Gift Cards";}   
        $coupons=$request->input('coupons');
        if($coupons == ""){$coupons = "My Coupons";}   
        $store_url=$request->input('store_url'); 
        $all=array('admin_profile'=>$profile,'admin_address'=>$address ,'admin_gift'=>$gift,'admin_coupons'=>$coupons ,'store_url'=>$store_url);                 
        DB::table('admin_setting')->insert($all);
        return response()->json([
            'status'  => 200,
            'message' => 'Data inserted successfully',
        ]);        
        }


function profileupdate(Request $request,$id){        
$all=array('admin_profile'=>$request->input('profile'));                    
DB::table('admin_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'profile Update successfully',
]);        
}
function addressupdate(Request $request,$id){       
$all=array('admin_address'=>$request->input('address'));                    
DB::table('admin_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'address Update successfully',
]);        
}
function giftupdate(Request $request,$id){       
$all=array('admin_gift'=>$request->input('gift'));                    
DB::table('admin_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'gift Update successfully',
]);        
}
function couponsupdate(Request $request,$id){       
$all=array('admin_coupons'=>$request->input('coupons'));                    
DB::table('admin_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'coupons Update successfully',
]);        
}

// label update setting 

function InsertLabel(Request $request){  
    $fname=$request->input('fname'); 
    if($fname == ""){$fname = "First Name";}   
    $lname=$request->input('lname'); 
    if($lname == ""){$lname = "Last Name";}   
    $email=$request->input('email');  
    if($email == ""){$email = "Email";}      
    $store_url=$request->input('store_url'); 
    $all=array('fname'=>$fname,'lname'=>$lname ,'email'=>$email,'store_url'=>$store_url);                 
    DB::table('label_setting')->insert($all);
    return response()->json([
        'status'  => 200,
        'message' => 'Data inserted successfully',
    ]);        
    }


function fnameupdate(Request $request,$id){       
$all=array('fname'=>$request->input('fname'));                    
DB::table('label_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'coupons Update successfully',
]);        
}
function lnameupdate(Request $request,$id){       
$all=array('lname'=>$request->input('lname'));                    
DB::table('label_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'coupons Update successfully',
]);        
}
function emailupdate(Request $request,$id){       
$all=array('email'=>$request->input('email'));                    
DB::table('label_setting')->where('id',$id)->update($all);
return response()->json([
'status'  => 200,
'message' => 'coupons Update successfully',
]);        
}


function Sidebar(){ 
$data = DB::table('admin_setting')->get();
return response()->json([
'status'  => 200,
'data' => $data,
]);
}
function LabelSetting(){ 
    $data = DB::table('label_setting')->get();
    return response()->json([
    'status'  => 200,
    'data' => $data,
    ]);
    }
            

    public Function createField(){
        $filed = DB::table('admin_fields')->get();
        return response()->json([
            'status'  => 200,
            'filed' => $filed,
        ]);       
    }
    public Function GetData(){
        $profile = DB::table('admin_profile')->get();
        return response()->json([
            'status'  => 200,
            'profile' => $profile,
        ]);      
    }

    public function store(Request $request){  
        $shop_url=$request->input('shop_url');
        $fname=$request->input('fname');  
        if($fname == ''){$fname='';}      
        $lname=$request->input('lname');        
        if($lname == ''){$lname='';}
        $email=$request->input('email'); 
        if($email == ''){$email='';}                                
        $fields=$request->input('fields');         
        $input = array($fields);
        $fields= serialize($input);
        if($fields == ''){$fields='';}          
        $all=array('shop_url'=>$shop_url,'fname'=>$fname ,'lname'=>$lname,'email'=>$email ,'fields'=>$fields);                 
        DB::table('admin_profile')->insert($all);
        return response()->json([
            'status'  => 200,
            'message' => 'Data inserted successfully',
        ]);                    
    }

    public function field(Request $request){        
        $field=$request->input('field');
        $label=$request->input('label');
        $store_url=$request->input('store_url');    
        $all=array('field'=>$field,'label'=>$label,'store_url'=>$store_url);                 
        DB::table('admin_fields')->insert($all);  
        return response()->json([
            'status'  => 200,
            'message' => 'successfully',
        ]);
    }
     
    public function destroy($id){        
        DB::table('admin_fields')->where('id',$id)->delete();
        return response()->json([
            'status'  => 200,
            'message' => 'delete',
        ]); 
    }
}