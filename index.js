// var jpdbBaseURL = "http://api.login2explore.com:5577";
// var jpdbIRL = "/api/irl";
// var jpdbIML = "/api/iml";
// var studentDBName = "SCHOOL-DB";
// var studentRelationName = "STUDENT-TABLE";
// var connToken = "90934429|-31949230426008066|90956810	";

// $("#rollno").focus();

// function saveRecNo2LS(jsonObj) {
//     var lvData = JSON.parse(jsonObj.data);
//     localStorage.setItem("recno", lvData.rec_no);
// }

// function getRollNoAsJsonObj() {
//     var rollno = $("#rollno").val();
//     var jsonStr = {
//         rollno: rollno
//     };
//     return JSON.stringify(jsonStr);
// }

// function fillData(jsonObj) {
//     saveRecNo2LS(jsonObj);
//     var record = JSON.parse(jsonObj.data).record;
//     $("#fullname").val(record.fullname);
//     $("#class").val(record.class);
//     $("#birthdate").val(record.birthdate);
//     $("#address").val(record.address);
//     $("#enrollmentdate").val(record.enrollmentdate);
// }

// function resetForm() {
//     $("#rollno").val("");
//     $("#fullname").val("");
//     $("#class").val("");
//     $("#birthdate").val("");
//     $("#address").val("");
//     $("#enrollmentdate").val("");
//     $("#rollno").prop("disabled", false);
//     $("#save").prop("disabled", true);
//     $("#change").prop("disabled", true);
//     $("#reset").prop("disabled", true);
//     $("#rollno").focus();
// }

// function validateData() {
//     var rollno, fullname, studentClass, birthdate, address, enrollmentdate;
//     rollno = $("#rollno").val();
//     fullname = $("#fullname").val();
//     studentClass = $("#class").val();
//     birthdate = $("#birthdate").val();
//     address = $("#address").val();
//     enrollmentdate = $("#enrollmentdate").val();

//     if (rollno === "") {
//         alert("Roll No. is a required field");
//         $("#rollno").focus();
//         return "";
//     }

//     if (fullname === "") {
//         alert("Full Name is required");
//         $("#fullname").focus();
//         return "";
//     }

//     if (studentClass === "") {
//         alert("Class is required");
//         $("#class").focus();
//         return "";
//     }

//     if (birthdate === "") {
//         alert("Birth Date is required");
//         $("#birthdate").focus();
//         return "";
//     }

//     if (address === "") {
//         alert("Address is required");
//         $("#address").focus();
//         return "";
//     }

//     if (enrollmentdate === "") {
//         alert("Enrollment Date is required");
//         $("#enrollmentdate").focus();
//         return "";
//     }

//     var jsonStrObj = {
//         rollno: rollno,
//         fullname: fullname,
//         class: studentClass,
//         birthdate: birthdate,
//         address: address,
//         enrollmentdate: enrollmentdate
//     };
//     return JSON.stringify(jsonStrObj);
// }

// function getStudent() {
//     var rollnoJsonObj = getRollNoAsJsonObj();
//     var getRequest = createGET_BY_KEYRequest(connToken, studentDBName, studentRelationName, rollnoJsonObj);
//     jQuery.ajaxSetup({async: false});
//     var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
//     jQuery.ajaxSetup({async: true});

//     if (resJsonObj.status === 400) {
//         $("#save").prop("disabled", false);
//         $("#reset").prop("disabled", false);
//         $("#fullname").focus();

//     } else if (resJsonObj.status === 200) {
        
//         $("#rollno").prop("disabled", true);
       
//         fillData(resJsonObj);
//         $("#change").prop("disabled", false);
//         $("#reset").prop("disabled", false);
//         $("#fullname").focus();
//     }
// }

// function saveData() {
//     var jsonStrObj = validateData();
//     if (jsonStrObj === "") {
//         return "";
//     }
//     var putRequest = createPUTRequest(connToken, jsonStrObj, studentDBName, studentRelationName);
//     jQuery.ajaxSetup({async: false});
//     var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
//     jQuery.ajaxSetup({async: true});
//     resetForm();
//     $("#rollno").focus();
// }

