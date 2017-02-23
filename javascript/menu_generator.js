				document.writeln("<section class ='row'>");
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
					let foods = JSON.parse(food);
						 var i = 0;
						 
						 
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2>Starter</th></tr></thead>");
							for(i = 0;i<foods.starter.length;i++)
							{	
								document.writeln("<tbody><tr><td>" + foods.starter[i].Name + "<br><hr>" +foods.starter[i].details + "</td>");
								document.writeln("<td>" + foods.starter[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
					
				document.writeln("<section class ='row'>");	
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2><h4>Main Course</h4></th></tr></thead>");
							for(i = 0;i<foods.MainCourse.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.MainCourse[i].Name + "<br><hr>" +foods.MainCourse[i].details + "</td>");
								document.writeln("<td>" + foods.MainCourse[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");	
				document.writeln("</section>");
				
				document.writeln("<section class ='row'>");	
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2><h4>Wrap</h4></th></tr></thead>");
							for(i = 0;i<foods.Bombay_Wrap.length;i++)
							{
								
								document.writeln("<tbody><tr><td>" + foods.Bombay_Wrap[i].Name + "<br><hr>" +foods.Bombay_Wrap[i].details + "</td>");
								document.writeln("<td>" + foods.Bombay_Wrap[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
				
				document.writeln("<section class ='row'>");		
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2><h4>Meal Deals</h4></th></tr></thead>");
							for(i = 0;i<foods.Meal_Deals.length;i++)
							{
								
								document.writeln("<tbody><tr><td>" + foods.Meal_Deals[i].Name + "<br><hr>" +foods.Meal_Deals[i].details + "</td>");
								
								document.writeln("<td>" + foods.Meal_Deals[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
											
				document.writeln("<section class ='row'>");		
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2><h4>Chip Box</h4></th></tr></thead>");
							for(i = 0;i<foods.Chip_Box.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Chip_Box[i].Name + "</td>");
								document.writeln("<td>" + foods.Chip_Box[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
				
				document.writeln("<section class ='row'>");	
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2><h4>Drinks</h4></th></tr></thead>");
							for(i = 0;i<foods.Drinks.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Drinks[i].Name + "</td>");
								document.writeln("<td>" + foods.Drinks[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");	
				
				document.writeln("<section class ='row'>");
					document.writeln("<section class ='col-lg-6 col-lg-offset-4'>");
						document.writeln("<table class=' table table-bordered table-hover table-responsive'>");
						document.writeln("<thead><tr><th align='center' colspan=2><h4>Extras</h4></th></tr></thead>");
							for(i = 0;i<foods.Extras.length;i++)
							{
								document.writeln("<tbody><tr><td>" + foods.Extras[i].Name + "</td>");
								document.writeln("<td>" + foods.Extras[i].price+"</td></tr></tbody>");
							}
								document.writeln("</table>");
					document.writeln("</section>");
				document.writeln("</section>");