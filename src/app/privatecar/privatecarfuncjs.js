
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

            $('#txtVehiMake').keyup(function(e){
                //$('#txtVehiMake').next().innerHtml().focus();
                if(e.which == 40)
                {
                    if($("#divAutoMake li.active").length!=0) {
                        var storeTarget = $('#divAutoMake').find("li.active").next();
                        $("#divAutoMake li.active").removeClass("active");
                        storeTarget.focus().addClass("active");
                    }
                    else {
                        $('#divAutoMake').find("li:first").focus().addClass("active");
                    }
                    return ;
                }
                if($('#txtVehiMake').val()!="")
                {
                    $('#divAutoMake').css('display','block');
                    //$('#divAutoMake').children().first().addClass('focus');
                    //$('#divAutoMake').children().first().focus();
                    $('#divAutoMake').find("li:first").focus();
                    return;
                }
                else{
                    $('#divAutoMake').css('display','none');
                }
                
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

            function getSliderValue(dataleft){
                var valued=10;
                if(dataleft>8 &&  dataleft<=16)
                {
                    valued=11;
                }
                if(dataleft>17 &&  dataleft<=35)
                {
                    valued=12;
                }
                if(dataleft>35 &&  dataleft<=40)
                {
                    valued=13;
                }
                if(dataleft>40 &&  dataleft<=52)
                {
                    valued=14;
                }
                if(dataleft>52 && dataleft<=64)
                {
                    valued=15;
                }
                if(dataleft>64 && dataleft<=80)
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
                    console.log(ui);
                    $('.irs-bar').css('width',ui.position.left+'px');
                    $('.irs-single').css('left',ui.position.left+'px');
                    var invalue=getSliderValue(ui.position.left);
                    $('.irs-single').html(invalue);
                    $('#txttenure').val(invalue);
                 }
            });
});

(function($){
    $(window).on("load",function(){

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
        
    });
})(jQuery);

// $( function() {
//     $( '#datepicker,#datepicker1,#datepicker2,#datepicker3,#datepicker4' ).datepicker({
//         changeMonth:true,
//         changeYear:true,
//         dateFormat: 'dd-mm-yy',
//         yearRange: 'c-82:c',
    
//         onSelect:function(date){
            
//             if($("#datepicker").val()!= ""){
//                 $("#datepicker").next().next().css("background", "rgb(0, 158, 227)");
//             }
//             else {
//                 $("#datepicker").next().next().css("background", "#ccc");
//             }
            
//             if($("#datepicker1").val()!= ""){
//                 $("#datepicker1").next().next().next().css("background", "rgb(0, 158, 227)");
//             }
//             else {
//                 $("#datepicker1").next().next().next().css("background", "#ccc");
//             }
//         } 
//     });
//   });
