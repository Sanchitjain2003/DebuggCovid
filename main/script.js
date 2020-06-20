function getdatastatezone(state1)
{
  fetch('https://api.covid19india.org/zones.json')
        .then(resp =>resp.json())
        .then(data =>
        {
          for(i=0;i<10000;i++)
          {
            var array=data[Object.keys(data)[0]]
            var para = document.createElement("p");
            para.style.cssText='color:white;font-size:15px;margin-left:5%;padding:0px;'
            if(array[i].state==state1)
            {
              var node = document.createTextNode((array[i].district)+"="+(array[i].zone));
              para.appendChild(node);
              var element = document.getElementById("div2");
              element.appendChild(para);
              
            }
          }
        })
      
}