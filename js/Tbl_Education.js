
const tblEducation = document.querySelector('#tblEducation'); 
const CreatEducation = document.querySelector('#FromAddEducation');

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
