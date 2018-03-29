
$(window, document, undefined).ready(function() {
    
    $('input').blur(function() {
        var $this = $(this);
        if ($this.val())
          $this.addClass('used');
        else
          $this.removeClass('used');
      });

      var $ripples = $('.ripples');

      $ripples.on('click.Ripples', function(e) {

        var $this = $(this);
        var $offset = $this.parent().offset();
        var $circle = $this.find('.ripplesCircle');

        var x = e.pageX - $offset.left;
        var y = e.pageY - $offset.top;

        $circle.css({
          top: y + 'px',
          left: x + 'px'
        });

        $this.addClass('is-active');

      });

      $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e) {
        $(this).removeClass('is-active');
      });

				
    $('select.form-control').css({
        'font-size':'13px','padding-top':'8px','border-bottom': '1px solid #aaabab','background':'url(/assets/images/dropdown-img.png) transparent right no-repeat','background-position':'bottom right','color':'#636363'
    });

    $('.selectbox-highlight').hide();
    $('select').on('change', function(){
        //debugger;
        var ThisValue = $('option:selected', this).html();
        
        if(ThisValue == "FUEL TYPE" || ThisValue == "CNG / LPG KIT" || ThisValue == "MFG YEAR" || ThisValue == "MFG MONTH" || ThisValue == "PRESENT INSURER" || ThisValue == "VARIANT" || ThisValue == "TITLE" || ThisValue == "STATE" || ThisValue == "CITY" || ThisValue == "COUNTRY" || ThisValue == "RELATION" || ThisValue == "COLOUR TYPE" || ThisValue == "MARITAL STATUS" || ThisValue == "OCCUPATION" || ThisValue == "LOCALITY" || ThisValue == "FINANCIER TYPE") {
            $(this).prev('.selectbox-highlight').hide();
        }
        else {
            $(this).prev('.selectbox-highlight').show();
        }
    });		
    
