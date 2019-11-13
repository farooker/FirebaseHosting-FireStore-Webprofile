

function cerrentDate()
{
  var today = new Date();   
  var date = today.getFullYear()+''+(today.getMonth()+1)+''+today.getDate();
  var time = today.getHours() + "" + today.getMinutes() + "" + today.getSeconds();
  return date+time;
}

/*
let fileUpload = document.getElementById("cameraInput")

fileUpload.addEventListener('change', function(evt) {
    let storageRef = firebase.storage().ref('photos/'+evt.target.files[0].name)
    let firstFile = evt.target.files[0] // upload the first file only
    let uploadTask = storageRef.put(firstFile).then((snapshot) => {
      snapshot.ref.getDownloadURL().then(function(downloadURL) {
        console.log("File available at", downloadURL);
      });
    });
 
     
})
*/
/*ID  of show TBL*/
const tblSkill = document.querySelector('#tblSkill'); 
const tblEducation = document.querySelector('#tblEducation'); 
const tblExperience = document.querySelector('#tblExperience');   
const tblDemo = document.querySelector('#tblDemoApp'); 
/*ID of insert TBL*/                                          
const CreatSKill = document.querySelector('#FromAddSkill');
const CreatEducation = document.querySelector('#FromAddEducation');
const CreatExperience = document.querySelector('#FromAddExperience');
const CreateDemo = document.querySelector('#FromAddDemoApp');


db.collection('Skill').get().then((result)=>{

result.forEach(element => {
    //console.log(element.data());
    Tbl_Skill(element)
  });
});

db.collection('Education').get().then((result)=>{

  result.forEach(element => {
     // console.log(element.data());
      Tbl_Education(element)
    });
  });
db.collection('Experience').get().then((result)=>{

    result.forEach(element => {
       // console.log(element.data());
       Tbl_Experience(element)
      });
    });
 db.collection('Project').get().then((result)=>{

      result.forEach(element => {
         // console.log(element.data());
         Tbl_Demo(element)
        });
  });
    

CreatSKill.addEventListener('submit',(e)=>{
      //console.log(CreatSKill.txtSkill.value);
      //console.log(CreatSKill.txtPercen.value);
      e.preventDefault();
      db.collection('Skill').add({
         'Persen':CreatSKill.txtPercen.value,
         'Skill': CreatSKill.txtSkill.value 

      }).then(ref => {
        location.reload();
        //console.log('Added document with ID: ', ref.id);
      });
      
});
CreatEducation.addEventListener('submit',(e)=>{
  //console.log(CreatSKill.txtSkill.value);
  //console.log(CreatSKill.txtPercen.value);
  e.preventDefault();
  db.collection('Education').add({
     'Class':CreatEducation.txtClass.value,
     'School':CreatEducation.txtSchool.value,
     'Year': CreatEducation.txtYear.value 

  }).then(ref => {
    location.reload();
    //console.log('Added document with ID: ', ref.id);
  });
  
});
CreatExperience.addEventListener('submit',(e)=>{
  //console.log(CreatSKill.txtSkill.value);
  //console.log(CreatSKill.txtPercen.value);
  e.preventDefault();
  db.collection('Experience').add({
     'Year': CreatExperience.txtYear.value,
     'Working': CreatExperience.txtworking.value,
     'Description':  CreatExperience.txtDisiption.value 

  }).then(ref => {
    location.reload();
    //console.log('Added document with ID: ', ref.id);
  });
  
});

//const storageRef = firebase.storage().ref();
CreateDemo.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log(CreateDemo.P_Name.value);
  console.log(CreateDemo.P_Detial.value);
  var  firstFile  = document.getElementById("cameraInput").files[0];
  let storageRef = firebase.storage().ref('photos/'+cerrentDate())
  let uploadTask = storageRef.put(firstFile).then((snapshot) => {
    snapshot.ref.getDownloadURL().then(function(downloadURL) {
      //console.log("File available at", downloadURL);
      db.collection('Project').add({
        'Pro_Name': CreateDemo.P_Name.value,
        'pro_Discription': CreateDemo.P_Detial.value,
        'Pro_image': downloadURL,
        'Pro_Code': CreateDemo.P_simple.value,
        'Pro_Type': CreateDemo.P_Type.value,
        'Pro_Demo': CreateDemo.P_Demo.value
     }).then(ref => {
       location.reload();
       //console.log('Added document with ID: ', ref.id);
     });
    });
  });


  });
