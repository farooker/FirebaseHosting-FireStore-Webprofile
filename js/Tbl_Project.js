
const tblDemo = document.querySelector('#tblDemoApp'); 
const CreateDemo = document.querySelector('#FromAddDemoApp');

db.collection('Project').get().then((result)=>{

    result.forEach(element => {
       Tbl_Demo(element)
      });
});
  