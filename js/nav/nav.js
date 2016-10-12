// JavaScript Document

$(function(){
					$(".logo .icon-menu").click(function(){
						 		if($(".sjdnav").hasClass('sjdnavhide')){
										var iphonenav = $(".sjdnav").find("li").length;
					 					$(".sjdnav").animate({"height":(iphonenav*40)+"px"},600);
     									$(".sjdnav").removeClass('sjdnavhide');
								} else{
										$(".sjdnav").animate({"height":"0px"},600);
     									$(".sjdnav").addClass('sjdnavhide');
								}
 					  });
				})