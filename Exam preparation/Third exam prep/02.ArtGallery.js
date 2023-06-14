class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    };


    addArticle( articleModel, articleName, quantity ){

        articleModel = articleModel.toLowerCase();
        let isItInTheArr = false;

        if(!this.possibleArticles[articleModel]){
            throw new Error("This article model is not included in this gallery!")
        };
            for (const el of this.listOfArticles) {
            if(el.articleName === articleName && el.articleModel === articleModel){
                el.quantity += quantity;
                isItInTheArr = true;
            } 
        }
        if(!isItInTheArr){
            this.listOfArticles.push({articleModel, articleName, quantity});
        };
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`        
    };

    inviteGuest ( guestName, personality){
        let points = 0;
        if(personality === 'Vip'){
            points = 500;
        } else if(personality === 'Middle'){
            points = 250;
        } else{
            points = 50;
        }

        let guest = this.guests.find(g => g.guestName === guestName);

        if(guest === undefined){
            this.guests.push({guestName, points, purchaseArticle: 0});
            return `You have successfully invited ${guestName}!`
        } else{
        throw new Error(`${guestName} has already been invited.`)
        }

    };

    buyArticle ( articleModel, articleName, guestName){
        let article = this.listOfArticles.find(x => x.articleModel === articleModel && x.articleName === articleName);

        if(article === undefined){
            throw new Error("This article is not found.");
        };
        if(article.quantity <= 0){
            return `The ${articleName} is not available.`
        }
        let guest = this.guests.find(g => g.guestName === guestName);

        if(guest === undefined){
            return "This guest is not invited."
        };

        let price = this.possibleArticles[articleModel];

        if(guest.points < price ){
            return "You need to more points to purchase the article."
        } else{
            guest.points -= price;
            guest.purchaseArticle += 1;
            article.quantity -= 1

            return `${guestName} successfully purchased the article worth ${price} points.`
        }
    };

    showGalleryInfo (criteria){
        if(criteria === "article"){
            let result = ["Articles information:"];

            this.listOfArticles.forEach(x=> result.push(`${x.articleModel} - ${x.articleName} - ${x.quantity}`));

            return result.join('\n');

        } else if(criteria === "guest"){
            let result = ["Guests information:"];

            this.guests.forEach(x=> result.push(`${x.guestName} - ${x.purchaseArticle}`));

            return result.join('\n');
        }

    };




}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
// // Articles information:
// picture - Mona Liza - 3
// item - Ancient vase - 1
// Guests information:
// John - 1
// Peter - 1

