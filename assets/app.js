const name = document.querySelector('#name');
const nval = document.querySelector('#Nval');
const submit4 = document.querySelector('#submit');
const load = document.querySelector('#load');

var firestore = firebase.firestore();
const docRef = firestore.doc("myweb/Usernames")

submit4.addEventListener("click", function(){
    const nval1 = nval.value;
    console.log("name : "+nval1);
    docRef.set({
        Name: nval1
    }).then(function(){
        console.log("saved");
    }).catch(function(error){
        console.log("got error ", error);
    });
});

load.addEventListener("click", function() {
    docRef.get().then(function(doc) {
        if (doc && doc.exists) {
            const mydata = doc.data();
            name.innerText = "Name: " + mydata.Name;
        } 
    }).catch(function(error){
        console.log("got error ", error);
    });
});

getRealTimeUpdates = function(){
    docRef.onSnapshot(function(doc){
        if (doc && doc.exists) {
            const mydata = doc.data();
            name.innerText = "Name: " + mydata.Name;
        }
    })
}
getRealTimeUpdates();
