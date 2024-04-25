// master/Practice/class-circle.md

class Person {
    constructor(name, email, phone, education, experience, skills) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.education = education;
      this.experience = experience;
      this.skills = skills;
    }
  
    toJSON() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone,
        education: this.education,
        experience: this.experience,
        skills: this.skills,
      };
    }
  }

  const person1 = new Person(
    "Mamathakempeli",
    "mamathakempeli97@gmail.com",
    "709341761",
    [
      {
        degree: "Btech",
        school: "MTIS College of Technology",
        year: 2021,
      },
    ],
    [
      {
        position: "Member Technical Staff",
        company: "Linx Works Pvt. Ltdd",
        year: 2021,
      },
    ],
    ["JavaScript", "React", "Node.js", "HTML", "CSS"]
  );
  

  const personJSON = JSON.stringify(person1.toJSON(), null, 2);
  

  console.log(personJSON);
  