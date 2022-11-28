# Team-z
Following are the features that are needed in this project;
-> must and should things
-----------------------------------------------------------
1. UI design for patient intake form 
   a. required feilds to be entered by patient/user
   b. optional feilds to be entered by patient/user
2. able to click/upload pictures
   a. algo to detect edges -> crop the document
   b. algo to adjsut the brightness
   c. algo to adjust contrast
3. Resarch on approaches available (finalize approach best suits)
   a. chrome network API's | 
   b.facebook libaray |   
   c.do it from scratch (upload-downlaod-calculate)  
   

-----------------------------------------------------------------
Arroach a. chrome network API's
https://developer.mozilla.org/en-US/docs/Web/API/NetworkInformation

let type = navigator.connection.effectiveType;

function updateConnectionStatus() {
  console.log(`Connection type changed from ${type} to ${navigator.connection.effectiveType}`);
  type = navigator.connection.effectiveType;
}

navigator.connection.addEventListener('change', updateConnectionStatus);

pros: simple, radeily avaiable
it can detect the change in connection; 
avaiable in anroid too
---------------------------------------------------------------------------
