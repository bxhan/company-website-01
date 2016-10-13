// JavaScript Document

$(function(){
						function subnavs (){
								$(".mobil_nav").find("li").find("a").click(function(){
										if($(this).parent("li").next(".xl").hasClass('xlhide')){
												var xlH = $(this).parent("li").next(".xl").find(".xls").length;
												$(this).parent("li").next(".xl").animate({"height":(xlH*40)+"px"},600);
												$(this).parent("li").next(".xl").removeClass('xlhide');
										} else{
												$(this).parent("li").next(".xl").animate({"height":"0px"},600);
												$(this).parent("li").next(".xl").addClass('xlhide');
										}
							    });
								$(".mobil_nav").find(".xls").click(function(){
										var xlH = $(this).parent(".xl").find(".xls").length;
										if($(this).next(".xlxl").hasClass('xlxlhide')){
												var xlxlH = $(this).next(".xlxl").find(".xlxls").length;
												$(this).next(".xlxl").animate({"height":(xlxlH*32)+"px"},600);
												$(this).next(".xlxl").removeClass('xlxlhide');
												$(this).parent(".xl").animate({"height":(xlxlH*32)+(xlH*40)+"px"},600);	
										} else{
												$(this).next(".xlxl").animate({"height":"0px"},600);
												$(this).next(".xlxl").addClass('xlxlhide');
												$(this).parent(".xl").animate({"height":(xlH*40)+"px"},600);	
										}
							    });
							  
						}
						subnavs();	
				})