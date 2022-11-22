const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };

  myObject.greet()
  
  console.log(myObject.toString())