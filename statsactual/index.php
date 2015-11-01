<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html ng-app="StatsApp" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Scholastic Statistical Reporting</title>
<link rel="stylesheet" type="text/css" href="./css/statsrep5/normalize.css"/>
<link href="./css/statsrep5/global.css" rel="stylesheet" type="text/css" />

<!-- Tablet -->
<link href="./css/statsrep5/tablet.css" rel="stylesheet" type="text/css" media="only screen and (min-device-width: 768px)" />
<!-- Desktop -->
<link href="./css/statsrep5/desktop.css" rel="stylesheet" type="text/css" media="only screen and (min-device-width:1024px)" />
<link href="./css/statsrep5/sdls_global.css" rel="stylesheet" type="text/css" />
<!--[if (lt IE 9)&(!IEMobile)]>
<link href="./css/tablet.css" rel="stylesheet" type="text/css" />
<link href="./css/desktop.css" rel="stylesheet" type="text/css" />
<![endif]-->
<script type="text/javascript" src="./newjs/common/jquery-1.11.1.min.js"></script>


<head>
	<meta charset="UTF-8">
	<title>Angular Application</title>

     
       

        
     
	<script src="./newjs/common/angular.min.js" type="text/javascript" ></script>
	<script src="./newjs/common/angular-route.min.js" type="text/javascript" ></script>
      
   
    
	<script src="./app.js" type="text/javascript" ></script>
	<script src="./controllers.js" type="text/javascript" ></script>
    
         <script src="./newjs/common/highcharts-ng.js"></script>
         
    <script src="./newjs/common/highcharts-ng2.js" type="text/javascript" ></script>
    <!--include exporting.js after highchart.js or else export wont work -->
    <script src="./newjs/common/exporting.js" type="text/javascript" ></script><!--8/20add exporting back to see export menu-->
        <script src="./newjs/login/logincontroller.js" type="text/javascript" ></script>
        <script src="./newjs/report/reportcontroller.js" type="text/javascript" ></script>
         <script src="./newjs/chart/chartcontroller.js" type="text/javascript" ></script>
         <script src="./newjs/poc/poccontroller.js" type="text/javascript" ></script>
         <script src="./newjs/poc/helpcontroller.js" type="text/javascript" ></script>
         
           <script src="./newjs/common/angular-sanitize.js" type="text/javascript" ></script>
             <script src="./newjs/common/ng-csv.js" type="text/javascript" ></script>
</head>
<body>
<!--<div my-click>click</div>
<button my-click>Click me</button>-->

   

	<div class='test'>
<div class="wrapper" ng-view>
	 
	 <!-- everthing here was gone to list.html file inside partials folder -->

</div>
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
<!--            <div id="format-toolbar1" class="settings-button" toolbar-tip="{content: '#format-toolbar-options', position: 'bottom'}">toolbar jquery</div>
            <div id="format-toolbar-options">
        <a href="#"><i class="icon-align-left"></i></a>
        <a href="#"><i class="icon-align-center"></i></a>
        <a href="#"><i class="icon-align-right"></i></a>
    </div>
            <div>
        <h2>Vanilla Image:</h2>
        <img src="http://images2.wikia.nocookie.net/__cb20110811172434/fallingskies/images/f/fd/Totoro_normal.gif" />
    </div>
    
    <div>
        <h2>Fill 200x100</h2>
        <div class="wide" 
             my-background-image="http://images2.wikia.nocookie.net/__cb20110811172434/fallingskies/images/f/fd/Totoro_normal.gif">
                 
        </div>
    </div>
    <div>
        <h2>Fill 100x200</h2>
        <div class="tall"
             my-background-image="http://images2.wikia.nocookie.net/__cb20110811172434/fallingskies/images/f/fd/Totoro_normal.gif">
                 
        </div>
    </div>
            
            <div rotate-on-click="45"></div>
  <div rotate-on-click="10"></div>

<label>Show content below:
    <input ng-model="showSpecial" type="checkbox" />
</label>
<div ng-show="showSpecial" id="special">
This content will disappear and reappear if you click the checkbox above
</div>
	
  
  <div id="format-toolbar" class="settings-button">
    <img src="http://paulkinzett.github.com/toolbar/img/icon-cog-small.png">
</div>
 

</div>
</body>
</html>
<script>
    $(function(){
         $('#format-toolbar').toolbar({
    content: '#format-toolbar-options', 
    position: 'left'
});
    });
   
    </script>
<style>
    div.wide {
    width: 200px;
    height: 100px;
    border: 1px solid orange;
}
div.tall {
    width: 100px;
    height: 200px;
    border: 1px solid orange;
}
[rotate-on-click] {
  height: 50px;
  width: 50px;
  background: black;
}
#format-toolbar1, #format-toolbar2 {
    margin-left: auto;
    margin-right: auto;
}

#format-toolbar-options { display: none; }
    </style>-->


<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2015 by anonymous (http://jsbin.com/aDuJIku/2/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->


<style id="jsbin-css">
.ng-modal-overlay {
  /* A dark translucent div that covers the whole screen */
  position:absolute;
  z-index:9999;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:#000000;
  opacity: 0.8;
}
.ng-modal-dialog {
  /* A centered div above the overlay with a box shadow. */
  z-index:10000;
  position: absolute;
  width: 50%; /* Default */

  /* Center the dialog */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);

  background-color: #fff;
  box-shadow: 4px 4px 80px #000;
}
.ng-modal-dialog-content {
  padding:10px;
  text-align: center;
}
.ng-modal-close {
  position: absolute;
  top: 3px;
  right: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 120%;
  display: inline-block;
  font-weight: bold;
  font-family: 'arial', 'sans-serif';
}


</style>
</head>

 
