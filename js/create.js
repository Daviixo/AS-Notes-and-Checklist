function createTemplate(){

    try {

    //Var today could be useful in the future, leaving that here for reference
    var today = new Date().toLocaleDateString('en-us', { hour:"2-digit", minute:"2-digit", weekday:"long", year:"numeric", month:"short", day:"numeric"});

    let getProduct = document.getElementById("product").value;

    let getContactName = document.getElementById("contactName").value;

    let getEmail = document.getElementById("email").value;

    let getPhoneNumber = document.getElementById("phoneNumber").value;

    let getSummary = document.getElementById("summary").value;

    let getStepsTaken = document.getElementById("stepsTaken").value;

    let getResolution = document.getElementById("resEsc").value;

    // Getting info from checkboxes, this will return "true" or "false"

    let getVerifiedCC = document.getElementById("vcc").checked;

    if (getVerifiedCC === true){

        textgetVerifiedCC = "✓";

    }else{

        textgetVerifiedCC = "x";
        
    }
    
    let getVerifiedBillingAddress = document.getElementById("vba").checked;

    if (getVerifiedBillingAddress === true){

        textgetVerifiedBillingAddress = "✓";

    }else{

        textgetVerifiedBillingAddress = "x";

    }

    let getHighlightFeatures = document.getElementById("hf").checked;

    if (getHighlightFeatures === true){

        textgetHighlightFeatures = "✓";

    }else{

        textgetHighlightFeatures = "x";

    }

    let getRebuttals = document.getElementById("reb").checked;

    if (getRebuttals === true){

        textgetRebuttals = "✓";

    }else{

        textgetRebuttals = "x";

    }

    let getSurvey = document.getElementById("survey").checked;

    if (getSurvey === true){

        textgetSurvey = "✓";

    }else{

        textgetSurvey = "x";

    }

    let getComebackStatement = document.getElementById("cs").checked;

    if (getComebackStatement === true){

        textgetComebackStatement = "✓";

    }else{

        textgetComebackStatement = "x";

    }

    // End of checkboxes

    let getMovingWithComp = document.getElementById("movingWithComp").value;

    let getCompsName = document.getElementById("compsName").value;

    var tab = window.open('about:blank', '_blank');

    html = '<title>Results - SA, Notes & Checklist</title><br><strong>Results - SA, Notes & Checklist</strong><br><br>' 
    + '<b>Note created at: </b> ' + today
    + '<br><br><b>Product: </b>' + getProduct
    + '<br><b>Contact Name: </b>' + getContactName
    + '<br><b>Email: </b>' + getEmail
    + '<br><b>Phone Number: </b>' + getPhoneNumber
    + '<br><br><b>Summary of Issue or Request:</b><br>' + getSummary
    + '<br><br><b>Steps Taken:</b><br>' + getStepsTaken
    + '<br><br><b>Resolved/Escalated: </b>' + getResolution
    + '<br><h2><b>CD Check List</b></h2><br>'
    + '<b>Verified CC: </b>' + textgetVerifiedCC
    + '<br><b>Verified Billing Address: </b>' + textgetVerifiedBillingAddress
    + '<br><b>Highlight Features: </b>' + textgetHighlightFeatures
    + '<br><b>Rebuttals (2): </b>' + textgetRebuttals
    + '<br><b>Survey: </b>' + textgetSurvey
    + '<br><b>Comeback Statement: </b>' + textgetComebackStatement
    + '<br><br><b>Moving with Competitor: </b>' + getMovingWithComp
    + '<br><b>Competitors Name: </b>' + getCompsName
    + '<br><br><b><i>--- Made by: SRE/NOC David Díaz ---</i></b>'

    tab.document.write(html);
    tab.document.close();
        
    } catch (error) {
        console.log("Something went wrong :( Error shows:\n" + error)
    }
    
   
}