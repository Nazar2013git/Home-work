const city = {
    name: "Алматы",
    population: 2000000,
    districts: [
      { name: "Бостандық", population: 300000 },
      { name: "Алмалы", population: 250000 }
    ]
  };


  const schools = [
    { name: "№1 мектеп", district: "Алмалы", students: 500 },
    { name: "№2 мектеп", district: "Бостандық", students: 700 }
  ];
  

  schools.push({ name: "№3 мектеп", district: "Медеу", students: 600 });
  

  const updateStudentCount = (schoolName, newCount) => {
    const school = schools.find(school => school.name === schoolName);
    if (school) {
      school.students = newCount;
    }
  };
  

  updateStudentCount("№1 мектеп", 550);
  
  console.log(schools);

  const getTotalPopulation = (city) => {
    return city.districts.reduce((total, district) => total + district.population, city.population);
  };
  
  console.log(getTotalPopulation(city)); // Алматы қаласының жалпы халық саны

  const getTotalStudents = (schools) => {
    return schools.reduce((total, school) => total + school.students, 0);
  };
  
  console.log(getTotalStudents(schools)); // Барлық мектептердің оқушы санының қосындысы

  const findDistrictByName = (city, districtName) => {
    return city.districts.find(district => district.name === districtName);
  };
  
  console.log(findDistrictByName(city, "Алмалы"));