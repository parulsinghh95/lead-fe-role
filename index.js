// Create an object containing key information for the role. Use an array for core skills 
// and nice to have skills. Use a boolean for fullRemote value 

const frontEndLeadRole = { 
    companyLocation : 'Berlin',
    fullRemote : true,
    sector : 'Consultancy',
    coreSkills : ['JavaScript', 'React', 'Node', 'AWS' ],
    niceToHaves : ['Docker', 'Kubernetes', 'PostgreSQL'],
    experienceLevel : "Lead", 
    salary : {
        min: 60000, 
        max: 70000,
        currency: "GBP"
    },
    
}

// Create a function (or while loop?)  to show the FE/BE weighting of the role 

// Use an array and template literal to create email address and twitter handle 

const [firstName, lastName, companyName] = ["Parul", "Singh", "manhattanpartners"];

const applyTo = (`${firstName[0]}.${lastName}@${companyName}.co.uk`);

const twitterHandle = ( `${firstName}${lastName}.1995`);


