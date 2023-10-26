const fillTherapistData = [
    {
      name: "Juan",
      lastName: "Perez",
      price: 100,
      phone: "123456789",
      adress: "Calle falsa 123",
      image: "https://terapify.s3.amazonaws.com/1603911710956_Psic%C3%B3logo%20en%20l%C3%ADnea%20-%20Fernando%20Terapify-min.png",
      description: "Psicólogo clínico con más de 15 años de experiencia en el tratamiento de trastornos de ansiedad y depresión. Soy un profesional certificado en terapia cognitivo-conductual (TCC), un enfoque que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental. Estoy comprometido a ayudar a mis clientes a alcanzar sus objetivos de salud mental.",
      isActive: true,
      email: "test@gmail.com",
      password: "1234",
      CategoryId: 4,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "María",
      lastName: "González",
      price: 200,
      phone: "345678901",
      adress: "Calle real 456",
      image: "https://terapify.s3.amazonaws.com/1602616868899_Psic%C3%B3logo%20en%20l%C3%ADnea%20-%20Lauraisabel%20Terapify-min.png",
      description:
        "Psicóloga clínica con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: false,
      email: "test2@gmail.com",
      password: "12345",
      CategoryId: 3,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Pedro",
      lastName: "López",
      price: 300,
      phone: "567890123",
      adress: "Calle mayor 789",
      image: "https://terapify.s3.amazonaws.com/1655855069895__Psic%C3%B3logo%20en%20linea-%20Lucas%20Di%20Marco%20Terapify-min.png",
      description:
        "Soy psicólogo clínico con experiencia en terapia de grupo, terapia de adicciones y terapia de trauma. Estoy comprometido con ayudar a las personas a superar los desafíos de la vida. Me centro en proporcionar apoyo y orientación a mis clientes.",
      isActive: true,
      email: "test3@gmail.com",
      password: "12346",
      CategoryId: 1,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Ana",
      lastName: "García",
      price: 400,
      phone: "789012345",
      adress: "Calle menor 012",
      image: "https://terapify.s3.amazonaws.com/1612980301863_Psic%C3%B3logo%20en%20l%C3%ADnea%20Laura%20Castillo%202-min.png",
      description:
        "Psicóloga clínica con experiencia en terapia cognitiva. Estoy entrenada en el enfoque cognitivo, que se centra en ayudar a las personas a identificar y cambiar los pensamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: false,
      email: "test4@gmail.com",
      password: "12347",
      CategoryId: 5,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Lucas",
      lastName: "Martínez",
      price: 500,
      phone: "901234567",
      adress: "Calle falsa 123",
      image: "https://terapify.s3.amazonaws.com/1630349601156__Psic%C3%B3logo%20en%20linea-%20Betsabe%20P%C3%A9rezTerapify%20%281%29-min.png",
      description:
        "Psicólogo clínico con experiencia en counseling. Estoy entrenado en el enfoque de counseling, que se centra en ayudar a las personas a resolver problemas y alcanzar sus objetivos.",
      isActive: true,
      email: "test5@gmail.com",
      password: "12348",
      CategoryId: 7,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Laura",
      lastName: "Rodríguez",
      price: 600,
      phone: "123456789",
      adress: "Calle falsa 123",
      image: "https://terapify.s3.amazonaws.com/1600986242818_1592852907765_1588616644846_Psic%C3%B3logo-en-l%C3%ADnea-Mauricio--Mondrag%C3%B3n----Terapify-min-min.jpg",
      description:
        "Psicóloga clínica con experiencia en terapia sistémica breve. Estoy entrenada en el enfoque sistémico breve, que se centra en ayudar a las personas a resolver problemas en sus relaciones y familias.",
      isActive: false,
      email: "test6@gmail.com",
      password: "12348",
      CategoryId: 6,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Carlos",
      lastName: "Sánchez",
      price: 700,
      phone: "345678901",
      adress: "Calle real 456",
      image: "https://terapify.s3.amazonaws.com/1617766417435__Psic%C3%B3logo%20en%20linea-%20%20fernando%20chavez%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia neuropsicológica. Estoy entrenado en el enfoque neuropsicológico, que se centra en ayudar a las personas con problemas cognitivos y de comportamiento.",
      isActive: true,
      email: "test7@gmail.com",
      password: "12349",
      CategoryId: 5,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Sara",
      lastName: "Gómez",
      price: 800,
      phone: "567890123",
      adress: "Calle mayor 789",
      image: "https://terapify.s3.amazonaws.com/1643761672588__Psic%C3%B3logo%20en%20linea-%20Yolanda%20Salas-%20%20Terapify-min.png",
      description:
        "Psicóloga clínica con experiencia en arte y musicoterapia. Estoy entrenada en el enfoque de arte y musicoterapia, que se centra en ayudar a las personas a expresarse y curarse a través del arte y la música.",
      isActive: false,
      email: "test8@gmail.com",
      password: "12350",
      CategoryId: 3,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Daniel",
      lastName: "Muñoz",
      price: 900,
      phone: "789012345",
      adress: "Calle menor 012",
      image: "https://terapify.s3.amazonaws.com/1611869030691_Psico%CC%81logo%20en%20li%CC%81nea%20-%20Van%20Der%20Graf%20%20Terapify%20%282%29-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test9@gmail.com",
      password: "12351",
      CategoryId: 3,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Paula",
      lastName: "Ruiz",
      price: 1000,
      phone: "901234567",
      adress: "Calle falsa 123",
      image: "https://terapify.s3.amazonaws.com/1632783335019__Psic%C3%B3logo%20en%20linea-%20Paulina%20Guzman%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en counseling. Estoy entrenado en el enfoque de counseling, que se centra en ayudar a las personas a resolver problemas y alcanzar sus objetivos.",
      isActive: true,
      email: "test10@gmail.com",
      password: "12352",
      CategoryId: 6,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Juana",
      lastName: "Pérez",
      price: 200,
      phone: "345678902",
      adress: "Calle real 457",
      image: "https://terapify.s3.amazonaws.com/1636570469774__Psic%C3%B3logo%20en%20linea-Carolina%20Estrada%20Terapify-min.png",
      description:
        "Psicóloga clínica con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test11@gmail.com",
      password: "12345",
      CategoryId: 5,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "José",
      lastName: "López",
      price: 300,
      phone: "567890124",
      adress: "Calle mayor 790",
      image: "https://terapify.s3.amazonaws.com/1646441800780__Psic%C3%B3logo%20en%20linea-%20Jos%C3%A9%20Luis%20Herver%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test12@gmail.com",
      password: "12346",
      CategoryId: 5,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Ana",
      lastName: "Martínez",
      price: 400,
      phone: "789012346",
      adress: "Calle pequeña 102",
      image: "https://terapify.s3.amazonaws.com/1642533393366__Psic%C3%B3logo%20en%20linea-%20Sergio%20Espino%20-%20%20Terapify-min.png",
      description:
        "Psicóloga clínica con experiencia en terapia cognitiva. Estoy entrenada en el enfoque cognitivo, que se centra en ayudar a las personas a identificar y cambiar los pensamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test13@gmail.com",
      password: "12347",
      CategoryId: 5,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "David",
      lastName: "García",
      price: 1900,
      phone: "901234568",
      adress: "Calle larga 988",
      image: "https://terapify.s3.amazonaws.com/1662563908022_Terapify-Vanessa%20Cantu%20%20%286%29.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt quam ut quam ultricies, et vehicula quam scelerisque.",
      isActive: true,
      email: "test14@gmail.com",
      password: "123419",
      CategoryId: 2,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "María",
      lastName: "González",
      price: 200,
      phone: "345678903",
      adress: "Calle real 458",
      image: "https://terapify.s3.amazonaws.com/1647393695310__Psic%C3%B3logo%20en%20linea-Lina%20Cortina%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test15@gmail.com",
      password: "12345",
      CategoryId: 3,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Pedro",
      lastName: "López",
      price: 300,
      phone: "567890125",
      adress: "Calle mayor 791",
      image: "https://terapify.s3.amazonaws.com/1620069881530__Psic%C3%B3logo%20en%20linea-%20angel%20sanchezTerapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test16@gmail.com",
      password: "12346",
      CategoryId: 7,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Patricia",
      lastName: "Martínez",
      price: 400,
      phone: "789012347",
      adress: "Calle pequeña 103",
      image: "https://terapify.s3.amazonaws.com/1649368879902__Psic%C3%B3logo%20en%20linea-%20Nohemi%20Villeda%20Terapify-min.png",
      description:
        "Psicóloga clínica con experiencia en terapia cognitiva. Estoy entrenada en el enfoque cognitivo, que se centra en ayudar a las personas a identificar y cambiar los pensamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test17@gmail.com",
      password: "12347",
      CategoryId: 5,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "David",
      lastName: "García",
      price: 1900,
      phone: "901234569",
      adress: "Calle larga 989",
      image: "https://terapify.s3.amazonaws.com/1613094915128_Psic%C3%B3logo%20en%20l%C3%ADnea%20-%20Diego%20Maga%C3%B1a%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia de pareja. Estoy entrenado en el enfoque de terapia de pareja, que se centra en ayudar a las personas a mejorar sus relaciones",
      isActive: true,
      email: "test18@gmail.com",
      password: "123419",
      CategoryId: 4,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "Juana",
      lastName: "Pérez",
      price: 200,
      phone: "345678904",
      adress: "Calle real 459",
      image: "https://terapify.s3.amazonaws.com/1628189243884__Psic%C3%B3logo%20en%20linea-%20Katy%20Monter%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test19@gmail.com",
      password: "12345",
      CategoryId: 3,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
    {
      name: "José",
      lastName: "López",
      price: 300,
      phone: "567890126",
      adress: "Calle mayor 792",
      image: "https://terapify.s3.amazonaws.com/1634666057384__Psic%C3%B3logo%20en%20linea-%20Luis%20Antonio%20P%C3%A9rez%20%20Terapify-min.png",
      description:
        "Psicólogo clínico con experiencia en terapia cognitivo-conductual. Estoy entrenado en el enfoque cognitivo-conductual, que se centra en ayudar a las personas a identificar y cambiar los pensamientos y comportamientos negativos que contribuyen a sus problemas de salud mental.",
      isActive: true,
      email: "test20@gmail.com",
      password: "12346",
      CategoryId: 1,
      linkedIn: "https://www.linkedin.com/in/francisco-perezdev/",
    },
  ];

module.exports = {
    fillTherapistData,
}