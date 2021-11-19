const arr = [];
$('#submit-btn').on('click', function () {

    let movieName = $('form input[type="text"').val();
    let rating = $('form input[type="number"').val();
    const div = $('<div class = "outside">');
    const div2 = $(('<div class="inside"></div>'));
    $('#movies').append(div);
    div.append(div2);
    div2.append(`<div class = "movie">${movieName}</div>`);
    div2.append(`<div class = "rate">${rating}</div>`);
    arr.push(movieName)
    div2.append('<button id="delete">Delete</button>').on('click', function () {
        div.remove();
    });

    $('form').trigger('reset');

})
