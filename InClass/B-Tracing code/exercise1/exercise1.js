function greetPeople(people) {
  var greeting = "Hello ";
  // greeting = greeting + "llo";
  // greeting = greeting + " ";

  people.forEach(function(person) {
  //   greeting = greeting + person;
  // console.log(greeting);
       sayHello = greeting + person;
       console.log(sayHello)

  });

  return sayHello;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
