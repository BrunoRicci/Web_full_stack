

$(document).ready(()=>{

    //Slider
    $('.gallery').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 750,
        responsive: true,
        pager: false
    });
    
    var posts = [
        {
            title:'Test title 1',
            date: moment().format('DD/MM/YYYY HH:MM'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam consectetur cumque debitis necessitatibus, doloribus quo officia natus molestiae aperiam non ut repudiandae quaerat. Aspernatur esse animi maxime! Optio accusamus impedit numquam debitis mollitia deleniti eveniet quos officiis. Delectus, laborum.'
        },
        {
            title:'Test title 2',
            date: moment().format('DD/MM/YYYY HH:MM'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam consectetur cumque debitis necessitatibus, doloribus quo officia natus molestiae aperiam non ut repudiandae quaerat. Aspernatur esse animi maxime! Optio accusamus impedit numquam debitis mollitia deleniti eveniet quos officiis. Delectus, laborum.'
        },
        {
            title:'Test title 3',
            date: moment().format('DD/MM/YYYY HH:MM'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam consectetur cumque debitis necessitatibus, doloribus quo officia natus molestiae aperiam non ut repudiandae quaerat. Aspernatur esse animi maxime! Optio accusamus impedit numquam debitis mollitia deleniti eveniet quos officiis. Delectus, laborum.'
        },
        {
            title:'Test title 4',
            date: moment().format('DD/MM/YYYY HH:MM'),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam consectetur cumque debitis necessitatibus, doloribus quo officia natus molestiae aperiam non ut repudiandae quaerat. Aspernatur esse animi maxime! Optio accusamus impedit numquam debitis mollitia deleniti eveniet quos officiis. Delectus, laborum.'
        }
    ];

    var post_section = $('#posts');
    posts.forEach((i)=>{
        var content = `
        <article class="post">
            <h2>${i.title}</h2>
            <span class="date">${i.date}</span>
            <p>${i.content}</p>
            <a class="button-more">Read more</a>
        </article>
        `;
        post_section.append(content);
    });

    var theme = $('#theme');
    $('#to-green').click(function(){
        theme.attr('href', 'css/theme_green.css');
    });
    $('#to-red').click(function(){
        theme.attr('href', 'css/theme_red.css');
    });
    $('#to-blue').click(function(){
        theme.attr('href', 'css/theme_blue.css');
    });

    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 300);
        return false;
    });

    //Fake login section.

    $('#login').submit(function(e){ 
        e.preventDefault();
        var name = $('#form_name').val();
        console.log('name:', name);

        localStorage.setItem('form_name', name);
        $('#user_name').text(localStorage.getItem('form_name'));
    });

    var formName = localStorage.getItem('form_name');   //Loads saved username
    if (formName != undefined) {
        $('#user_name').text(formName);
    }

    setInterval(()=>{
        $('#clock').html(moment().format('hh:mm:ss'));
    },1000);    //Update every second.

    $('#button_contact').click((e)=>{
        e.preventDefault();
        $('#slider').css('display', 'none');
        $('#content').css('display', 'none');
        $('#contact').css('display', 'block');

        $('#dateofbirth').datepicker({
            dateFormat: 'dd/mm/yy'    //Specify date format output.
        });
        $.validate({lang:'es'});

        $('#form_contact').click((e)=>{
            e.preventDefault();
        });
    });


});