document.addEventListener('DOMContentLoaded',()=> {
 
    // variables
    const toggleSwitch = document.querySelector('#toggle_action');
    const search = document.querySelector('#search');
    let searchTxt = '';




    // fetching news
    const fetchNews = async (searchTxt) => {
        console.log('loading news');

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