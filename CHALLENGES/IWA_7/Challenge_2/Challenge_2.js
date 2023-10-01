const nickname= "Timmy";
const firstname = "Timothy";

//i should use ` instead of ' and this is more complicated than using an if statement. clean though
console.log(`Good Morning${nickname ? `, ${nickname}` : firstname ? `, ${firstname}` : ""}!`)
