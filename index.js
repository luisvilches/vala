var form = new FormData();
form.append("name",20);
form.append("name","luis");
form.append("name","luis");
form.append("name","luis");

fetch(URL,{
    method:'POST',
    body: form
})