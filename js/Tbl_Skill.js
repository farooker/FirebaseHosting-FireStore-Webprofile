const tblSkill = document.querySelector('#tblSkill');                                     
const CreatSKill = document.querySelector('#FromAddSkill');


CreatSKill.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('Skill').add({
       'Persen':CreatSKill.txtPercen.value,
       'Skill': CreatSKill.txtSkill.value 
    }).then(ref => {
      location.reload();
    });
    
});


db.collection('Skill').get().then((result)=>{

    result.forEach(element => {
        Tbl_Skill(element)
      });
 });
 function Tbl_Skill(element)
 {
     var row = tblSkill.insertRow(-1);
     var cell1= row.insertCell(0);
     var cell2= row.insertCell(1);
     var cell3= row.insertCell(2);
     var btn =document.createElement('button');

     btn.textContent='Delete';
     btn.setAttribute('class','btn btn-outline-danger');
     btn.setAttribute('data-id',element.id);

     cell1.innerHTML=element.data().Skill;
     cell2.innerHTML=element.data().Persen;
     cell3.appendChild(btn);
 
     btn.addEventListener('click',(e)=>{
        var id =e.target.getAttribute('data-id');
           db.collection('Skill').doc(id).delete().then(ref => {
           location.reload();

       });
     });
 }