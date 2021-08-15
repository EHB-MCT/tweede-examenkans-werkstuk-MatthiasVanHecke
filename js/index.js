"use strict";

const getArticles = {
    initFields() {
        console.log('init');
        const inputForm = document.getElementById('articleInput').addEventListener('submit', (e) => {
            e.preventDefault();
            const search = document.getElementById('articleInputField').value;
            console.log(search);
            this.getArticles(search);
        });
    },
    async getArticles(news) {
        fetch(`https://thecrew.cc/news/read.php`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let htmlString = `
            <h2>article</h2> `;
                document.getElementById('container').innerHTML = htmlString;
            });
    }
};

getArticles.initFields();