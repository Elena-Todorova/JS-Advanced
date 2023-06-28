class JobOffers {

    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    };

    jobApplication(candidates) {
        let result = [];

        for (const candidat of candidates) {
            let [name, education, yearsExperience] = candidat.split('-');

            let person = this.jobCandidates.find(p => p.name === name);

            if (person === undefined) {
                this.jobCandidates.push({ name, education, yearsExperience });
                result.push(name);
            } else {
                if (person[yearsExperience] < yearsExperience)
                    person[yearsExperience] = yearsExperience;
            };
        };
        return `You successfully added candidates: ${result.join(', ')}.`
    };

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');

        let person = this.jobCandidates.find(p => p.name === name);

        if (person === undefined) {
            throw new Error(`${name} is not in the candidates list!`)
        };

        if (Number(person.yearsExperience) < Number(minimalExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        };

        person.yearsExperience = 'hired';
        return `Welcome aboard, our newest employee is ${name}.`

    };

    salaryBonus(name) {

        let person = this.jobCandidates.find(p => p.name === name);

        if (person === undefined) {
            throw new Error(`${name} is not in the candidates list!`)
        };

        if (person.education === 'Bachelor') {

            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`

        } else if (person.education === 'Master') {

            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`

        } else {

            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    };

    candidatesDatabase(){

        let result = ["Candidates list:"];

        if(this.jobCandidates.length === 0){
            throw new Error("Candidate Database is empty!");
        };

        let sorted = this.jobCandidates.sort((a,b) => a.name.localeCompare(b.name));
        sorted.forEach(x => result.push(`${x.name}-${x.yearsExperience}`));

        return result.join('\n');

    }


}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-11"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());

//  You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Welcome aboard, our newest employee is Jordan Cole.
// Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Candidates list:
// Daniel Jones-18
// John Doe-hired
// Jordan Cole-hired
// Peter Parker-hired






