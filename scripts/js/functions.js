
function NewTicket()
{
      document.getElementById("display").innerHTML = "" +
          "Sorun Nedir ?? .<br><br>" +
       "<select id = 'category' name='category' length='51'>" +
         "SELECT type from categories<br><br>";
	  
      document.getElementById("display").innerHTML +=  "</select> " +
	   "Önem derecesi<br><br><br>" +
	  "<select id='priority' name='priority' length='31'>";
    
     document.getElementById("display").innerHTML +=  "</select><br> " +
	   "Departman <br><br><br>" +
	  "<select id='department' name='department' length='31'>";
	 
       document.getElementById("display").innerHTML += "</select> " +
	  
	   "<br>  <br><br>" +
        "Konu başlığı  <input type='text' id='subject' size='60'><br />" +
        "Problem nedir <br /> <textarea cols='50' id='description' rows='6'> </textarea>" +
        "<br><br />" +
        "<input type='submit' value='Kaydet' onclick='SubmitTicket()'>";   
    
   
         $.ajax({
        url : 'scripts/php/getTypes.php',
        type : 'POST',
        data : {},
        dataType:'json',
        success : function(data) { 
            for(var i = 0; i < data.length; i++)
            {
                document.getElementById('category').options.add(new Option(data[i].type, data[i].id))
            }
        }
    });
     /////get priorities
         $.ajax({
        url : 'scripts/php/getPriority.php',
        type : 'POST',
        data : {},
        dataType:'json',
        success : function(data) { 
             for(var i = 0; i < data.length; i++)
            {
               document.getElementById('priority').options.add(new Option(data[i].level, data[i].id))
            }
        }
    });
    
    $.ajax({
        url : 'scripts/php/getDepartments.php',
        type : 'POST',
        data : {},
        dataType:'json',
        success : function(data) {
            console.log(data);
            for(var i = 0; i < data.length; i++)
            {
                document.getElementById('department').options.add(new Option(data[i].type, data[i].id))
            }
        }
    });
 
}

function SubmitTicket()
{
        $.ajax({
        url : 'scripts/php/submitTicket.php',
        type : 'POST',
        data : { subject:document.getElementById("subject").value,description:document.getElementById("description").value,userName:userName,category:document.getElementById("category").options[document.getElementById("category").selectedIndex].value,priority:document.getElementById("priority").options[document.getElementById("priority").selectedIndex].value,department:document.getElementById("department").options[document.getElementById("department").selectedIndex].value},
        dataType:'json',
        success : function(data) { 
            if(data == "1")
            {
                 document.getElementById("display").innerHTML = "Ticket entered";
            }
            else
            {
                document.getElementById("display").innerHTML = data;
            }
        }
    });
    
}

function ShowTickets()
{
        document.getElementById("display").innerHTML = "";
        $.ajax({
        url : 'scripts/php/getTickets.php',
        type : 'POST',
        data : {},
        dataType:'json',
        success : function(data) { 

           var ticketTable = "<table class='table'><tr><th>Submitter</th><th>Category</th><th>Priority</th><th>Subject</th><th>Department</th><th>View</th></tr>";
            for(var i = 0; i < data.length; i++)
            {
               ticketTable += "<tr><td>" + data[i].name + "</td><td>" + data[i].category + "</td><td>" + data[i].priority + "</td><td>" + data[i].subject + "</td><td>" + data[i].department + "</td><td><input type='button' value='View' onclick='ViewTicket(" + data[i].id + ")'</td></tr>";
            }
            ticketTable += "</table>";
             document.getElementById("display").innerHTML += ticketTable;
        }
    });
    
}

function ViewTicket(id)
{
 alert(id);   
}
