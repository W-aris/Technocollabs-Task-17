// Parent Class: School
class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    // Getters
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    // Setter
    set numberOfStudents(newNumberOfStudents) {
      if (typeof newNumberOfStudents === 'number') {
        this._numberOfStudents = newNumberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  
    // Methods
    quickFacts() {
      console.log(
        `${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`
      );
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  }
  
  // Child Class: PrimarySchool
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    // Getter
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  // Child Class: HighSchool
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
  
    // Getter
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  // Instances of PrimarySchool and HighSchool
  const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
  );
  
  lorraineHansbury.quickFacts();
  
  console.log(
    School.pickSubstituteTeacher([
      'Jamal Crawford',
      'Lou Williams',
      'J. R. Smith',
      'James Harden',
      'Jason Terry',
      'Manu Ginobli',
    ])
  );
  
  const alSmith = new HighSchool('Al E. Smith', 415, [
    'Baseball',
    'Basketball',
    'Volleyball',
    'Track and Field',
  ]);
  
  console.log(alSmith.sportsTeams);
  
  // Optional: SchoolCatalog Class
  class SchoolCatalog {
    constructor() {
      this._schools = [];
    }
  
    addSchool(school) {
      this._schools.push(school);
    }
  
    get schools() {
      return this._schools;
    }
  }
  
  // Example usage of SchoolCatalog
  const schoolCatalog = new SchoolCatalog();
  schoolCatalog.addSchool(lorraineHansbury);
  schoolCatalog.addSchool(alSmith);
  
  console.log(schoolCatalog.schools);