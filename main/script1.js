function getdatastate(state1)
{
  fetch('https://api.covid19india.org/resources/resources.json')
        .then(resp =>resp.json())
        .then(data =>
        {
          for(i=0;i<10000;i++)
          {
            var array=data[Object.keys(data)[0]]
            var para = document.createElement("p");
            var para1=document.createElement("p");
            var para2 = document.createElement("p");
            var para3=document.createElement("p");
            para.style.cssText='color:cyan;font-size:18px;margin-left:0%;padding:0px;text-decoration:underline;'
            para1.style.cssText='color:white;font-size:15px;margin-left:5%;padding:0px;'
            para2.style.cssText='color:white;font-size:15px;margin-left:5%;padding:0px;'
            para3.style.cssText='color:white;font-size:15px;margin-left:5%;padding:0px;'
            if(array[i].state==state1)
            {
              var node = document.createTextNode((array[i].category));
              var node1=document.createTextNode((array[i].descriptionandorserviceprovided));
              var node2 = document.createTextNode((array[i].nameoftheorganisation));
              var node3 = document.createTextNode((array[i].city)+","+(array[i].phonenumber));
              para.appendChild(node);
              para1.appendChild(node1);
              para2.appendChild(node2);
              para3.appendChild(node3);
              var element = document.getElementById("div1");
              element.appendChild(para);
              element.appendChild(para1);
              element.appendChild(para2);
              element.appendChild(para3);
              
            }
          }
        })
      
}