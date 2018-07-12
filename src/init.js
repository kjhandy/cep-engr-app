// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
  var info = {
    firstName: 'Kayla',
    lastName: 'Handy',
    jobTitle: 'Software Engineer',
    homeOffice: 'Austin - Domain'
  }

  // using jQuery and the object above, display the information as the appropriate button is clicked

  $(".tellMeMoreButton").on("click", function() {
    $(".aboutme").html("Six years ago, I was sitting in my office at Sparks Consulting Group, a marketing firm based in D.C. I was talking to one of my clients, who mentioned that the product page of their website was down. As a small start-up, they didn't have anyone on staff to fix it, so I volunteered to Google around and give it a shot. A couple hours in, I finally found the culprit -- a broken link. And from that day on, I was hooked. After a couple of years of dabbling in online tutorials, I found Hack Reactor. I applied, got accepted, spent 4 wonderful months completely immersed in code, and got hired at HomeAway three weeks after graduating.");
  });

  $(".firstNameButton").on("click", function() {
    $(".firstName").html(info.firstName);
  });

  $(".lastNameButton").on("click", function() {
    $(".lastName").html(info.lastName);
  });

  $(".jobTitleButton").on("click", function() {
    $(".jobTitle").html(info.jobTitle);
  });

  $(".homeOfficeButton").on("click", function() {
    $(".homeOffice").html(info.homeOffice);
  });
// });
