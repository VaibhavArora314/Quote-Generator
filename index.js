$('#new-quote').click( () => {
    $.get('https://animechan.vercel.app/api/random', (data,status) => {
        if (status === 'success') {
            $('.quote').text(data.quote);
            $('.character').text(data.character);
            $('.anime').text('(' + data.anime + ')');
            console.log(status,data);
        } else {
            console.log(status)
        }
    })
})