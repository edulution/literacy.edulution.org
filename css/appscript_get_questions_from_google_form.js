function myFunction() {
  var form = FormApp.openById('1JpCL6H4_Fk6jBo6YJzXhSopq0Vn91i-3Tw9TWCxVplg');
  var formItems = form.getItems();
  var questions = {};
  for(var i = 0; i < formItems.length; i++) {
    if(formItems[i].getType() == FormApp.ItemType.MULTIPLE_CHOICE){
      qn_choices = formItems[i].asMultipleChoiceItem().getChoices();
      choices_dict = {};
      for(var j = 0; j < qn_choices.length; j++){
        choices_dict[qn_choices[j].getValue()]=qn_choices[j].isCorrectAnswer();
      }
      
      questions[formItems[i].getTitle()] = choices_dict;
      }
    
  }
  Logger.log(questions);
}
