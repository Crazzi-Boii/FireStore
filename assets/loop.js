const docRef1 = firestore.doc("-/-");

function cal(){
    docRef1.get().then(function(doc) {
        if (doc && doc.exists) {
            const mydata1 = doc.data();
            const a = parseInt(mydata1.i)+1;
            docRef1.set({
                i: a
            }).catch(function(error){
                console.log("got error ", error);
            });
        } 
    }).catch(function(error){
        console.log("got error ", error);
    });
}