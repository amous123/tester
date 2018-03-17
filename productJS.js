/*
@Author Alexander Moussa
Contains functions for the MemeHub site
*/
function displayDate() {
  var a = document.getElementById("contact-name-box").value;
  var b = document.getElementById("contact-link-box").value;
  var c = document.getElementById("contact-description-box").value;
  //WriteFile(a);
  var z = a+b+c;
    document.getElementById("demo").innerHTML = (z);

}

import System.IO;
var filePath = "/Users/ResetOfDirectoryPath/links.txt";

function Update() {
    if (Input.GetKeyDown("r")) {
        WriteFile(filePath);
    }
    if (Input.GetKeyDown("f")) {
        ReadFile(filePath);
    }
}

function WriteFile(filepathIncludingFileName : String)
{
    var sw : StreamWriter = new StreamWriter(filepathIncludingFileName);
    sw.WriteLine("Line to write");
    sw.WriteLine("Another Line");
    sw.Flush();
    sw.Close();
}

function ReadFile(filepathIncludingFileName : String) {
    sr = new File.OpenText(filepathIncludingFileName);

    input = "";
    while (true) {
        input = sr.ReadLine();
        if (input == null) { break; }
        Debug.Log("line="+input);
    }
    sr.Close();
}
