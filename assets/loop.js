const docRef1 = firestore.doc("loop/num");

docRef1.get().then(function(doc) {
    if (doc && doc.exists) {
        const mydata1 = doc.data();
        const a = mydata1.vari;
        console.log(parseInt(a));
    } 
}).catch(function(error){
    console.log("got error ", error);
});