function Tbl_Skill(element)
{
    var row = tblSkill.insertRow(-1);
    var cell2= row.insertCell(0);
    var cell3= row.insertCell(1);
    var cell4= row.insertCell(2);
    cell2.innerHTML=element.data().Skill;
    cell3.innerHTML=element.data().Persen;
    let btn =document.createElement('button');
    let btnEdit =document.createElement('button');
    btn.textContent='Delete';
    btn.setAttribute('class','btn btn btn-light');
    btn.setAttribute('data-id',element.id);
    cell4.appendChild(btn);

    btn.addEventListener('click',(e)=>{

       //console.log(e.target.getAttribute('data-id'));
       var id =e.target.getAttribute('data-id');
       db.collection('Skill').doc(id).delete().then(ref => {
        location.reload();
        //console.log('Added document with ID: ', ref.id);
      });
    });
}

function Tbl_Education(element)
{
  var row = tblEducation.insertRow(-1);
  var cell0= row.insertCell(0);
  var cell1= row.insertCell(1);
  var cell2= row.insertCell(2);
  var cell3= row.insertCell(3);
  cell0.innerHTML=element.data().Year;
  cell1.innerHTML=element.data().Class;
  cell2.innerHTML=element.data().School;

  let btn =document.createElement('button');
  btn.textContent='Delete';
  btn.setAttribute('class','btn btn btn-light');
  btn.setAttribute('data-id',element.id);
  cell3.appendChild(btn);

  btn.addEventListener('click',(e)=>{

     //console.log(e.target.getAttribute('data-id'));
     var id =e.target.getAttribute('data-id');
     db.collection('Education').doc(id).delete().then(ref => {
      location.reload();
      //console.log('Added document with ID: ', ref.id);
    });
  });
}
function Tbl_Experience(element)
{
  var row = tblExperience.insertRow(-1);
  var cell0= row.insertCell(0);
  var cell1= row.insertCell(1);
  var cell2= row.insertCell(2);
  var cell3= row.insertCell(3);
  cell0.innerHTML=element.data().Year;
  cell1.innerHTML=element.data().Working;
  cell2.innerHTML=element.data().Description;

  let btn =document.createElement('button');
  btn.textContent='Delete';
  btn.setAttribute('class','btn btn btn-light');
  btn.setAttribute('data-id',element.id);
  cell3.appendChild(btn);

  btn.addEventListener('click',(e)=>{

     //console.log(e.target.getAttribute('data-id'));
     var id =e.target.getAttribute('data-id');
     db.collection('Experience').doc(id).delete().then(ref => {
      location.reload();
      //console.log('Added document with ID: ', ref.id);
    });
  });
}
function Tbl_Demo(element)
{
  var row = tblDemo.insertRow(-1);
  var cell0= row.insertCell(0);
  var cell1= row.insertCell(1);
  var cell2= row.insertCell(2);
  var cell3= row.insertCell(3);
  cell0.innerHTML=element.data().Pro_Name;
  cell1.innerHTML=element.data().pro_Discription;
  cell2.innerHTML='<img src="'+element.data().Pro_image+'" class="rounded float-left" >';  
  let btn =document.createElement('button');
  btn.textContent='Delete';
  btn.setAttribute('class','btn btn btn-light');
  btn.setAttribute('data-id',element.id);
  cell3.appendChild(btn);

  btn.addEventListener('click',(e)=>{

     //console.log(e.target.getAttribute('data-id'));
     var id =e.target.getAttribute('data-id');
     db.collection('Project').doc(id).delete().then(ref => {
      location.reload();
      //console.log('Added document with ID: ', ref.id);
    });
  });
}