// function changeData() {
//     $("change").prop("disabled", true);
//     var jsonChg = validateData();
//     var updateRequest = createUPDATERecordRequest(connToken, jsonChg, studentDBName, studentRelationName, localStorage.getItem("recno"));
//     jQuery.ajaxSetup({async: false});
//     var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
//     jQuery.ajaxSetup({async: true});
//     console.log(resJsonObj);
//     resetForm();
//     $("#rollno").focus();
// }

var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var studentDBName = "SCHOOL-DB";
var studentRelationName = "STUDENT-TABLE";
var connToken = "90934429|-31949230423757149|90956809";

// Focus on Roll-No field when the page loads
$(document).ready(function() {
    $("#rollno").focus();
});

function saveRecNo2LS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}

function getRollNoAsJsonObj() {
    var rollno = $("#rollno").val();
    var jsonStr = {
        rollno: rollno
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#fullname").val(record.fullname);
    $("#class").val(record.class);
    $("#birthdate").val(record.birthdate);
    $("#address").val(record.address);
    $("#enrollmentdate").val(record.enrollmentdate);

    // Enable other fields for editing
    $("#fullname").prop("disabled", false);
    $("#class").prop("disabled", false);
    $("#birthdate").prop("disabled", false);
    $("#address").prop("disabled", false);
    $("#enrollmentdate").prop("disabled", false);
}

function resetForm() {
    $("#rollno").val("");
    $("#fullname").val("");
    $("#class").val("");
    $("#birthdate").val("");
    $("#address").val("");
    $("#enrollmentdate").val("");
    $("#rollno").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#rollno").focus();
}

function validateData() {
    var rollno, fullname, studentClass, birthdate, address, enrollmentdate;
    rollno = $("#rollno").val();
    fullname = $("#fullname").val();
    studentClass = $("#class").val();
    birthdate = $("#birthdate").val();
    address = $("#address").val();
    enrollmentdate = $("#enrollmentdate").val();

    if (rollno === "") {
        alert("Roll No. is a required field");
        $("#rollno").focus();
        return "";
    }

    if (fullname === "") {
        alert("Full Name is required");
        $("#fullname").focus();
        return "";
    }

    if (studentClass === "") {
        alert("Class is required");
        $("#class").focus();
        return "";
    }

    if (birthdate === "") {
        alert("Birth Date is required");
        $("#birthdate").focus();
        return "";
    }

    if (address === "") {
        alert("Address is required");
        $("#address").focus();
        return "";
    }

    if (enrollmentdate === "") {
        alert("Enrollment Date is required");
        $("#enrollmentdate").focus();
        return "";
    }

    var jsonStrObj = {
        rollno: rollno,
        fullname: fullname,
        class: studentClass,
        birthdate: birthdate,
        address: address,
        enrollmentdate: enrollmentdate
    };
    return JSON.stringify(jsonStrObj);
}

function getStudent() {
    var rollnoJsonObj = getRollNoAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, studentDBName, studentRelationName, rollnoJsonObj);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({async: true});

    if (resJsonObj.status === 400) {
        // Roll No does not exist, enable fields for entry
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#fullname").prop("disabled", false).focus();
        $("#class").prop("disabled", false);
        $("#birthdate").prop("disabled", false);
        $("#address").prop("disabled", false);
        $("#enrollmentdate").prop("disabled", false);
    } else if (resJsonObj.status === 200) {
        // Roll No exists, fill the data and enable fields for updating
        $("#rollno").prop("disabled", true);
        fillData(resJsonObj);
        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#fullname").focus();
    }
}

function saveData() {
    var jsonStrObj = validateData();
    if (jsonStrObj === "") {
        return "";
    }
    var putRequest = createPUTRequest(connToken, jsonStrObj, studentDBName, studentRelationName);
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#rollno").focus();
}

function updateData() {
    var jsonChg = validateData();
    if (jsonChg === "") {
        return "";
    }
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, studentDBName, studentRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({async: false});
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({async: true});
    resetForm();
    $("#rollno").focus();
}

