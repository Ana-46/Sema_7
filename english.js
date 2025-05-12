// Perfil profesional en IT
let devProfile = {
    fullName: "Ann Marie",
    age: 39,
    profession: "Front end Developer",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
    isEmployed: true,
    contact: {
        email: "AnnMarie@gmail.com",
        location: "Las Vegas, USA"
    }
};

function introduceProfile(profile) {
    const name = profile.fullName;
    const age = profile.age;
    const profession = profile.profession;
    const skills = profile.skills.join(", ");
    const employmentStatus = profile.isEmployed ? "currently employed" : "not currently employed";
    const email = profile.contact.email;
    const location = profile.contact.location;

    const introduction = `Hello! My name is ${name}. I am ${age} years old and work as a ${profession}. 
I possess skills in ${skills}. I am ${employmentStatus}. 
You can contact me at ${email}. I am based in ${location}.`;

    return introduction;
}

// Mostrar la presentación en consola
console.log(introduceProfile(devProfile));
