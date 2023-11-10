const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = await fetch('api/upload.php', {
        method: 'POST',
        body: new FormData(form)
    }).then(res => res.json());
    console.log(data);
});