var windowWidth = $(window).width();
    
    if (windowWidth < 1920){
        $('select.form-control').on('change', function(){
        
            var ThisValue = $('option:selected', this).html();
            if (ThisValue == "FUEL TYPE" || ThisValue == "CNG / LPG KIT" || ThisValue == "MFG YEAR" || ThisValue == "MFG MONTH" || ThisValue == "PRESENT INSURER" || ThisValue == "VARIANT" || ThisValue == "TITLE" || ThisValue == "STATE" || ThisValue == "CITY" || ThisValue == "COUNTRY" || ThisValue == "RELATION" || ThisValue == "COLOUR TYPE" || ThisValue == "MARITAL STATUS" || ThisValue == "OCCUPATION" || ThisValue == "LOCALITY" || ThisValue == "FINANCIER TYPE") {
                $(this).css({
                    'font-size':'13px','padding-top':'8px','border-bottom': '1px solid #aaabab','background':'url(/assets/images/dropdown-img.png) transparent right no-repeat','background-position':'bottom right','color':'#636363'
                });
            }
            
            else {
                $(this).css({
                    'font-size':'15px','padding-top':'20px','border-bottom': '1px solid #009ee3','background':'url(/assets/images/dropdown-img-hover.png) transparent right no-repeat','background-position':'bottom right','color':'#242425'
                });
            }						
        });
    }

     $('.motor-occupation > a').on('click', function(){
        $('.motor-occupation > a').removeClass('active');
        $(this).addClass('active');
     });
    
     $('.policyboss-motor > a').on('click', function(){
        $('.policyboss-motor > a').removeClass('active');
        $(this).addClass('active');
     });
     
     $('.legal-liability > a').on('click', function(){
        $('.legal-liability > a').removeClass('active');
        $(this).addClass('active');
     });
     
     $('.anti-theft > a').on('click', function(){
        $('.anti-theft > a').removeClass('active');
        $(this).addClass('active');
     });
     
     $('.finance-policy > a').on('click', function(){
        $('.finance-policy > a').removeClass('active');
        $(this).addClass('active');
     });
    
    $('.legal-liability-modal > a').on('click', function(){
        $('.legal-liability-modal > a').removeClass('active');
        $(this).addClass('active');
     });
     
     $('.anti-theft-modal > a').on('click', function(){
        $('.anti-theft-modal > a').removeClass('active');
        $(this).addClass('active');
     });


     


        $('.switch input').on('change', function() {
            var ischecked = $(this).is(':checked');
            if (ischecked == true) {
                $(this).parent().siblings().last().toggleClass('active');
                $(this).parent().siblings().first().toggleClass('active');
            } else {
                $(this).parent().siblings().last().toggleClass('active');
                $(this).parent().siblings().first().toggleClass('active');
            }
        });


        function toggleChevron(e) {
            $(e.target)
                .prev('.panel-heading')
                .find("i.indicator")
                .toggleClass('glyphicon-triangle-bottom glyphicon-triangle-top');
        }
        $('#accordion').on('shown.bs.collapse', toggleChevron);
        $('#accordion').on('hidden.bs.collapse', toggleChevron);


        $(".hasclear").keyup(function () {
            var t = $(this);
            t.next('span').toggle(Boolean(t.val()));
          });

          $(".clearer").hide($(this).prev('input').val());

          $(".clearer").click(function () {
            $(this).prev('input').val('');
            $(this).hide();
            $(this).next('span').removeClass('active');
            $("#datepicker1").next().next().next().css("background", "#ccc");
          });
          
          var flag=0;
          $("input[type=text],input[type=number],input[type=email],input[type=tel]").focus(function(){
              flag=1;
          });
          
          $("input[type=text],input[type=number],input[type=email],input[type=tel]").blur(function(){
              //alert("hello");
              if(flag==1){
              if ($(this).val()!=""){$(this).next().next().css("background","#009ee3");}
              
              else {$(this).next().next().css("background","#ccc");}
              flag=0;
              }
          });
      
         
         // Ripple-effect animation
              (function($) {
                  $(".ripple-effect").click(function(e){
                      var rippler = $(this);

                      // create .ink element if it doesn't exist
                      if(rippler.find(".ink").length == 0) {
                          rippler.append("<span class='ink'></span>");
                      }

                      var ink = rippler.find(".ink");

                      // prevent quick double clicks
                      ink.removeClass("animate");

                      // set .ink diametr
                      if(!ink.height() && !ink.width())
                      {
                          var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
                          ink.css({height: d, width: d});
                      }

                      // get click coordinates
                      var x = e.pageX - rippler.offset().left - ink.width()/2;
                      var y = e.pageY - rippler.offset().top - ink.height()/2;

                      // set .ink position and add class .animate
                      ink.css({
                        top: y+'px',
                        left:x+'px'
                      }).addClass("animate");
                  })
              })(jQuery);	


              $('.date-img-activity').on('click', function(){
                var thisVal = $(this).val();
                if(thisVal == ""){
                    return false;
                }
                else {
                    $(this).siblings('span').addClass('active');
                }
            });
            $('span').on('click', function(){
                $(this).siblings('input').trigger('click');
            });
            
            $('.time-img-activity').on('click', function(){
                
                $(this).siblings('span').addClass('active');			
            });
            
            $('#datepicker,#datepicker1').on('click', function(){
                
                $(this).siblings('div.clearer').show();
        
                $(this).siblings('span').addClass('active');
                
                $(this).data('holdDate', $(this).val());
            })
            .on('dp.show', function() {
                
                $(this).val($(this).data('holdDate'));
            });

            // $('#txtVehiMake').keyup(function(e){
            //     //$('#txtVehiMake').next().innerHtml().focus();
            //     if(e.which == 40)
            //     {
            //         $('#divAutoMake').css('display','block');
            //         //$('#divAutoMake').children().first().addClass('focus');
            //         ('#divAutoMake').children().first().focus();
            //         return ;
            //     }
            //     if($('#txtVehiMake').val()!="")
            //     {
            //         $('#divAutoMake').css('display','block');
            //         //$('#divAutoMake').children().first().addClass('focus');
            //         ('#divAutoMake').children().first().focus();
            //         //$('#divAutoMake').find("li:first").focus();
            //         return;
            //     }
            //     else{
            //         $('#divAutoMake').css('display','none');
            //     }
                
            // });

            $('#txtVehiMake').autocomplete({
                source:function (request, response){
                    var datavehiSource=$('#hdnVehiMakeSource').val().split(',');
                    var newdatavehimake=[];
                    for(var i=0;i<=datavehiSource.length-1;i++)
                    {
                        if(datavehiSource[i].toLowerCase().match("^"+request.term))
                        {
                            newdatavehimake.push(datavehiSource[i]);        
                        }
                    }
                    response($.map(newdatavehimake, function (item) {
                                           return {
                                               value: item
                                           }
                    }))
                    $('#ui-id-1').removeClass("ui-autocomplete");
                    $('#ui-id-1').removeClass("ui-front");
                    $('#ui-id-1').removeClass("ui-menu");
                    $('#ui-id-1').removeClass("ui-widget");
                    $('#ui-id-1').removeClass("ui-widget-content");
                    $('#ui-id-1 li').removeClass("ui-menu-item");
                    $('#ui-id-1').addClass("autocomplete-items");
                    $('#ui-id-1').css("list-style-type","none");
                    $('#ui-id-1').css("padding","0");
                    $('#ui-id-1').css("z-index","9");
                    $('#ui-id-1').css("top","-436px");
                    $('#ui-id-1').css("width","60%");
                    $('#ui-id-1 li').addClass("ui-menu-item");
                    $('#ui-id-1 li').css("border-bottom","1px solid #ccc");
                    $('#ui-id-1 li').css("background","#fff");
                    $('#ui-id-1 li').css("padding","10px");
                    $('#ui-id-1 li').css("width","50%");
                    $('#ui-id-1 li:hover').css("background","#000");
                    $('#ui-id-1 li:hover').css("color","#fff");
                    $('#ui-id-1 li a').css("display","block");
                    $('.ui-helper-hidden-accessible').css('display','none');
                },
                minLength: 1,
                appendTo: '#ui-id-1'
            });

            //txtVehiModel
            $('#txtVehiModel').autocomplete({
                source:function (request, response){
                    var datavehiSource=$('#hdnVehiModelSource').val().split(',');
                    // var newdatavehimodel=[];
                    // for(var i=0;i<=datavehiSource.length-1;i++)
                    // {
                    //     if(datavehiSource[i].toLowerCase().match("^"+request.term))
                    //     {
                    //         newdatavehimodel.push(datavehiSource[i]);        
                    //     }
                    // }
                    response($.map(datavehiSource, function (item) {
                                           return {
                                               value: item
                                           }
                    }))
                    $('#ui-id-2').removeClass("ui-autocomplete");
                    $('#ui-id-2').removeClass("ui-front");
                    $('#ui-id-2').removeClass("ui-menu");
                    $('#ui-id-2').removeClass("ui-widget");
                    $('#ui-id-2').removeClass("ui-widget-content");
                    $('#ui-id-2').addClass("autocomplete-items");
                    $('#ui-id-2').css("list-style-type","none");
                    $('#ui-id-2').css("padding","0");
                    $('#ui-id-2').css("z-index","9");
                    $('#ui-id-2').css("top","-436px");
                    $('#ui-id-2').css("width","60%");
                    $('#ui-id-2 li').addClass("ui-menu-item");
                    $('#ui-id-2 li').css("border-bottom","1px solid #ccc");
                    $('#ui-id-2 li').css("background","#fff");
                    $('#ui-id-2 li').css("padding","10px");
                    $('#ui-id-2 li').css("width","50%");
                    $('#ui-id-2 li:hover').css("background","#000");
                    $('#ui-id-2 li:hover').css("color","#fff");
                    $('#ui-id-2 li a').css("display","block");
                    $('.ui-helper-hidden-accessible').css('display','none');
                },
                select: function (event, ui) {
                           if (ui.item) {
                            fnBindVariant(ui.item);
                    }
                },
                minLength: 1,
                appendTo: '#ui-id-2'
            });

            function fnBindVariant(itemdata){
                debugger;
                $.ajax({
                    type: "POST",
                    contentType: "application/json; charset=utf-8",
                    headers: {
                        "content-type": "application/json",
                        "token": "1234567890"
                      },
                    data: "{\"ProductId\":\"1\"}",
                    url: "http://qa.mgfm.in/api/vehicle-details",
                    dataType: "json",
                    success:function(res){
                        debugger;
                        if(res.MasterData.length>0)
                        {
                            $('#ddlVariant').empty();
                            $("#ddlVariant")
                                    .append($("<option></option>").val("1").html("VARIANT"));

                                    $.each(res.MasterData, function (propName, value) {
                                        debugger;
                                        if($('#txtVehiMake').val()==value.Make_Name && itemdata.value==value.Model_Name)
                                        {
                                            debugger;
                                            $("#ddlVariant")
                                            .append($("<option></option>").val(value.Variant_ID).html(value.Variant_Name));
                                        }
                                    });
                        }
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            };



            // $('#txtRto').keyup(function(e){
            //     //$('#txtVehiMake').next().innerHtml().focus();
            //     if(e.which == 40)
            //     {
            //         if($("#divAutoRto li.active").length!=0) {
            //             var storeTarget = $('#divAutoRto').find("li.active").next();
            //             $("#divAutoRto li.active").removeClass("active");
            //             storeTarget.focus().addClass("active");
            //         }
            //         else {
            //             $('#divAutoRto').find("li:first").focus().addClass("active");
            //         }
            //         return ;
            //     }
            //     if($('#txtRto').val()!="")
            //     {
            //         $('#divAutoRto').css('display','block');
            //         //$('#divAutoMake').children().first().addClass('focus');
            //         //$('#divAutoMake').children().first().focus();
            //         $('#divAutoRto').find("li:first").focus();
            //         return;
            //     }
            //     else{
            //         $('#divAutoRto').css('display','none');
            //     }
                
            // });

            $('#txtRto').autocomplete({
                source:function (request, response){
                    $.ajax({
                        type: "GET",
                        contentType: "application/json; charset=utf-8",
                        headers: {
                            "content-type": "application/json",
                            "token": "1234567890"
                          },
                        //data: "{\"ProductId\":\"1\"}",
                        url: "http://qa.mgfm.in/api/get-city-vehicle",
                        dataType: "json",
                        success:function(res){
                            if(res.MasterData.length>0)
                            {
                                var mastercity=[];
                                for(var i=0;i<=res.MasterData.length-1;i++)
                                {
                                    if(res.MasterData[i].RTO_City.toLowerCase().match("^"+request.term)||
                                    res.MasterData[i].VehicleCity_RTOCode.toLowerCase().match("^"+request.term))
                                    {
                                        mastercity.push(res.MasterData[i].RTO_CodeDiscription.replace('(','[').replace(')',']'));
                                    }
                                }

                                response($.map(mastercity, function (item) {
                                    return {
                                        value: item
                                    }
             }))
             $('#ui-id-3').removeClass("ui-autocomplete");
             $('#ui-id-3').removeClass("ui-front");
             $('#ui-id-3').removeClass("ui-menu");
             $('#ui-id-3').removeClass("ui-widget");
             $('#ui-id-3').removeClass("ui-widget-content");
             $('#ui-id-3').addClass("autocomplete-items");
             $('#ui-id-3').css("list-style-type","none");
             $('#ui-id-3').css("padding","0");
             $('#ui-id-3').css("z-index","9");
             $('#ui-id-3').css("top","-436px");
             $('#ui-id-3').css("width","60%");
             $('#ui-id-3 li').addClass("ui-menu-item");
             $('#ui-id-3 li').css("border-bottom","1px solid #ccc");
             $('#ui-id-3 li').css("background","#fff");
             $('#ui-id-3 li').css("padding","10px");
             $('#ui-id-3 li').css("width","50%");
             $('#ui-id-3 li:hover').css("background","#000");
             $('#ui-id-3 li:hover').css("color","#fff");
             $('#ui-id-3 li a').css("display","block");
             $('.ui-helper-hidden-accessible').css('display','none');  
                            }
                        },
                        error: function (err) {
                            console.log(err);
                        }
                    });
                },
                minLength: 1,
                appendTo: '#ui-id-3'
            });

            function selectmake(e){
                if (e.keyCode == 13) {
                    alert(e.html);
                  }
            };

            function fnPassToVM(cdata){
                //alert(cdata.val());
                $('#txtVehiMake').val(cdata.val());
            };

            function drag(event){
                alert('some thing dragged');
            };

            // $("#datepicker1").blur(function(){
            //     var expDate = $(this).val();
            //     var d = new Date();
            //     //alert(d.getDate() + "-" + (d.getMonth()+1) + "-" + d.getFullYear());
            // });

            $("#datepicker1").datepicker({
                  changeMonth: true,
		          changeYear: true,
		          dateFormat: 'dd-mm-yy',
                  yearRange:'c-82:c',
                  maxDate: "+45d",
                  minDate:"-60d",
                //   onSelect: function (date) {
                //     alert("hii");
                //   }
            });

            // $scope.beforeRender = function ($dates) {
            //     /* disable future dates */
            //     alert("msg");
            //     for(var i=0; i<$dates.length;i++) {
            //        if(new Date().getTime() < $dates[i].utcDateValue) {
            //           $dates[i].selectable = false;
            //        }
            //     }                
            // };

            function getSliderValue(dataleft){
                var valued=10 ;
                var dataleft=100/data;
                if(dataleft>8 &&  dataleft<=20)
                {
                    valued=11;
                }
                if(dataleft>20 &&  dataleft<=45)
                {
                    valued=12;
                }
                if(dataleft>45 &&  dataleft<=50)
                {
                    valued=13;
                }
                if(dataleft>50 &&  dataleft<=62)
                {
                    valued=14;
                }
                if(dataleft>60 && dataleft<=70)
                {
                    valued=15;
                }
                if(dataleft>74 && dataleft<=80)
                {
                    valued=16;
                }
                if(dataleft>80 && dataleft<=92)
                {
                    valued=17;
                }
                if(dataleft>92 && dataleft<=110)
                {
                    valued=18;
                }
                if(dataleft>110 && dataleft<=119)
                {
                    valued=19;
                }
                if(dataleft>119 && dataleft<=130)
                {
                    valued=20;
                }
                return valued;
            };

            $("#draggable").draggable({
                axis : "x",
                containment : "#SliderParent",
                drag: function( event, ui ) {
                    console.log(ui.position.left);
                    $('.irs-bar').css('width',ui.position.left+'px');
                    $('.irs-single').css('left',ui.position.left+'px');
                    var invalue=getSliderValue(ui.position.left);
                    //console.log(invalue);
                    $('.irs-single').html(invalue);
                    $('#txttenure').val(invalue);
                 }
            });

            $('#aMale').click(function(){
                $('#aMale').addClass('active');
                $('#aFemale').removeClass('active');
                $('#hdnGender').val('Male');
            });

            
            $('#aFemale').click(function(){
                $('#aMale').removeClass('active');
                $('#aFemale').addClass('active');
                $('#hdnGender').val('Female');
            });

            $('#aSalaried').click(function(){
                $('#aSalaried').addClass('active');
                $('#aSelfEmp').removeClass('active');
                $('#hdnOccupation').val('Salaried');
            });

            $('#aSelfEmp').click(function(){
                $('#aSelfEmp').addClass('active');
                $('#aSalaried').removeClass('active');
                $('#hdnOccupation').val('SelfEmp');
            });
});

(function($){
    $(window).on("load",function(){


        // ploting the slider claim bonus....
        var sliderStartpoint=10;
        var sliderEndpoint=50;
        var slideInterval=5;

        // var sliderhtml="<span class='irs-grid-text js-grid-text-0' dala-left='10' style='left: 0%;float:left;'>10</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='11' style='left: 2%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='12' style='left: 4%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='13' style='left: 6%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='14' style='left: 8%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-1' dala-left='15' style='left: 10%;visibility: visible;float:left;'>15</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='16' style='left: 12%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='17' style='left: 14%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='18' style='left: 16%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='19' style='left: 18%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-2' dala-left='20' style='left: 20%;visibility: visible;float:left;'>20</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='21' style='left: 22%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='22' style='left: 24%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='23' style='left: 26%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='24' style='left: 28%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-3' dala-left='25' style='left: 30%;visibility: visible;float:left;'>25</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='26' style='left: 32%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='27' style='left: 34%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='28' style='left: 36%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='29' style='left: 38%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-4' dala-left='30' style='left: 40%;visibility: visible;float:left;'>30</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='31' style='left: 42%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='32' style='left: 44%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='33' style='left: 46%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='34' style='left: 48%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-5' dala-left='35' style='left: 50%;float:left;'>35</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='36' style='left: 52%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='37' style='left: 54%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='38' style='left: 56%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='39' style='left: 58%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-6' dala-left='40' style='left: 60%;float:left;'>40</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='41' style='left: 62%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='42' style='left: 64%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='43' style='left: 66%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='44' style='left: 68%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-7' dala-left='45' style='left: 70%;visibility: visible;float:left;'>45</span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='46' style='left: 72%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='47' style='left: 74%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='48' style='left: 76%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-pol small' dala-left='49' style='left: 78%;float:left;'></span>";
        // sliderhtml = sliderhtml + "<span class='irs-grid-text js-grid-text-8' dala-left='50' style='left: 80%;visibility: visible;float:left;'>50</span>";
        // $('.irs-grid').html(sliderhtml);


    //     var fromval = $("#txttenure").val();
    //     if ($("#txttenure").val() == 0) {
    //         fromval = 1;
    //         $("#txttenure").val('1');
    //     }
    //     else {
    //         fromval = $("#txttenure").val();

    //     }
    //     var $range1 = $("#range1"),
    //    $update1 = $("#txttenure");

    //     $range1.ionRangeSlider({
    //         type: "single",
    //         min: 10,
    //         from: fromval,
    //         max: 50,
    //         step: 5,
    //         grid: true,
    //         grid_snap: true
    //     });
    //     $range1.on("change", function () {
    //         //debugger
    //         var $this = $(this),
    //             value = $this.prop("value").split(";");
    //         $("#txttenure").addClass('used');
    //         document.getElementById("txttenure").value = value[0];
    //     });
    //     var slider1 = $range1.data("ionRangeSlider");
    //     $update1.on("change", function () {
    //         slider1.update({
    //             from: $("#txttenure").val().slice(0, -5)
    //         });
    //     });

     $(".loader").fadeOut("slow");

    //     $("#listtable .listtable").mCustomScrollbar({
    //         setHeight:300,
    //         theme:"minimal-dark"
    //     });
        
    //     $("#list .tablenew").mCustomScrollbar({
    //         setHeight:300,
    //         theme:"minimal-dark"
    //     });
        
    //     $("#myModal .modal-body").mCustomScrollbar({
    //         setHeight:370,
    //         theme:"minimal-dark"
    //     });
        
        //$("#accordion .panel-body").mCustomScrollbar({
        //	setHeight:300,
        //	theme:"dark-3"
        //});
        
        //$("#myTab .tab-pane").mCustomScrollbar({
        //	setHeight:180,
        //	theme:"inset-2-dark"
        //});
        if($("#hdnCarNo").val()!="" && $("#hdnCarNo").val()!=undefined)
        {
            alert($("#hdnCarNo").val());
            $("#spnCarNo").text($("#hdnCarNo").val());
        }
        

        
    });
})(jQuery);
