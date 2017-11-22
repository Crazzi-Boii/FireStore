const name = document.querySelector('#name');
const nval = document.querySelector('#Nval');
const submit4 = document.querySelector('#submit');
const load = document.querySelector('#load');
const stat = document.querySelector('#status');

var firestore = firebase.firestore();
const docRef = firestore.doc("-/-")

submit4.addEventListener("click", function(){
    docRef.get().then(function(doc) {
        if (doc && doc.exists) {
            const mydata = doc.data();
           //compare to set
                //set values
                const nval1 = nval.value;
                //console.log("name : "+nval1+" and "+mydata.Name);
                if (String(nval1) === String(mydata.Name) || nval1.toUpperCase() === mydata.Name.toUpperCase()) {
                    stat.innerText = "redundant entry, cant update!!"
                } else {
                    stat.innerText = ""
                   docRef.set({
                        Name: nval1
                    }).then(function(){
                        console.log("saved");
                    }).catch(function(error){
                        console.log("got error ", error);
                    });
                    cal();
                }
        } 
    }).catch(function(error){
        console.log("got error ", error);
    });
    
});

load.addEventListener("click", function() {
    //get values
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
    });
}
getRealTimeUpdates();
