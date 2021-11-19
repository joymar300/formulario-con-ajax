

function post(){
    var user = {
        //name: $("#name").val(),
        name: $("input[name='first_name']").val(),
        //job: $("#job").val()
        email: $("input[name='email']").val(),

        id: $("input[name='id']").val()
    }


    var data ={
        "id":user.id,
        "email":user.email,
        "first_name":user.name

    };
    $("tabla").empty();
    var tabla = $("#tabla");
    var tr = $("<tr></tr>");
    tr.append("<th>user id</th>");
    tr.append("<th>user email</th>");
    tr.append("<th>user nombre</th>");

    tabla.append(tr);


    $.ajax({
        type: "POST",
        url: "https://reqres.in/api/users",
        data: JSON.stringify(data),
     
        success: function (data) {
            console.log(data);
            var tr = $("<tr></tr>");
            tr.append("<td>"+ user.id+ "</td>");
            tr.append("<td>"+ user.email+ "</td>");
            tr.append("<td>"+ user.name+" </td>");
        
            tabla.append(tr);
    
            
        },error:function(request, msg, error){
            alert("nada pai");
        }
    });
}


/*
function get(){
    $("tabla").empty();
        var tabla = $("#tabla");
        var tr = $("<tr></tr>");
        tr.append("<th>user id</th>");
        tr.append("<th>user title</th>");
        tr.append("<th>user body</th>");
    
        tabla.append(tr);

    $.ajax({
        type: "get",
        url: "https://reqres.in/api/users",
        data: "data",
        success: function (data) {
            console.log(data);
            idx= el indice del api
            $.each(data, function (idx, user) { 
                
                var tr = $("<tr></tr>");
                tr.append("<td>"+ user.id+ "</td>");
                tr.append("<td>"+ user.email+ "</td>");
                tr.append("<td>"+ user.first_name+" </td>");
            
                tabla.append(tr);
            });
            
        },
        error:function(request, msg, error){
            alert('error!');
        }
    });

}*/