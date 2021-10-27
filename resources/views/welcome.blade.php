@extends('shopify-app::layouts.default')
{{-- http://127.0.0.1:8000/authenticate?shop=electronicbiz.myshopify.com --}}
@section('content')
    <!-- You are: (shop domain name) -->
    {{-- <p>You are: {{ $shopDomain ?? Auth::user()->name }}</p> --}}
    <?php 
    //  $lara_customer_id = 5567851102371;
    //   $shop = Auth::user();
    //   $request = $shop->api()->rest('GET',"/admin/api/customers/$lara_customer_id.json");
    //   echo $request['body']['customer']['id'];   
      ?>
    <script>
        shopDomain = "{{ $shopDomain ?? Auth::user()->name }}";
        console.log("Loading....");
        UrlHttp ="http://127.0.0.1:8000/api";
    </script>
<div id="root"></div>
<script src="./js/app.js"></script>
@endsection
@section('scripts')
    @parent
    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection