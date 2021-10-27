@extends('shopify-app::layouts.default')
@section('content')
    <?php 
     $lara_customer_id = 5567851102371;
      $shop = Auth::user();
      $request = $shop->api()->rest('GET',"/admin/api/customers/$lara_customer_id.json");
      echo $request['body']['customer']['id'];  
    ?>
    <div id="root"></div>
    <script src="./js/Script_tag.js"></script>
@endsection
@section('scripts')
    @parent
    <script>
        actions.TitleBar.create(app, { title: 'Customer' });
    </script>
@endsection