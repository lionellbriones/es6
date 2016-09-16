function letTest(){
    let foo = true;

    if(true){
        let foo = false;
        console.log(foo);
    }

    console.log(foo);0
}

letTest();