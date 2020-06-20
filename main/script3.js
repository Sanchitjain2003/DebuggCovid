function getstate() {
    selectElement =  document.getElementById("slect-option"); 
      var state;                
    state= selectElement.value; 
    
    getdatastatezone(state)
    getdatastate(state)
    getdataindia()
}