function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

/* for Deployment*/
function openForm1() {
  document.getElementById("myForm1").style.display = "block";
}

function closeForm1() {
  document.getElementById("myForm1").style.display = "none";
}

/* for Exposing Deployment*/
function openForm2() {
  document.getElementById("myForm2").style.display = "block";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

/* for Scaling Deployment*/
function openForm3() {
  document.getElementById("myForm3").style.display = "block";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}

/* for Delete by Resource*/
function openForm4() {
  document.getElementById("myForm4").style.display = "block";
}

function closeForm4() {
  document.getElementById("myForm4").style.display = "none";
}


/* Main Function which connect to  server */
function ServerCall(i) {
  var xhr = new XMLHttpRequest();
 
  xhr.open("GET", "http://192.168.43.28/cgi-bin/lw.py?x=" + i, true); // it is k

  xhr.send(); // sending request

  // by onload jevent server trcking output from other pages
  xhr.onload = function () {
    // output from above url
    var output = xhr.responseText;
    document.getElementById("d1").innerHTML = output;
  };
}




/* function for runing code */
function createpod() {
  var podname = document.getElementById("P").value;
  var Imagename = document.getElementById("I").value;
  
  var image = "--image=" + Imagename;
  var i =
    "kubectl" +
    " " +
    "run" +
    " " +
    podname +
    " " +
    image +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";

    ServerCall(i)
}

function Expose() {
  var deploy = document.getElementById("Dep").value;
  var port = document.getElementById("PN").value;
  
  var portn = "--port=" + port;
  var i =
    "kubectl" +
    " " +
    "expose" +
    " " +
    "deployment" +
    " " +
    deploy +
    " " +
    portn +
    " " +
    "--type=NodePort" +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";

    ServerCall(i)
}

function createdep() {
  var deploy = document.getElementById("De").value;
  var Imagename = document.getElementById("Im").value;
  var image = "--image=" + Imagename;
  var i =
    "kubectl" +
    " " +
    "create" +
    " " +
    "deployment" +
    " " +
    deploy +
    " " +
    image +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";

    ServerCall(i)
}

function Scale() {
  var deploy = document.getElementById("Depl").value;
  var size = document.getElementById("RS").value;
  
  var replica = "--replicas=" + size;
  var i =
    "kubectl" +
    " " +
    "scale" +
    " " +
    "deployment" +
    " " +
    deploy +
    " " +
    replica +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";
  /*kubectl scale deployment {} --replicas={} --kubeconfig admin.conf */

  ServerCall(i)
}

function showP() {
  

  var i =
    "kubectl" +
    " " +
    "get" +
    " " +
    "pods" +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";
  /*kubectl scale deployment {} --replicas={} --kubeconfig admin.conf */

  ServerCall(i)
}

function showD() {
  var i =
    "kubectl" +
    " " +
    "get" +
    " " +
    "deployments" +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";
  /*kubectl scale deployment {} --replicas={} --kubeconfig admin.conf */

  ServerCall(i)
}

function DeleteAll() {

  var i =
    "kubectl" +
    " " +
    "delete" +
    " " +
    "all" +
    " " +
    "--all" +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";
    ServerCall(i)
}

/*kubectl delete all --all --kubeconfig admin.conf*/

/* delete resources by name  */
function DeleteResource() {
  var resource = document.getElementById("RT").value;
  var name = document.getElementById("name").value;
  
  var i =
    "kubectl" +
    " " +
    "delete" +
    " " +
    resource +
    " " +
    name +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";
    ServerCall(i)
}


/* get services */
function showsvc() {
  var i =
    "kubectl" +
    " " +
    "get" +
    " " +
    "svc" +
    " " +
    "--kubeconfig" +
    " " +
    "admin.conf";
  /*kubectl scale deployment {} --replicas={} --kubeconfig admin.conf */

  ServerCall(i)
}


/* clear Screen */
function Clear() {
    var i =
      "echo";
    /*kubectl scale deployment {} --replicas={} --kubeconfig admin.conf */
  
    ServerCall(i)
  }


