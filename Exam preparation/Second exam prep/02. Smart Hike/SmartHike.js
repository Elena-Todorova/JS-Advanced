class SmartHike {

    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak] === undefined) {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`

        } else {
            return `${peak} has already been added to your goals`;
        }
    };

    hike(peak, time, difficultyLevel) {
        if (this.goals[peak] === undefined) {
            throw new Error(`${peak} is not in your current goals`
            )
        };

        if (this.resources <= 0) {
            throw new Error("You don't have enough resources to start the hike")
        };

        let diffInResourses = this.resources - time * 10;

        if (diffInResourses < 0) {
            return "You don't have enough resources to complete the hike";
        };

        this.listOfHikes.push({ peak, time, difficultyLevel });
        this.resources = diffInResourses;
        return `You hiked ${peak} peak for ${time} hours and you have ${diffInResourses}% resources left`

    };

    rest(time) {
        this.resources += Number(time) * 10;

        if (this.resources > 100) {
            this.resources = 100;
            return "Your resources are fully recharged. Time for hiking!";
        };

        return `You have rested for ${time} hours and gained ${time * 10}% resources`

    };

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`
        };

        if (criteria === 'all') {
            let result = ["All hiking records:"];
            this.listOfHikes.forEach(x => result.push(`${this.username} hiked ${x.peak} for ${x.time} hours`));

            return result.join('\n');

        } else {
            let hikes = this.listOfHikes.filter(h => h.difficultyLevel === criteria);

            if (hikes.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            };

            let sortedHikes = hikes.sort((a, b) => a.time - b.time);
            let bestHike = sortedHikes.shift();

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`

        };

        };



    }
    const user = new SmartHike('Vili');
    user.addGoal('Musala', 2925);
    user.hike('Musala', 8, 'hard');
    console.log(user.showRecord('easy'));
    user.addGoal('Vihren', 2914);
    user.hike('Vihren', 4, 'hard');
    console.log(user.showRecord('hard'));
    user.addGoal('Rui', 1706);
    user.hike('Rui', 3, 'easy');
    console.log(user.showRecord('all'));