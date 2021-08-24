const commentlist = document.getElementById('cmtmoi');
const form = document.querySelector("#binhluan");

function renderCmt(doc) {
    let li = document.createElement("li");
    let user = document.createElement('span');
    let cmt = document.createElement('span');

    li.setAttribute('data-id', doc.id);
    // luu lai id cua  doc do trong li

    user.textContent = doc.data().user;
    cmt.textContent = doc.data().cmt;


    li.appendChild(user);
    li.appendChild(cmt);



    cmtList.appendChild(li)
}




db.collection("forum").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderCmt(doc)
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('forum').add({
        user: form.user.value.trim(),
        cmt: form.cmt.value.trim(),
    })
    form.user.value = "";
    form.cmt.value = "";

})
