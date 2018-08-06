// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice


// using jQuery and the object above, display the information as the appropriate button is clicked
// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice


// using jQuery and the object above, display the information as the appropriate button is clicked
// 
var fields = new Object();
// Properties of our object.
fields.firstName = "My first name is Dylan!";
fields.lastName = "My last name is Rutter! My Mom always said 'it's Rutter like Butter' when people ask the spelling.";
fields.jobTitle = "My job title is 'Resolutions Specialist'. Essentially we speak to all customers who demand supervisors from the front line agents. We aren't supervisors ourselves, just an escalated dept.";
fields.homeOffice = "I work at the RPP location up North. It's a great office, and we finally got new electric desks!";
fields.tellMeMore = "I am a big gamer. In my spare time I love modding arcade sticks and mostly play Street Fighter";
fields.checkMessage = function () {
  console.log(this.firstName);


  // using arrow funcitons here to keep "this" in the context of our object "fields"
  $('#firstName').click(() => {
    console.log(this);
    console.log(this.firstName);
    alert(this.firstName)
  });
  $('#lastName').click(() => {
    console.log(this);
    console.log(this.lastName);
    alert(this.lastName)
  });
  $('#jobTitle').click(() => {
    console.log(this);
    console.log(this.jobTitle);
    alert(this.jobTitle)
  });
  $('#homeOffice').click(() => {
    console.log(this);
    console.log(this.homeOffice);
    alert(this.homeOffice)
  });
  $('#tellMeMore').click(() => {
    console.log(this);
    console.log(this.tellMeMore);
    alert(this.tellMeMore)
  });
}
fields.checkMessage();