
document.addEventListener('DOMContentLoaded',()=> {
 
    // variables
    const toggleSwitch = document.querySelector('#toggle_action');
    const apiKey = '8e95294833274be596982168d0d69a89';
    const article_area = document.querySelector("#news-articles");
    const search = document.querySelector('#search');
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    let searchTxt = '';
    let sudoUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=';


    const showNews = (response) => {
        console.log('got data');
        console.log(response);

        if(response.totalResults>0){
            response.articles.forEach(news=>{
                console.log(news);
            });
        }
    };


    // fetching news
    const fetchNews = async (searchTxt) => {
        console.log('loading news');
        try {
            if (searchTxt) {
                sudoUrl = 'https://newsapi.org/v2/everything?q=' + searchTxt + '&apiKey=';
            }
            let url =proxyUrl+sudoUrl+apiKey;
            console.log(url);
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error(res.status);
            }
            const data = await res.json();
            showNews(data);
        }
        catch (error) {
            alert(error);
        }
    };

    const getSearch = (event) => {
        if (event.which === 13 || event.keyCode === 13 || event.key === "Enter") {
            if (search.value.trim()) {
                searchTxt = search.value.trim();
                console.log(searchTxt);
                fetchNews(searchTxt);
            }
        }
    };

    // changing theme
    const toggle_func = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            console.log('theme light');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'default');
            console.log('theme dark');
        }
    };


    // bind event
    toggleSwitch.addEventListener('change', toggle_func);
    search.addEventListener('keypress', getSearch);
    console.log('document ready');
    fetchNews();

});