const parent=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"}, [
    React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h2",{},"Im an h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"Im an h1 tag"),
    React.createElement("h2",{},"Im an h2 tag")
    ]),
]);


const root=ReactDOM.createRoot(document.getElementById("sai"));
root.render(parent);
console.log(parent)

// const heading=React.createElement("h1",{id:"heading"},"Hello world from react");
//  const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(heading);

//  console.log(heading);


const ob1={
    x:function(){
        console.log(this.a);
    }
}
ob1.x();

const obj2={
    a:10,
}

ob1.x.call(obj2);