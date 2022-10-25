function createTemplate(){

    try {

    //Var today could be useful in the future, leaving that here for reference
    var today = new Date().toLocaleDateString('en-us', { hour:"2-digit", minute:"2-digit", weekday:"long", year:"numeric", month:"short", day:"numeric"});

    var cTittle = document.getElementById("sptittle").value;

    const utcStr = new Date().toUTCString();
    console.log(utcStr);

    var cImpact = document.getElementById("impact").value;

    var cReports = document.getElementById("customerReports").value;

    var cSlackChannel = document.getElementById("slackChannel").value;

    var e = document.getElementById("incidentType");
    var cIncidentType = e.value;

    var confBridge = "(805) 416-0601 Pin: 13554";

    var selected = [];
    for (var option of document.getElementById('products').options)
    {
        if (option.selected) {
            selected.push(" " + option.value);
        }
    }

    var finalTitle = cIncidentType + " - " + selected + " - " + cTittle;

    //alert("Creating templates for: " + selected);


    //FYI: IMPACT == ISSUE!

    // This will be our first template - External Status Page Template:
    //[PRODUCT] - [ISSUE]

    var tab = window.open('about:blank', '_blank');

    html = '<title>Results - Incidents Templates</title><br><strong> External Status Page Template</strong><br><br>' + selected + ' - ' + cTittle
    + '<br><br>We are actively investigating reports that some ' + selected + ' customers may be '
    + cImpact + '. <br><br>Our engineers are working to resolve the issue and will provide another update shortly.' +  

    '<br><br><strong>Internal Status Page Template:</strong><br><br>' + finalTitle + '<br><br></bnr>Product Impact - ' + selected +
    '<br>Customer Reports - ' + cReports + '<br>Customer Impact - Customers may be ' + cImpact + '<br>Slack Channel - ' + cSlackChannel + '<br>Conf. Bridge - ' + 
    confBridge + ' ' + '<a href="https://www.uberconference.com/cloudsupport">https://www.uberconference.com/cloudsupport</a>' +
    '<br><br><strong>Comms Response Template:</strong><br><br>We are currently having a ' + cIncidentType + ' incident for ' + selected + ' where users are ' + cImpact + '.' +
    '<br>Status pages are being sent at this moment. Please thread the questions in this message.<br>Slack incident channel ' + cSlackChannel + 
    '<br><br>Your friends:<br><img src="images/lminoclogo.png" alt="NOC_Logo" width="124" height="150">' +
    '<br><br><strong>DONT FORGET TO SEND THE SLACK UPDATES</strong>'

    tab.document.write(html);
    tab.document.close(); 


    console.log(today);
        
    } catch (error) {
        console.log("Something went wrong :( Error shows:\n" + error)
    }
    
   
}